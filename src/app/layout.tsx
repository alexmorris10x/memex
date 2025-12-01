import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "Memex - Your Universal Brain",
    description:
      "Sync books, video, and audio into one thinking tool. Native for iOS & Mac.",
    url: "https://trymemex.com",
    siteName: "Memex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memex - Your Universal Brain",
    description:
      "Sync books, video, and audio into one thinking tool. Native for iOS & Mac.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
