import { AnimationContainer, MaxWidthWrapper} from "@/components/LandingPage";
import MagicBadge from "@/components/ui/magic-badge";
import { ABOUT, APP_NAME, TEAM } from "@/utils";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `About - ${APP_NAME}`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    keywords: `${APP_NAME} about, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
    icons: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  };

const AboutPage = () => {

    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                        <MagicBadge title="About" />
                        
                            {ABOUT.map((item) => (
                                <div key={item.title}>
                                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                                        {item.title}
                                    </h1>
                                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        

                        {/* Team Section */}
                        <div className="mt-12 text-center">
                            <div className="flex flex-col items-center justify-center w-full">
                                {
                                    TEAM.map((item, idx) => (
                                        <div key={idx}>
                                            <div className="w-20 h-20 mx-auto">
                                                <Image
                                                    src={item.avatar}
                                                    className="w-full h-full rounded-full"
                                                    width={80}
                                                    height={80}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <h4 className="text-slate-400 font-semibold sm:text-lg">{item.name}</h4>
                                                <p className="text-slate-400">{item.title}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>  
        </>
    )
};

export default AboutPage