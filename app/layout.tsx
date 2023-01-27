import "./globals.css";
import { Comfortaa } from "@next/font/google";

import Navbar from "../components/Navbar";

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});
//I can put navs and footers here. It will apply across all pages.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${comfortaa.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
