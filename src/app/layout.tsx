import type { Metadata } from "next";
import "./globals.css";
import { Inter, Exo_2 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const exoFont = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "MyABTest",
  description: "Innovatin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${exoFont.variable}  font-sans  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
