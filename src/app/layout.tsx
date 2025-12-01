import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trymemex.com"),
  title: "Memex - Your Universal Brain",
  description:
    "Sync books, video, and audio into one thinking tool. Native for iOS & Mac. The universal content library for your second brain.",
  keywords: [
    "memex",
    "second brain",
    "note taking",
    "iOS app",
    "Mac app",
    "content organization",
    "knowledge management",
    "ebook reader",
    "podcast notes",
    "video annotations",
  ],
  authors: [{ name: "Memex" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Memex - Your Universal Brain",
    description:
      "Sync books, video, and audio into one thinking tool. Native for iOS & Mac.",
    url: "https://trymemex.com",
    siteName: "Memex",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Memex - Your Universal Brain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memex - Your Universal Brain",
    description:
      "Sync books, video, and audio into one thinking tool. Native for iOS & Mac.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
