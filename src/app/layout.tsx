import type { Metadata } from "next";
import { Geist, Geist_Mono, Julius_Sans_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  variable: "--font-julius-sans-one",
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Network Map",
  description: "SNO physical mapping of network systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${juliusSansOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
