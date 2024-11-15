import { NextResponse} from "next/server";
import Razorpay from "razorpay";
import { auth } from "@clerk/nextjs/server";
import { PRO_PLAN_PRICE, PREMIER_PLAN_PRICE } from "@/utils";

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    // Parse and validate the request body
    const { plan } = await req.json();

    if (!plan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Authenticate the user
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    let amount;
    if (plan === "pro") {
      amount = PRO_PLAN_PRICE;
    } else if (plan === "premier") {
      amount = PREMIER_PLAN_PRICE;
    } else {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // Create a new Razorpay order
    const order = await razorpayInstance.orders.create({
      amount: amount * 100, // Convert to smallest currency unit
      currency: "INR",
      receipt: `receipt_order_${Math.random().toString(36).substring(7)}`, // Generate a unique receipt ID
    });

    
    
    // Respond with the created order details
    return NextResponse.json(order);

  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
