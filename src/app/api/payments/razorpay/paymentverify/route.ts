
import crypto from "crypto";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib";

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
      orderId,
       
    } = await req.json();

    // Generate the expected signature
    const generated_signature = await generateSignature(orderCreationId, razorpay_payment_id);

    if (generated_signature !== razorpay_signature) {

      return NextResponse.json({ message: "failed", isOk: false }, { status: 400 });
      
    }

     // Update order status in the database or grant access here
    await db.userSubscription.update({
      where: {
        id: orderId,
        userId: userId,
      },
      data: {
        status: "paid",
      },
    });

    return NextResponse.json({ message: "success", isOk: true }, { status: 200 });

    

  } catch (error) {
    console.error("Error during payment verification:", error);
    return NextResponse.json(
      { message: "Internal server error", isOk: false },
      { status: 500 }
    );
  }
};