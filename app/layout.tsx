import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const incons = Inconsolata({ subsets: ["latin"], variable: "--font-incons" });

export const metadata: Metadata = {
  title: "Youth Development Dashboard",
  description: "to empower the the youth is the primary duity of our institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-incons min-h-screen antialiased", incons.variable)}
      >
        {children}
      </body>
    </html>
  );
}
