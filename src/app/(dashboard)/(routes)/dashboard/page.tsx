"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from 'react'
import { useClerk } from "@clerk/nextjs";
import { APP_NAME } from "@/utils";

const DashboardPage = () => {

    const router = useRouter();

    const { user } = useClerk();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            
            <section className=" mx-auto pb-40 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <p className="text-xl font-medium">
                        Welcome {user?.firstName}!
                    </p>
                    <h2 className="text-white font-bold text-4xl xl:text-5xl">
                        AI-Powered Visuals at Your 
                         <span className="text-indigo-400"> Fingertips</span>
                    </h2>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Whether you&apos;re a marketer, designer, content creator, or entrepreneur, <b>{APP_NAME}</b> is here to help you create stunning visuals in just seconds, all powered by cutting-edge artificial intelligence.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Button onClick={() => router.push("/image")} className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Generate Image
                        </Button>
                        <Button onClick={() => router.push("/")} className="px-7 py-3 w-full bg-slate-900 hover:bg-slate-700 text-gray-200 text-center rounded-md block sm:w-auto">
                            Back to Home
                        </Button>
                    </div>
                </div>
            </section>
            
        </div>
    )
};

export default DashboardPage