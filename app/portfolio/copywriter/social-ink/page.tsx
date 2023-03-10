"use client";
import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/app/SectionWrapper";

//components
import CaseStudyQuickPeek from "@/components/CaseStudyQuickPeek";
import ArticleComponent from "@/components/CaseStudyArticleMenu";

//images
import resourcePlaceholder from "@/public/images/resource-placeholder.png";
import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";

//article images
import pressReleaseImage from "/public/images/Target.png";
import pressReleaseImage2 from "/public/images/Announcement.png";
import articleImage from "/public/images/Nodes_.png";
import articleImage2 from "/public/images/Chart_.png";
import socialImage from "/public/images/Modern-Socialization.png";
import socialImage2 from "/public/images/Notion_Planet.png";
import pitchDeckImage from "/public/images/Gestures.png";

const ARTICLE_DATA = [
  {
    href: "https://medium.com/@dataunionapp/dataunion-foundation-successfully-closes-its-seed-round-c74e7e3f4b4a",
    src: pressReleaseImage,
    title: "Press Release",
    body: "DataUnion successfully closed a $1.5million seed round; this article let the other investors know the direction the company was heading in.",
    client: "Data Union Foundation",
    badgeLbl: "Press Release",
  },
  {
    href: "https://blog.dataunion.app/dataunion-foundation-to-further-on-chain-adoption-and-build-reputation-oracle-with-human-protocol-dfeb04a1e24a",
    src: pressReleaseImage2,
    title: "Partnership with Human Protocol",
    body: "A press release written to investors (and the public) announcing the expansion of DataUnion Foundation – this time with HUMAN protocol; a decentralized job marketplace.  ",
    client: "Data Union Foundation",
    badgeLbl: "Press Release",
  },
  {
    href: "https://medium.com/@dataunionapp/dataunion-foundation-successfully-closes-its-seed-round-c74e7e3f4b4a",
    src: articleImage,
    title: "The Future of Web3",
    body: "To help drive traffic to Social Ink's website, I routinely wrote SEO-optimized articles on popular trends within the Web3 space.",
    client: "Social Ink",
    badgeLbl: "Article",
  },
  {
    href: "https://blog.dataunion.app/what-is-a-dataunion-6b43a618af1b",
    src: articleImage2,
    title: "What is a DataUnion?",
    body: " A blog written to explore the revolutionary potential of Data Unions, their impact on society and how we, collectively, can bring about positive change to all areas of life – through democratized data.",
    client: "Data Union Foundation",
    badgeLbl: "Article",
  },
  {
    href: "https://twitter.com/DataunionA",
    src: socialImage,
    title: "Twitter Account Management",
    body: "Ran the official Twitter acccount for DUF. Used best social media practices to engage viewers (stop them from scrolling), provide value and inspire action (follow/like/share)",
    client: "Data Union Foundation",
    badgeLbl: "Social",
  },
  {
    href: "https://blog.dataunion.app/dataunion-foundation-builds-proof-of-concept-dataunion-to-capture-a-time-capsule-of-the-fdb5ecce249a",
    src: socialImage2,
    title: "Twitter Thread (#BigData)",
    body: "An example of an educational Twitter thread discussing the problems of #BigData, and the benefits of DataUnions for the collective good of the world. ",
    client: "Data Union Foundation",
    badgeLbl: "Social",
  },
  {
    href: "https://blog.dataunion.app/dataunion-foundation-builds-proof-of-concept-dataunion-to-capture-a-time-capsule-of-the-fdb5ecce249a",
    src: pitchDeckImage,
    title: "Timecapsule Pitch Deck",
    body: "Co-Founders of DataUnion Foundation, Mark & Robin, spoke at the world’s first Experimental Zone Event (“EZ1”).",
    client: "Data Union Foundation",
    badgeLbl: "Pitch Deck",
  },
];

