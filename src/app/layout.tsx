import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { CustomCursor, Spotlight } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageBackground } from "@/components/layout/PageBackground";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { siteConfig } from "@/lib/data/site";

import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffreyyaj.dev"),
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <PageBackground />
          <NoiseOverlay />
          <Spotlight />
          <CustomCursor />
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
