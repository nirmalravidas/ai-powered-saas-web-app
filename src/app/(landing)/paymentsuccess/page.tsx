"use client"

import { Button } from "@/components/ui/button";
import React from 'react'
import { useClerk } from "@clerk/nextjs";
import { useSearchParams, useRouter } from "next/navigation";

const PaymentSuccessPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams()
    const paymentid = searchParams.get('razorpay_payment_id')

    const { user } = useClerk();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            
            <section className=" mx-auto pb-72 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <p className="text-xl font-medium">
                        Hey {user?.firstName}!
                    </p>
                    <h2 className="text-white font-bold text-4xl xl:text-5xl">
                    Your payment has been successful!
                    </h2>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Your paymentID <b>{paymentid}</b> has been processed. 
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Button onClick={() => router.push("/")} className="px-7 py-3 w-full bg-slate-900 hover:bg-slate-700 text-gray-200 text-center rounded-md block sm:w-auto">
                            Back to Dashboard
                        </Button>
                    </div>
                </div>
            </section>
            
        </div>
    )
};

export default PaymentSuccessPage