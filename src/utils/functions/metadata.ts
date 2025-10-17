import { Metadata } from "next";

export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - AI Course Generator`,
  description = `${process.env.NEXT_PUBLIC_APP_NAME} is an AI-powered course generator that helps you create structured, ready-to-teach courses from simple topics or prompts. Whether you are an educator, content creator, or trainer, generate professional courses effortlessly and save weeks of planning.`,
  image = "/thumbnail.png",
  keywords = "AI course generator, create courses, online courses, course creation, educational content, training materials, AI education, lesson planning",  
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  keywords?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  keywords,  
  icons,
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_APP_DOMAIN,
    ...(image && { images: [{ url: image }] }),
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
  },
  twitter: {
    title,
    description,
    ...(image && { card: "summary_large_image", images: [image] }),
    creator: "@nirmalravidas_",
  },
  ...(noIndex && { robots: { index: false, follow: false } }),
});
