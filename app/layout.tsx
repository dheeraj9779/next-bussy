import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

import "easymde/dist/easymde.min.css"



const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
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
