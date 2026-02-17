import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Adnan Patel & Tahreem Khan — Dawat-e-Walima",
  description:
    "You are cordially invited to the Dawat-e-Walima of Adnan Patel & Tahreem Khan on Sunday, 29th March 2026 at Mehfil Hall, Mumbai.",
  keywords: [
    "walima",
    "wedding",
    "invitation",
    "islamic wedding",
    "adnan patel",
    "tahreem khan",
    "dawat-e-walima",
  ],
  openGraph: {
    title: "Adnan Patel & Tahreem Khan — Dawat-e-Walima",
    description:
      "You are cordially invited to the Dawat-e-Walima of Adnan Patel & Tahreem Khan. Sunday, 29th March 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
