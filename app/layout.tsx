"use client";
import "./globals.css";
import { Kanit } from "@next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ModeContext } from "../ModeContext";
import { useState } from "react";
import { Mode } from "@/types";
import { AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";

const kanit = Kanit({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-Kanit",
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <NextSeo
        useAppDir={true}
        themeColor="#F0C987"
        titleTemplate="Lev Markelov | Levitate Above The Noise"
      />
      <head />

      <body className={`${kanit.className}`}>
        <ModeContext.Provider value={{ mode, setMode }}>
          <Navbar />
          <AnimatePresence
            mode="wait"
            initial={false}
            // onExitComplete={() => window.scrollTo(0, 0)}
          >
            {children}
          </AnimatePresence>
        </ModeContext.Provider>
        <Footer />
      </body>
    </html>
  );
}
