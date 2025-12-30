import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { siteMetadata } from "./metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts - Deuterium Variable */}
        <link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css" />
      </head>
      <body className="antialiased">
        <div className="site-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        {/* Chatbot Widget */}
        <Script
          src="https://embed-widget-nine.vercel.app/widget.js"
          data-org-id="G3uyRBGv0s"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
