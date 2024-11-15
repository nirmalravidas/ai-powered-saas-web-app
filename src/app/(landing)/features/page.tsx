import React from 'react'
import MagicBadge from '@/components/ui/magic-badge'
import { APP_NAME, FEATURES } from '@/utils'
import MagicCard from '@/components/ui/magic-card'
import { AnimationContainer, MaxWidthWrapper } from '@/components/LandingPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Features - ${APP_NAME}`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    keywords: `${APP_NAME} features, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
    icons: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  };

const HowItWorksSection = () => {
  return (
    <>
        <MaxWidthWrapper className="py-10">
                
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="How it Works" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                        Features of Our AI-Powered Image Generation Platform
                        </h2>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8">
                    {FEATURES.map((feature, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <feature.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {feature.tagline}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>
    </>
  )
}

export default HowItWorksSection