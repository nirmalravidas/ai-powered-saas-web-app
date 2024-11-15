
import crypto from "crypto";
import { NextResponse } from "next/server";

const generateSignature = (order_id: string, razorpay_payment_id: string) => {
  const key_secret = process.env.RAZORPAY_SECRET_ID;
  
  if (!key_secret) {
    throw new Error("RAZORPAY_SECRET_ID environment variable is not set.");
  }

  return crypto
    .createHmac("sha256", key_secret)  // Ensure lowercase "sha256"
    .update(order_id + '|' + razorpay_payment_id)
    .digest('hex');
};

export async function POST(req: Request) {
  try {
    const { order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    // Generate the expected signature
    const generatedSignature = generateSignature(order_id, razorpay_payment_id);

    console.log("Generated Signature:", generatedSignature);
    console.log("Received Razorpay Signature:", razorpay_signature);

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { message: "Payment verification failed", isOk: false },
        { status: 400 }
      );
    }

    // Update order status in the database or grant access here

    return NextResponse.json(
      { message: "Payment verified successfully", isOk: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error during payment verification:", error);
    return NextResponse.json(
      { message: "Internal server error", isOk: false },
      { status: 500 }
    );
  }
};