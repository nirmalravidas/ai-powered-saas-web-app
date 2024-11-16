import { Metadata } from 'next';
import { APP_DOMAIN, APP_NAME } from '../';

export const generateMetadata = ({
  title = `${APP_NAME} - Create Stunning Images Instantly`,
  description = `${APP_DOMAIN} is an AI-powered image generator that helps you create stunning visuals from simple prompts. Whether you are a content creator, designer, or marketer, generate unique images effortlessly.`,
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
  keywords,  // Include keywords in the metadata
  icons,
  openGraph: {
    title,
    description,
    url: `${APP_DOMAIN}`,  // Add URL for Open Graph
    ...(image && { images: [{ url: image }] }),
  },
  twitter: {
    title,
    description,
    ...(image && { card: `${APP_NAME}`, images: [image] }),
    creator: "@nirmalravidas_",
  },
  // Optional: Disallow search engine indexing on specific pages
  ...(noIndex && { robots: { index: false, follow: false } }),
});
