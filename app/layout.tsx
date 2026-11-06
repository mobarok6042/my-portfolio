import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobarok Hossen | Full-stack web developer",
  description:
    "Mobarok Hossen is a full-stack web developer from Bangladesh, building fast, clean web apps with Next.js, React, Node.js and MongoDB.",
  metadataBase: new URL("https://mobarok.dev"),
  openGraph: {
    title: "Mobarok Hossen | Full-stack web developer",
    description:
      "I build fast, clean web apps with JavaScript, Next.js, React, Node.js and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* App Router uses the root layout for site-wide font loading. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Sora:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
