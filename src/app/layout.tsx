import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { assetPath } from "@/utils/asset";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "M.CT.M.MUN'26",
  description:
    "M.CT.M Chidambaram Chettyar International School Model United Nations 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bgTexture = `url("${assetPath("/textures/crumpled-paper.webp")}")`;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${roboto.variable} h-full antialiased`}
      style={{ "--bg-texture": bgTexture } as React.CSSProperties}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <NavBar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}

