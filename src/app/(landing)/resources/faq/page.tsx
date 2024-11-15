import { AnimationContainer, MaxWidthWrapper } from '@/components/LandingPage'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import { FAQ } from "@/utils/constants/faq";
import { APP_NAME } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `FAQ - ${APP_NAME}`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    keywords: `${APP_NAME} FAQ, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
    icons: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  };


const FaqPage = () => {
  return (
    <>
        <MaxWidthWrapper>
            <AnimationContainer delay={0.3}>
                <div className="mt-20 w-full">
                    <div className="flex flex-col items-center justify-center w-full pt-12">
                        <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-lg mt-6 text-center text-neutral-500">
                            Here are some of the most common questions we get asked. If you have a question that isn&apos;t answered here, feel free to reach out to us.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto w-full mt-20">
                        <Accordion type="single" collapsible>
                            {FAQ.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </AnimationContainer>

        </MaxWidthWrapper>
    </>
  )
}

export default FaqPage