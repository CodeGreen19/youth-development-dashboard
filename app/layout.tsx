import type { Metadata } from "next";
import { Inconsolata, Potta_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const incons = Inconsolata({ subsets: ["latin"], variable: "--font-incons" });
const potta = Potta_One({
  subsets: ["latin"],
  variable: "--font-patta",
  weight: ["400"],
});

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
        className={cn(
          "font-incons text-lg min-h-screen antialiased",
          incons.variable,
          potta.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
