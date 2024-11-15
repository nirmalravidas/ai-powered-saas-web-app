
import { MaxWidthWrapper } from "@/components/LandingPage";
import { Toaster } from "@/components/ui/sonner";
import { APP_NAME } from "@/utils";
import { Metadata } from "next";
import React from 'react';


export const metadata: Metadata = {
    title: `Sign up - ${APP_NAME}`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    keywords: `${APP_NAME} sign up, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
    icons: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  };


interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <MaxWidthWrapper>
            <Toaster richColors theme="dark" position="top-right" />
            <main className="mx-auto w-full relative">
            
                    {children}
            </main>
        </MaxWidthWrapper>
    );
};

export default MarketingLayout