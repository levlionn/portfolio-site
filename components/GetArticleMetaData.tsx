import fs, { readdirSync } from "fs";
import matter from "gray-matter";

interface ArticleMetaData {
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  readTime: string;
  slug: string;
  featureImage: string;
  tags: string;
}

const getArticleMetaData = (): ArticleMetaData[] => {
  // Read the folder "articles" and retrieve each file from it.
  const folder = "articles/";
  const files = readdirSync(folder);

  // Filter to only return MarkDown file types and convert each FileName into a slug for dynamic rendering.
  const markDownArticles = files.filter((file) => file.endsWith(".md"));

  //Get gray-matter data from each file.
  const articles = markDownArticles.map((fileName) => {
    const fileContent = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      summary: matterResult.data.summary,
      date: matterResult.data.date,
      readTime: matterResult.data.readTime,
      featureImage: matterResult.data.featureImage,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });
  return articles;
};

export default getArticleMetaData;
