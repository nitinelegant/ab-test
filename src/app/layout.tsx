import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const interRegular = localFont({
//   src: "./fonts/Inter_28pt-Regular.ttf",
//   variable: "--font-inter-regular",
//   weight: "100 900",
// });

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
      <body className={`${inter.variable} font-sans  antialiased`}>
        {children}
      </body>
    </html>
  );
}
