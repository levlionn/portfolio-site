import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getArticleMetaData from "@/components/GetArticleMetaData";
import Image from "next/image";

const getArticleContent = (slug: string) => {
  const folder = "articles/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const articles = getArticleMetaData();
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

const ArticlePage = (props: any) => {
  const slug = props.params.slug;
  const articleContent = getArticleContent(slug);
  return (
    <article className="prose lg:prose-xl section-x-outer-margin-width max-w-6xl ">
      <div className="flex flex-col items-center justify-center text-center my-6">
        <h1 className="text-5xl font-black mt-5 capitalize">
          {articleContent.data.title}
        </h1>
        <p className="text-base font-regular text-gray-600 -mt-5">
          {articleContent.data.subtitle}
        </p>
        <p className="text-gray-400 text-xs -mt-1">
          Posted on{" "}
          <span className="text-gray-500 font-medium">
            {articleContent.data.date}
          </span>
          {" in "}
          <span className="text-gray-500 font-medium">
            {articleContent.data.tags}
          </span>
        </p>
        <Image
          src={articleContent.data.featureImage}
          height={300}
          width={300}
          alt={`Feature image for article ${articleContent.data.slug}`}
          className="mx-auto rounded-md"
        />
      </div>

      <Markdown>{articleContent.content}</Markdown>

      <hr className="" />
      <div className="flex flex-col justify-center items-center mx-auto my-4">
        <h3 className="text-medium font-medium text-gray-400 -my-4">
          IF YOU READ THIS, YOU MIGHT CONSIDER JOINING THE NEWSLETTER
        </h3>
        <iframe
          src="https://thelevletter.substack.com/embed"
          width="350"
          height="320"
          style={{ margin: 0, padding: 10 }}
        ></iframe>
      </div>
    </article>
  );
};

export default ArticlePage;
