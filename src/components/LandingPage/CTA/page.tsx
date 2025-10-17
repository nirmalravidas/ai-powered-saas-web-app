import { Button } from '@/components/ui/button'
import { LampContainer } from '@/components/ui/lamp'
import Link from 'next/link'
import React from 'react'
import { Container, Wrapper } from '..'

const CTA = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative"> 
      <Container>
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
              Turn Topics into Courses
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Transform your topics into structured, ready-to-teach courses effortlessly. With {process.env.NEXT_PUBLIC_APP_NAME}, generate complete modules, lessons, and examples instantly—perfect for educators, content creators, and trainers looking to save time and create high-quality courses.
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
  )
}

export default CTA
