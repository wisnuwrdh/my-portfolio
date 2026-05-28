import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Product Developer — Modern SaaS Interfaces",
  description:
    "Building modern SaaS interfaces and product-focused web experiences. Frontend developer specializing in Next.js, React, and premium UI/UX.",
  keywords: [
    "frontend developer",
    "SaaS",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX",
    "product developer",
  ],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Frontend Product Developer — Modern SaaS Interfaces",
    description:
      "Building modern SaaS interfaces and product-focused web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
