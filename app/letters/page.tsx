import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import getArticleMetaData from "@/components/GetArticleMetaData";
import Image from "next/image";

import Link from "next/link";

const ArticlePreview = () => {
  const articleMetaData = getArticleMetaData();
  const articlePreview = articleMetaData.map((article) => {
    return (
      <div key={article.slug} className="my-8 w-fit">
        <Link href={`/letters/${article.slug}`} className="cursor-pointer">
          <div className="flex space-x-2 text-xs text-gray-600">
            <span>{article.date}</span>
            <span>• {article.readTime}</span>
          </div>
          <h2 className="font-black text-xl my-1.5 capitalize">
            {article.title}
          </h2>
          <p className="text-gray-600">{article.summary}</p>
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
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl flex flex-col laptop:flex-row">
          <div className="basis-1/2">
            <h1 className="section-h1">The Lev Letter</h1>
            <p className="text-gray-600">
              A collection of my newsletter articles where I write about
              exploring meaning, productivity, ADHD, little pleasures and just
              navigating life. And some of my favourite things that week.
            </p>
            <p className="text-gray-600 my-2">Grab a ☕️ and enjoy!</p>

            <ArticlePreview />
          </div>

          <div className="flex flex-col justify-center items-center relative mx-auto basis-1/2">
            <Image
              src="/images/Notion_Avatar_Smiling.png"
              height={100}
              width={100}
              alt={`Notion Style Illustration of Lev Markelov | Blog Page`}
              className="mx-auto absolute top-0 left-0 laptop:left-10 desktop:left-20 p-3"
            />
            <iframe
              src="https://thelevletter.substack.com/embed"
              width="300"
              height="320"
              style={{ margin: 0, padding: 10 }}
            ></iframe>
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
