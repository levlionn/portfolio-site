// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

export default async function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "About Lev Markelov",
    description:
      "Learn more about who I am, what I've done and where I'm going next.",
    titleTemplate: "About Lev Markelov",
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
