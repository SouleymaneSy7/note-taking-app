import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

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
    }
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
    }
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
    }
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
        className={`${gillSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
