import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import getArticleMetaData from "@/components/GetArticleMetaData";
import Image from "next/image";

import Link from "next/link";

const ArticlePreview = () => {
  const articleMetaData = getArticleMetaData();
  const articlePreview = articleMetaData.map((article) => {
    console.log(article);
    return (
      <div
        key={article.slug}
        className="my-4 border border-independence/10 shadow-lg rounded-lg w-fit p-5"
      >
        <Link href={`/letters/${article.slug}`} className="cursor-pointer">
          <Image
            src={article.featureImage}
            height={150}
            width={150}
            alt={`Feature image for article ${article.slug}`}
            className="mx-auto"
          />

          <div className="flex space-x-2 text-gray-600">
            <span>{article.date}</span>
            <span>• {article.readTime}</span>
          </div>
          <h2 className="font-black text-xl ">{article.title}</h2>
          <p>{article.summary}</p>
        </Link>
      </div>
    );
  });

  return <div>{articlePreview}</div>;
};

export default function Blog() {
  const articleMetaData = getArticleMetaData();

  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto">
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <h1 className="section-h1">Lev's Letters</h1>
          <div className="">
            <ArticlePreview />
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
