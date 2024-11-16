import { Metadata } from "next";

export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - Create Stunning Images Instantly with AI`,
  description = `${process.env.NEXT_PUBLIC_APP_NAME} is an AI-powered image generator that helps you create stunning visuals from simple prompts. Whether you are a content creator, designer, or marketer, generate unique images effortlessly.`,
  image = "/thumbnail.png",
  keywords = "AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools",  // Add keywords here
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
  // Optional: Add additional metadata 
  
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
  // Optional: Disallow search engine indexing on specific pages
  ...(noIndex && { robots: { index: false, follow: false } }),
});