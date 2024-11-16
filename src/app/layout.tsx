import './globals.css';

import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from '@/components/LandingPage';
import { ModalProvider } from '@/components/Dashboard/MobileProvider';
import { cn, generateMetadata } from '@/utils';
import { ToasterProvider } from '@/components/Dashboard/toaster-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = generateMetadata();

export default function RootLayout({ children,}: { children: React.ReactNode;}) {

  return (
    <ClerkProvider dynamic={true}>
      <html lang="en">
        <head>
          <meta property="og:image" content="<generated>" />
          <meta property="og:image:type" content="<generated>" />
          <meta property="og:image:width" content="<generated>" />
          <meta property="og:image:height" content="<generated>" />
          
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