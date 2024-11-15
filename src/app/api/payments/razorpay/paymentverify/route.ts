
import crypto from "crypto";
import { NextResponse } from "next/server";
import { db } from "@/lib";
import { auth } from "@clerk/nextjs/server";

const generateSignature = async (razorpayOrderId: string, razorpay_payment_id: string) => {
  const key_secret = process.env.RAZORPAY_KEY_SECRET as string;
  
  if (!key_secret) {
    throw Error("RAZORPAY_SECRET_ID environment variable is not set.");
  }

  const sig = crypto
  .createHmac('sha256', key_secret)
  .update(`${razorpayOrderId}|${razorpay_payment_id}`)
  .digest('hex');
  return sig;
};

export async function POST(req: Request) {

  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "User not authenticated" }, { status: 401 });
  }

  try {

    const { 
      // Fields for payment verification
      orderCreationId, 
      razorpay_payment_id, 
      razorpay_signature,
      // Additional fields for database
      id,
      amount,
      currency,
      receipt,
      status,
      plan,
       
    } = await req.json();

    // Generate the expected signature
    const generated_signature = await generateSignature(orderCreationId, razorpay_payment_id);

    if (generated_signature === razorpay_signature) {

      await db.userSubscription.create({
        data: {
          id: id,
          userId: userId,
          status: status,
          amount: amount,
          currency: currency,
          receipt: receipt,
          plan: plan,
          createdAt: new Date(),
        },
      });

      return NextResponse.json({message: "success"}, { status: 200 });
      
    } else {
      return NextResponse.json({ message: "failed"});
    }

    // Update order status in the database or grant access here

    

  } catch (error) {
    console.error("Error during payment verification:", error);
    return NextResponse.json(
      { message: "Internal server error", isOk: false },
      { status: 500 }
    );
  }
};