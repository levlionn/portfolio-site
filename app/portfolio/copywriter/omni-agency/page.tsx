"use client";
import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";

import Image, { StaticImageData } from "next/image";
import resourcePlaceholder from "@/public/images/resource-placeholder.png";

import rightArrow from "/public/svg/right-top-arrow.svg";
import { SectionWrapper } from "@/app/SectionWrapper";

import { useState } from "react";
import CaseStudyQuickPeek from "@/components/CaseStudyQuickPeek";

interface PDFItem {
  href: string;
  src: StaticImageData;
  title: string;
  body: string;
  client: string;
  badgeLbl: string;
}

const ARTICLE_DATA = [
  {
    href: "https://twitter.com/Raiinmakerapp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    src: resourcePlaceholder,
    title: "Twitter Management",
    body: "Ideated and crafted content to help grow Raiinmaker's–a decentralized social media platform–Twitter account by 28K new users in 3 months.",
    client: "Raiinmaker",
    badgeLbl: "Social",
  },
  {
    href: "https://twitter.com/DepressCitizens",
    src: resourcePlaceholder,
    title: "Twitter Management",
    body: "Depressed Citizens is an NFT collection about the people, for the people. Through creative, engaging content, I helped drive 1,150% organic growth on Twitter.",
    client: "Depressed Citizens",
    badgeLbl: "Social",
  },
];

const ArticleComponent = ({
  href,
  src,
  title,
  body,
  client,
  badgeLbl,
}: PDFItem) => {
  return (
    <div className="relative max-w-xs flex flex-col">
      <div className="relative w-full h-32 rounded-lg bg-white shadow-xl cursor-pointer">
        <Image src={src} alt="CCG Brochure" className="rounded-lg" fill />
        {/* Badge */}
        <div className="absolute top-0 left-0 m-2 p-0.5 w-fit text-center text-white text-xs  font-medium px-2 bg-etonBlue rounded-lg">
          {badgeLbl}
        </div>
      </div>
      <div className="py-2">
        <span className="text-xs text-gray-500">{client}</span>

        <h5 className="text-lg font-bold leading-tight">{title}</h5>

        <p className="text-xs desktop:text-base text-gray-600 my-3 ">{body}</p>
        <a href={href} target="_blank" rel="noreferrer">
          <div className="flex py-1 text-sm font-semibold">
            Read Now
            <Image
              src={rightArrow}
              alt="arrow pointing north east"
              height={10}
              width={10}
              className="ml-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

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

        {/* Laptop Up, Convert to Grid view */}
        {/* Summary*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Summary</h2>
          <p className="text-gray-800 my-4">
            I worked as a freelance copywriter juggling responsibilities of
            content marketing, social media management, and community building
            strategies across multiple Web3/NFT brands.
          </p>
        </section>

        {/* Copywriting*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">My Role</h2>
            <p className="text-gray-800 my-4">
              As a copywriter, your main objective is centered around driving
              growth through value-packed, engaging content. The formula is
              simple; create great content, and you'll inevitably attract an
              audience.
            </p>
            <p className="text-gray-800 my-4">
              Considering I was working in a new field–Web3 wasn't a common term
              yet–a major obstacle that needed to be overcome is audience
              education; few people really understood what the space was
              about/had to offer.
            </p>
            <p className="text-gray-800 my-4">
              My strategy was three-prong: find ways to convert uninitiated
              users into loyal brand advocates, retain their engagement across
              social channels, and drive user-acquisition for the accounts I was
              managing.
            </p>
            <ul className="text-gray-800 my-4">
              <span className="font-bold">My Key Responsibilities </span>
              <li>1️⃣ Build a Community</li>
              <li>2️⃣ Generate User Acquisition</li>
              <li>3️⃣ Write Educational/Engaging Content</li>
              <li>4️⃣ Increase Engagement Rate</li>
            </ul>
          </div>
        </section>

        {/* eBooks & PDFs */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Articles & Socials</h2>
          <p className="text-gray-800 my-2">
            Below are examples of articles and social media content that I
            created for the various Web3 clients we had.
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
              (article, key) => (
                <ArticleComponent
                  href={article.href}
                  src={article.src}
                  title={article.title}
                  body={article.body}
                  client={article.client}
                  badgeLbl={article.badgeLbl}
                />
              )
            )}
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
