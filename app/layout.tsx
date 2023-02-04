"use client";
import "./globals.css";
import { Open_Sans } from "@next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ModeContext } from "../ModeContext";
import { useState } from "react";
import { Mode } from "@/types";

const open_sans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-Open_Sans",
});
//I can put navs and footers here. It will apply across all pages.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("copywriter");
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${open_sans.className}`}>
        <ModeContext.Provider value={{ mode, setMode }}>
          <Navbar />

          {children}
        </ModeContext.Provider>
        <Footer />
      </body>
    </html>
  );
}
