import type { Metadata } from "next";
import localFont from "next/font/local";
import { Satisfy } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-satisfy",
});

const gillSans = localFont({
  src: [
    {
      weight: "400",
      style: "normal",
      path: "../../public/assets/fonts/sans-serif/gill-sans-regular.woff2",
    },
    {
      weight: "700",
      style: "normal",
      path: "../../public/assets/fonts/sans-serif/gill-sans-bold.woff2",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-gill-sans",
});

const georgia = localFont({
  src: [
    {
      weight: "400",
      style: "normal",
      path: "../../public/assets/fonts/serif/georgia-regular.woff2",
    },
    {
      weight: "700",
      style: "normal",
      path: "../../public/assets/fonts/serif/georgia-bold.woff2",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-georgia",
});

const iaWriterMono = localFont({
  src: [
    {
      weight: "400",
      style: "normal",
      path: "../../public/assets/fonts/mono/ia-writer-mono-regular.woff2",
    },
    {
      weight: "700",
      style: "normal",
      path: "../../public/assets/fonts/mono/ia-writer-mono-bold.woff2",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-ia-writer-mono",
});

export const metadata: Metadata = {
  title: "Inkly - Note taking web app",
  description: "A fullstack note taking web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satisfy.variable} ${iaWriterMono.variable} ${gillSans.variable} ${georgia.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