export default function SocialInkCaseStudy() {
  // State Management
  const [filter, setFilter] = useState(ARTICLE_DATA[0].badgeLbl);

  const badgeLabels = ARTICLE_DATA.map((article) => article.badgeLbl);
  const uniqueBadgeLabelsSet = new Set(badgeLabels);
  const uniqueBadgeLabelsArr = Array.from(uniqueBadgeLabelsSet);

  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        {/* Header Image */}
        <div className=" relative max-w-6xl mx-auto">
          <Image
            src={ccgThumbnail}
            alt="Social Section Image"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <CaseStudyQuickPeek
          title="Helped a fractional CMO run marketing operations for multiple blockchain startups."
          href="https://www.socialink.co/"
          timeline="May 2021 - July 2022"
          platform="Many"
          role="Content Manager"
          services="Copywriting, Digital Marketing, Research Community, Building, Content Marketing, Communications, & Social Media Management."
        />

        {/* Project Summary */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Project Summary</h2>
          <p className="text-gray-800 my-4">
            I worked alongside fractional CMO Chris Bruno at Social Ink,
            providing a range of digital marketing services to clients. My role
            was to create a comprehensive content marketing strategy for each
            client, from identifying their target audience to designing and
            publishing content across the web.
          </p>
        </section>

        {/* My Role*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">My Role</h2>
            <p className="text-gray-800 my-4">
              Beyond content marketing, I had the privilage of being in charge
              of many moving parts – a challenge I never shy away from.
            </p>
            <ul className="text-gray-800 my-4">
              <span className="font-bold">My Key Responsibilities </span>
              <li className="my-3">
                1️⃣ Conducting in-depth research to identify each client's target
                audience and develop a content strategy that resonated with
                them.
              </li>
              <li className="my-3">
                2️⃣ Analyzing competitors to identify gaps in the market and
                opportunities for differentiation.
              </li>
              <li className="my-3">
                3️⃣ Creating a content calendar that aligned with each client's
                goals and objectives.
              </li>
              <li className="my-3">
                4️⃣ Writing and designing high-quality content that engaged the
                target audience and drove traffic to the client's website.
              </li>
              <li className="my-3">
                5️⃣ Implementing a streamlined content creation process using
                Notion, which allowed the team to quickly get up-to-date on
                priority tasks, view project briefs, and meet deadlines.
              </li>
            </ul>
          </div>
        </section>

        {/* Process & Timeline*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">Process & Timeline</h2>
            <p className="text-gray-800 my-4">
              To create an effective content marketing strategy for each client,
              we followed a detailed process that included:
            </p>
            <ul className="text-gray-800 my-4">
              <li className="my-3">
                <span className="font-bold">Research: </span>
                We conducted thorough research on each client's industry, target
                audience, and competitors to identify key trends and
                opportunities.
              </li>
              <li className="my-3">
                <span className="font-bold">Strategy: </span>
                Based on our research, we developed a content marketing strategy
                that aligned with each client's goals and objectives.
              </li>
              <li className="my-3">
                <span className="font-bold">Content Creation: </span>
                We created a variety of content types, including blog posts,
                social media content, email campaigns, and more, designed to
                engage the target audience and drive traffic to the client's
                website.
              </li>
              <li className="my-3">
                <span className="font-bold">Implementation: </span>
                We used a variety of tools and platforms to distribute the
                content across the web and ensure maximum exposure.
              </li>
            </ul>
            <p className="text-gray-800 my-4">
              The project timeline varied depending on the scope of each
              client's project, but we worked closely with clients throughout
              the process to ensure that their goals and objectives were met.{" "}
            </p>
          </div>
        </section>

        {/* Articles & Socials */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Articles & Socials</h2>
          <p className="text-gray-800 my-2">
            Below is published content promoting the brand(s) in order to
            further increasing their reach across the web and build authority.
          </p>
          {/* Filter Menu --*/}
          <div className="flex justify-between items-center max-w-6xl cursor-pointer">
            <div className="text-xs tracking-tighter font-bold text-independence/80">
              Viewing 👀
            </div>

            <div className="flex items-center space-x-4 my-2">
              {uniqueBadgeLabelsArr.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`text-xs ${
                      filter === item
                        ? "font-bold text-goldCrayola"
                        : "text-independence/80"
                    }`}
                    onClick={() => {
                      setFilter(item);
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          {/* End Filter Menu -- */}
          <hr />
          <div className="grid grid-cols-2 laptop:grid-cols-4 gap-5 py-2">
            {ARTICLE_DATA.filter((a) => a.badgeLbl === filter).map(
              (article, index) => (
                <ArticleComponent
                  href={article.href}
                  src={article.src}
                  title={article.title}
                  body={article.body}
                  client={article.client}
                  badgeLbl={article.badgeLbl}
                  key={index}
                />
              )
            )}
          </div>
        </section>

        {/* Next Steps & Outcomes + 3 Images*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl desktop:grid desktop:grid-rows-1 desktop:grid-cols-2 desktop:gap-4">
          <div className="desktop:order-last">
            <h2 className="section-h2">Next Steps and Outcomes</h2>
            <p className="text-gray-800 my-4">
              As a result of our work, clients experienced significant
              improvements in website traffic, engagement, and overall brand
              awareness. Our content marketing strategies helped clients stand
              out in their industries and establish themselves as thought
              leaders, resulting in increased leads and sales.
            </p>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-2 my-2">
            <div className="row-start-1 row-end-1 relative">
              <Image
                src={resourcePlaceholder}
                alt="Call Center Guys Section Image"
                className="rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-2 relative">
              <Image
                src={resourcePlaceholder}
                alt="Call Center Guys Section Image"
                className="rounded-md"
              />
            </div>
            <div className="col-span-2 row-span-3 relative">
              <Image
                src={resourcePlaceholder}
                alt="Call Center Guys Section Image"
                className="rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Final Thoughts*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl desktop:grid desktop:grid-rows-1 desktop:grid-cols-2 desktop:gap-4">
          <div className="desktop:order-last">
            <h2 className="section-h2">Final Thoughts</h2>
            <p className="text-gray-800 my-4">
              Overall, my role at Social Ink allowed me to develop my skills as
              a content marketer and contribute to the growth and success of
              numerous clients. I'm proud to have been part of such a talented
              team and to have made a positive impact on the digital marketing
              efforts of our clients.
            </p>
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
