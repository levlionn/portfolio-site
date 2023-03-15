// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "Lev Markelov",
  description:
    "Welcome to my slice of the internet! Find out more about me, my work and what I'm doing next by visiting my website!",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.levm.me/",
    title: "Lev Markelov",
    description:
      "Welcome to my portfolio! Here you can learn more about what I'm currently up to, as well as see my projects, or read up on my latest article. Looking for a copywriter or developer – check out my website!",
    images: [
      {
        url: "/images/levm_SEO_Image-min.png",
        width: 800,
        height: 600,
        alt: "Og Image of Lev Markelov, in profile, wearing a gray hat on a beach background.",
        type: "image/png",
      },
    ],
    siteName: "Lev Markelov Personal Website",
  },
  twitter: {
    handle: "@thelevmarkelov",
    cardType: "summary_large_image",
  },
};
