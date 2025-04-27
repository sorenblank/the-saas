import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Saas Landing Page",
  description: "A modern, responsive SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion. This project showcases a sleek design with smooth animations and a mobile-first approach.",
  openGraph: {
    title: "The Saas Landing Page",
    description: "A modern, responsive SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion. This project showcases a sleek design with smooth animations and a mobile-first approach.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://thesaas.vercel.app/og-image.png",
        width: 1784,
        height: 892,
        alt: "thesaas"
      }
    ]
  },
  twitter: {
    creator: "@sorenblank",
    site: "@sorenblank",
    card: "summary_large_image",
    images: [
      {
        url: "https://thesaas.vercel.app/og-image.png",
        alt: "thesaas"
      }
    ]
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: '#93A5E5', // Theme color for the website
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
