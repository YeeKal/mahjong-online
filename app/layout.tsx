import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageWrapper from "@/components/wrapper/page-wrapper";
import {SITE_CONFIG} from '@/lib/constants'
import { Analytics } from '@vercel/analytics/react'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${SITE_CONFIG.title}`,
  description: `${SITE_CONFIG.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <PageWrapper>
            {children}
            <Analytics />
          </PageWrapper>
      </ThemeProvider>
      </body>
    </html>
  );
}
