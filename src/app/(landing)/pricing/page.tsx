import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components/LandingPage";
import MagicBadge from "@/components/ui/magic-badge";
import { APP_NAME } from "@/utils";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `Pricing - ${APP_NAME}`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    keywords: `${APP_NAME} pricing, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
    icons: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  };


const PricingPage = () => {

    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                    <MagicBadge title="Pricing" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Simple and transparent pricing
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        Choose a plan that works for you. No hidden fees. No surprises.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <PricingCards />
            </AnimationContainer>

        </MaxWidthWrapper>
    )
};

export default PricingPage