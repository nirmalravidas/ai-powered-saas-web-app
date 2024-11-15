import { AnimationContainer, MaxWidthWrapper } from '@/components/LandingPage'
import React from 'react'
import { CANCELLATIONREFUNDPOLICY } from '@/utils'

const CancellationRefundPolicy = () => {
  return (
    <>
        <MaxWidthWrapper className='mb-10'>
            <AnimationContainer delay={0.3}>
                <div className="mt-20 w-full">
                    <div className="flex flex-col items-center justify-center w-full pt-12">
                        <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                        Cancellation & Refund Policy
                        </h2>
                        
                    </div>
                    <div className="max-w-3xl mx-auto w-full mt-20">
                        <div>
                            {CANCELLATIONREFUNDPOLICY.map((refund, idx) => (
                                    <div key={idx}>
                                        <p>{refund.paragraph}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </AnimationContainer>

        </MaxWidthWrapper>
    </>
  )
}

export default CancellationRefundPolicy