import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import axios from "axios";
import { NextResponse } from "next/server";
import { MAX_FREE_COUNTS, MAX_PREMIER_COUNTS, MAX_PRO_COUNTS } from "@/utils";

export async function POST(req: Request) {
  try {

    const { prompt, n = 1, size = '512x512' } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ error: "No API key provided" }, { status: 400 });
    }

    // Get the user's subscription details
    const { plan, isActive } = await checkSubscription();

    // Set usage limits based on the plan
    let usageLimit;
    if (plan === 'premier' && isActive) {
      usageLimit = MAX_PREMIER_COUNTS;
    } else if (plan === 'pro' && isActive) {
      usageLimit = MAX_PRO_COUNTS;
    } else {
      usageLimit = MAX_FREE_COUNTS;
    }

    // Check the current usage count
    const currentUsageCount = await checkApiLimit();

    // Ensure currentUsageCount is a valid number
    if (typeof currentUsageCount !== 'number' || isNaN(currentUsageCount)) {
      console.error(`Invalid usage count: ${currentUsageCount}`);
      return new NextResponse('Invalid usage count.', { status: 400 });
    }

    // Restrict image generation if usage exceeds plan limit
    if (currentUsageCount >= usageLimit) {
      const message = isActive
        ? `Usage limit reached for your ${plan} plan.`
        : "Free trial limit reached or subscription expired. Upgrade to generate more images.";
      return new NextResponse(message, { status: 403 });
    }

    // Prepare OpenAI request payload
    const requestData = {
      
      prompt,
      n,
      size,
    };

    // Make the request to OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Increment usage only if under the plan limit
    await increaseApiLimit();

    // Extract and return the image URLs
    const imageUrls = response.data.data.map((item: { url: string }) => item.url);
    return NextResponse.json({ imageUrls });

  } catch (error) {
    console.error(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
