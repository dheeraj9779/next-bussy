import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const myFonts = localFont({
  src: [
    {
      path: "./fonts/NothingYouCouldDo-Regular.ttf",
      weight: "400",
    }
    
  ],
  variable: '--my-font'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo = Exo({
  variable: "--font-exo"
});

export const metadata: Metadata = {
  title: "Bussy",
  description: "Generated ideas here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
