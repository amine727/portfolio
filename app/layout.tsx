import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "KABBAJ AMINE | Cybersecurity & Network Engineering",
  description:
    "Personal portfolio of KABBAJ AMINE — 4th year Cybersecurity & Network Engineering student specializing in network security, systems security, and ethical hacking.",
  keywords: [
    "cybersecurity",
    "network engineering",
    "portfolio",
    "KABBAJ AMINE",
    "security",
    "ethical hacking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080d14] text-[#e2e8f0]`}
      >
        {children}
      </body>
    </html>
  );
}