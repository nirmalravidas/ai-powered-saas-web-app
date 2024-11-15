
import { Icons, SignInForm } from "@/components/LandingPage";
import { APP_NAME } from "@/utils";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: `Sign in - ${APP_NAME}`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    keywords: `${APP_NAME} sign in, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
    icons: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  };


const SignInPage = () => {
    return (
        <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
            <div className="flex items-center w-full py-8 border-b border-border/80">
                <Link href="/" className="flex items-center gap-x-2">
                    <Icons.logo className="w-6 h-6" />
                    <h1 className="text-lg font-medium">
                        {APP_NAME}
                    </h1>
                </Link>
                <Link href="/" className="ml-auto flex items-center gap-x-1 text-sm hover:underline">
                    Back to Home
                    <ArrowRight className="w-4 h-4" /> {/* ArrowRight icon */}
                </Link>
            </div>

            <SignInForm />

            <div className="flex flex-col items-start w-full">
                <p className="text-sm text-muted-foreground">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-primary">
                        Terms of Service{" "}
                    </Link>
                    and{" "}
                    <Link href="/privacy-policy" className="text-primary">
                        Privacy Policy
                    </Link>
                </p>
            </div>
            <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full">
                <p className="text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/sign-up" className="text-primary">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default SignInPage