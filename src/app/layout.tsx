import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from '@/components/LandingPage';
import { ModalProvider } from '@/components/Dashboard/MobileProvider';
import { APP_NAME, cn } from '@/utils';
import { ToasterProvider } from '@/components/Dashboard/toaster-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${APP_NAME} - Create Stunning Images Instantly`,
  description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
  keywords: `${APP_NAME}, AI image generator, create images, AI image creation, image generation, design, art, visuals, content creation, marketing tools`,
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' },
  ],
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: `${APP_NAME}`,
      },
    ],
  },
  // openGraph: 
  openGraph: {
    title: `${APP_NAME} - Create Stunning Images Instantly`,
    description: 'AI-powered image generator for creating stunning visuals from simple prompts.',
    url: `${APP_NAME}`,
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: `${APP_NAME}`,
      },
    ],
  },
};

export default function RootLayout({ children,}: { children: React.ReactNode;}) {

  return (
    <ClerkProvider dynamic={true}>
      <html lang="en">
        <head>
          {/* Metadata */}
          <meta property="og:image" content="<generated>" />
          <meta property="og:image:type" content="<generated>" />
          <meta property="og:image:width" content="<generated>" />
          <meta property="og:image:height" content="<generated>" />
          {/* favicon */}
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={cn(
                    "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden", inter.className,)}>
          <Providers>
            <ModalProvider />
            <ToasterProvider />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
};