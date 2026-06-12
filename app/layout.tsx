import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BusinessCard, Demographics, Navigation } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mia Ciasullo Portfolio",
  description:
    "Software engineer specializing in full stack development and modern web technologies.",
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
        <main className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white">
          <header className="header relative flex flex-col md:flex-row justify-center items-center md:items-end gap-16 bg-gradient-to-b from-black via-gray-900 to-gray-700">
            {/* <div id="header-blur" className="pointer-events-none absolute inset-x-0 -bottom-16 h-24 bg-black/40 blur-2xl" /> */}
            <BusinessCard />
            <Demographics />
          </header>

          <Navigation />

          <div className="bg-orange-100">{children}</div>
        </main>
      </body>
    </html>
  );
}
