import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://resume-mamangcao.vercel.app'),
  title: {
    default: "Free Resume Builder | Create ATS-Friendly Resumes in Real-Time",
    template: "%s | Resume Builder",
  },
  description:
    "Build a professional resume in minutes. No login required, 100% free, and privacy-first. Choose from Harvard or Modern templates and download PDF instantly.",
  keywords: [
    "resume builder",
    "free resume maker",
    "ATS friendly resume",
    "CV maker",
    "Harvard resume template",
    "no login resume builder",
    "privacy focused resume",
  ],
  authors: [{ name: "Abdul Haleem Mamangcao", url: "https://mamangcao.vercel.app/" }],
  creator: "Abdul Haleem Mamangcao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resume-mamangcao.vercel.app",
    title: "Free Real-Time Resume Builder",
    description: "Create professional resumes instantly. No account needed. Data saved locally.",
    siteName: "Resume Builder",
    images: [
      {
        url: "/ss-img.png",
        width: 1200,
        height: 630,
        alt: "Resume Builder Preview",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
