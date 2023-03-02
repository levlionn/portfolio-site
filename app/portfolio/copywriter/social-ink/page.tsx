"use client";
import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";

import Image, { StaticImageData } from "next/image";
import resourcePlaceholder from "@/public/images/resource-placeholder.png";

import rightArrow from "/public/svg/right-top-arrow.svg";
import { SectionWrapper } from "@/app/SectionWrapper";

import { useState } from "react";

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
    href: "https://medium.com/@dataunionapp/dataunion-foundation-successfully-closes-its-seed-round-c74e7e3f4b4a",
    src: resourcePlaceholder,
    title: "Press Release",
    body: "DataUnion successfully closed a $1.5million seed round. Considering the buzz, and the impact of the company, I wrote out a Press Release to let other investors know the direction we were heading in.",
    client: "Data Union Foundation",
    badgeLbl: "press release",
  },
  {
    href: "https://medium.com/@dataunionapp/dataunion-foundation-successfully-closes-its-seed-round-c74e7e3f4b4a",
    src: resourcePlaceholder,
    title: "Web3 Article",
    body: "To help drive traffic to Social Ink's website, I routinely wrote SEO-optimized articles on popular trends within the Web3 space.",
    client: "Social Ink",
    badgeLbl: "article",
  },
  {
    href: "https://twitter.com/DataunionA",
    src: resourcePlaceholder,
    title: "Twitter Management",
    body: "Ran the official Twitter acccount for DUF. Used best social media practices to engage viewers (stop them from scrolling), provide value and inspire action (follow/like/share)",
    client: "Data Union Foundation",
    badgeLbl: "smm",
  },
  {
    href: "https://blog.dataunion.app/dataunion-foundation-builds-proof-of-concept-dataunion-to-capture-a-time-capsule-of-the-fdb5ecce249a",
    src: resourcePlaceholder,
    title: "Created Pitch Deck",
    body: "Co-Founders of DataUnion Foundation, Mark & Robin, spoke at the world’s first Experimental Zone Event (“EZ1”).",
    client: "Data Union Foundation",
    badgeLbl: "pitch deck",
  },
  {
    href: "https://blog.dataunion.app/dataunion-foundation-builds-proof-of-concept-dataunion-to-capture-a-time-capsule-of-the-fdb5ecce249a",
    src: resourcePlaceholder,
    title: "Twitter Tweet Storm",
    body: "An example of an educational Twitter thread discussing the problems of #BigData, and the benefits of DataUnions for the collective good of the world. ",
    client: "Data Union Foundation",
    badgeLbl: "smm",
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
        <a href={href} target="_blank">
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

export default function SocialInkCaseStudy() {
  // State Management
  const [filter, setFilter] = useState("article");

  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        {/* Header Image */}
        <div className=" relative h-52 max-w-6xl mx-auto">
          <Image
            src={ccgThumbnail}
            alt="Social Section Image"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>

        {/* H1 & CTA & Stats */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          {/* Quote Box */}
          <div className="border-l-2 border-gray-600 pl-4">
            <h1 className="caseStudy-h1 ">
              Helped a fractional CMO run marketing operations for multiple
              blockchain startups.
            </h1>
            <button
              type="button"
              className="border border-black rounded-md p-2 uppercase"
            >
              <a href="https://www.socialink.co/" target="_blank">
                Visit Website
              </a>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-rows-2 grid-cols-3 gap-x-2 pt-8 pb-4">
            <div className="uppercase text-gray-600">Timeline</div>
            <div className="uppercase text-gray-600">Platform</div>
            <div className="uppercase text-gray-600">Role</div>
            <div className="text-gray-400">May 2021 - July 2022</div>
            <div className="text-gray-400">Many</div>
            <div className="text-gray-400">Content Manager</div>
          </div>
          <hr />
        </section>

        {/* Laptop Up, Convert to Grid view */}
        {/* Summary & Services */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Summary</h2>
          <p className="text-gray-800 my-4">
            I paired together with an incredible fractional CMO, Chris Bruno, to
            be his right-hand man. From writing content for his marketing
            agency, to interviewing founders of cutting-edge blockchain startups
            and developing their content strategy – I was a one man army for all
            things digital marketing.
          </p>
          <h3 className="text-gray-700 uppercase text-xs tablet:text-sm my-2">
            <span className="text-gray-900 font-bold">Services: </span>
            Copywriting, Digital Marketing, Brand Identity, Content Markeeting,
            Communications, & Social Media Marketing.
          </h3>
        </section>

        {/* Copywriting*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">My Role</h2>
            <p className="text-gray-800 my-4">
              Content marketing requires a systematic approach. You need to be
              organized, detailed, know your analytics and understand where the
              trends are going. For every client we worked on, my job was to
              figure out their target audience, analyze competitors, create a
              content calendar, write the content, design it and publish it
              across the web.
            </p>
            <p className="text-gray-800 my-4">
              Additionally, I acted as a business optimizer. My love for
              system-building, and productivity, allowed me to create a more
              stream-lined approach to creating content by using Notion. I built
              out an entire system that allowed everyone on the team to quickly
              get uptodate on priority tasks, view project briefs, and deliver
              on deadlines.
            </p>
          </div>
        </section>

        {/* eBooks & PDFs */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Articles & Socials</h2>
          <p className="text-gray-800 my-2">
            Below are examples of articles and social media posts/tweets that I
            created for the various Blockchain clients we had.
          </p>
          {/* Filter Menu --*/}
          <div className="flex justify-between items-center max-w-6xl cursor-pointer">
            <div className="text-xs font-bold text-independence/80">
              filter:
            </div>
            <div className="flex items-center space-x-4 my-2">
              <span
                className="text-xs text-independence/80"
                onClick={() => {
                  setFilter("article");
                }}
              >
                article
              </span>
              <span
                className="text-xs text-independence/80"
                onClick={() => {
                  setFilter("press release");
                }}
              >
                press release
              </span>
              <span
                className="text-xs text-independence/80"
                onClick={() => {
                  setFilter("smm");
                }}
              >
                smm
              </span>
              <span
                className="text-xs text-independence/80"
                onClick={() => {
                  setFilter("pitch deck");
                }}
              >
                pitch deck
              </span>
            </div>
          </div>
          {/* End Filter Menu -- */}
          <hr />
          <div className="grid grid-cols-2 laptop:grid-cols-4 gap-5 py-2">
            {ARTICLE_DATA.filter((a) => a.badgeLbl === filter).map(
              (article, key) => (
                <ArticleComponent
                  href="https://blog.dataunion.app/dataunion-foundation-builds-proof-of-concept-dataunion-to-capture-a-time-capsule-of-the-fdb5ecce249a"
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