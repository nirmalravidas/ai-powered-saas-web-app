import { NextResponse } from "next/server";
import axios from "axios";
import { auth } from "@clerk/nextjs/server";

const JSON_SCHEMA = {
    "title": "string",
    "summary": "string",
    "modules": [{
        "moduleTitle": "string",
        "moduleDescription": "string",
        "lessons": ["string"]
    }]
};

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    // Step 1: Get IAM token
    const tokenRes = await axios.post(
      "https://iam.cloud.ibm.com/identity/token",
      new URLSearchParams({
        grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        apikey: process.env.WATSONX_AI_APIKEY!,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const iamToken = tokenRes.data.access_token;

    const response = await axios.post(
      `${process.env.WATSONX_AI_URL}/ml/v1/text/generation?version=2024-05-31`,
      {
        input: `Generate a course outline for: "${topic}" using the following schema: ${JSON.stringify(
          JSON_SCHEMA
        )}`,
        model_id: "meta-llama/llama-3-2-11b-vision-instruct",
        project_id: process.env.WATSONX_AI_PROJECT_ID!,
        parameters: { max_new_tokens: 500 },
      },
      {
        headers: {
          Authorization: `Bearer ${iamToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const generated = response.data?.results?.[0]?.generated_text;

    if (!generated) {
      return NextResponse.json(
        { error: "No generated text from WatsonX", details: response.data },
        { status: 500 }
      );
    }

    return NextResponse.json({ result: generated });
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message || error);
    return NextResponse.json(
      { error: "Failed to generate course", details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
