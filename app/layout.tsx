import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navigatie from "@/components/Navigatie";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: brand.name,
    template: `%s · ${brand.name}`,
  },
  description: `${brand.tagline}. Welke beroepen en hbo-opleidingen passen bij jou? Zonder login, met respect voor je privacy.`,
  applicationName: brand.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen font-sans text-ink`}
      >
        <Navigatie />
        <main className="min-h-screen pt-[72px] md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
