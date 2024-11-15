import { HowItWorksSection } from "@/components/LandingPage"
import { APP_NAME } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `How it Works - ${APP_NAME}`,
  description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
  keywords: `${APP_NAME} pricing, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
  ],
};

const HowItWorks = () => {
  return (
    <>
        <HowItWorksSection />
    </>
  )
}

export default HowItWorks