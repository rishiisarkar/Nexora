import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nexora - Midnight",
  description: "Prove membership without revealing your private credential. Built on Midnight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${manrope.variable} ${geist.variable}`}
    >
      <body className="flex min-h-full flex-col bg-surface text-primary">
        <Splash />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
