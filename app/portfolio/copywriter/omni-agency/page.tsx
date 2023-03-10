"use client";
import { useState } from "react";
import { SectionWrapper } from "@/app/SectionWrapper";
import Image from "next/image";

//components
import CaseStudyQuickPeek from "@/components/CaseStudyQuickPeek";
import ArticleComponent from "@/components/CaseStudyArticleMenu";

//images
import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import resourcePlaceholder from "@/public/images/resource-placeholder.png";

//article images
import socialImage from "/public/images/Modern-Socialization.png";
import socialImage2 from "/public/images/Notion_Planet.png";

const ARTICLE_DATA = [
  {
    href: "https://twitter.com/Raiinmakerapp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    src: socialImage,
    title: "Web3-Based Content",
    body: "Ideated and crafted content to help grow Raiinmaker's–a decentralized social media platform–Twitter account by 28K new users in 3 months.",
    client: "Raiinmaker",
    badgeLbl: "Social",
  },
  {
    href: "https://twitter.com/DepressCitizens",
    src: socialImage2,
    title: "NFT-Based Content",
    body: "Depressed Citizens is an NFT collection about the people, for the people. Through creative, engaging content, I helped drive 1,150% organic growth on Twitter.",
    client: "Depressed Citizens",
    badgeLbl: "Social",
  },
];

export default function OmniAgencyCaseStudy() {
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
          title="Worked as contract copywriter & a guerrilla marketing mastermind
        for a digital marketing agency."
          href="https://www.omniagency.ca"
          timeline="September 2022 - January 2023"
          platform="Many"
          role="Lead Copywriter"
          services="Copywriting, Digital Marketing, Guerrilla Marketing, Community
          Building, Content Marketing, Communications, & Social Media Management."
        />
        {/* Project Summary */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Project Summary</h2>
          <p className="text-gray-800 my-4">
            As a freelance copywriter and guerrilla marketing expert for a
            digital marketing agency, I worked with multiple Web3/NFT brands to
            develop content marketing and social media strategies that drove
            growth and engagement.
          </p>
        </section>

        {/* My Role*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">My Role</h2>
            <p className="text-gray-800 my-4">
              As a copywriter, my primary objective was to create engaging and
              educational content that attracted and retained audiences for the
              Web3/NFT brands I worked with. However, a major challenge was
              educating audiences on this relatively new field, which required a
              three-pronged approach: converting uninitiated users into brand
              advocates, retaining their engagement across social channels, and
              driving user acquisition for the accounts I managed.
            </p>
            <ul className="text-gray-800 my-4">
              <span className="font-bold">My Key Responsibilities </span>
              <li className="my-3">
                1️⃣ Building a community of engaged followers across various
                social channels, such as Twitter, Discord, and Telegram.
              </li>
              <li className="my-3">
                2️⃣ Generating user acquisition for the Web3/NFT brands by
                creating compelling content that resonated with the target
                audience.
              </li>
              <li className="my-3">
                3️⃣ Writing educational and engaging content that helped to
                educate audiences on the Web3/NFT space and establish the brands
                I worked with as thought leaders.
              </li>
              <li className="my-3">
                4️⃣ Increasing engagement rates by creating content that was
                entertaining and valuable to the target audience.
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
              Through my work as a copywriter and guerrilla marketing expert, I
              was able to help the Web3/NFT brands I worked with achieve
              significant growth and engagement. By creating valuable and
              engaging content, we were able to attract and retain audiences,
              educate them on this new field, and establish the brands as
              thought leaders. This resulted in increased user acquisition,
              engagement rates, and overall brand awareness.
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
              Overall, I'm proud to have contributed to the growth and success
              of these brands and to have established myself as a valuable asset
              to Omni.
            </p>
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
