import { Button } from '@/components/ui/button'
import { LampContainer } from '@/components/ui/lamp'
import Link from 'next/link'
import React from 'react'
import { Container, Wrapper } from '..'

const CTA = () => {
  return (
    <>
        <Wrapper className="flex flex-col items-center justify-center py-12 relative"> 
                <Container>
                        <LampContainer>
                            <div className="flex flex-col items-center justify-center relative w-full text-center">
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                Turn Ideas into Images
                                </h2>
                                <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Transform your ideas into beautiful images effortlessly. With {process.env.NEXT_PUBLIC_APP_NAME}, , generate high-quality visuals instantly—perfect for marketers, designers, and creators looking for fast, unique content.
                                </p>
                                <Button className="mt-6" asChild>
                                    <Link href="/sign-in">
                                        Get started for free
                                        
                                    </Link>
                                </Button>
                            </div>
                        </LampContainer>
                </Container>
            </Wrapper>
    </>
  )
}

export default CTA