"use client";
import React, { useContext } from "react";
import SkillCard from "@/components/SkillCard";
import ResourceCard from "@/components/ResourceCard";
import firstPic from "/public/images/005.jpg";

import { ModeContext } from "@/ModeContext";

import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";
import Image from "next/image";
import PortfolioCard from "@/components/PortfolioCard";
import { SectionWrapper } from "../SectionWrapper";

//images
// import heroImage from "public/images/heroImage-compressed.jpg";
// import { RESOURCE_DATA } from "../../ALL_DATA";

// const PORTFOLIO_PROJECTS = [
//   {
//     source: firstPic,
//     client: "Call Center Guys",
//     altText: "Call Center Guys portfolio image",
//     cardHeader: "Complete Website Makover",
//     cardBody:
//       "Designed, developed and deployed a custom-built wesbite – including copy, and marketing.",
//     tags: ["#uxui", "#webcopy"],
//     colour: "cinnabar",
//     href: "/portfolio/copywriter/call-center-guys",
//   },
//   {
//     source: firstPic,
//     client: "BTH645",
//     altText: "Seneca Assignments for BTH645",
//     cardHeader: "Academic Projects",
//     cardBody: "A list of school projects for BTH645.",
//     tags: ["#uxui", "#hci"],
//     colour: "cinnabar",
//     href: "/portfolio/copywriter/call-center-guys",
//   },
// ];

const copywriterExpertise = [
  {
    icon: pencilsvg.src,
    tag: "copywriting",
    expertiseHeader: "I write clean, concise & converting copy.",
    expertiseBody:
      "Craft engaging & persuasive stories that drive results. Specialized in web, email, ad copy, video scripts & more.",
    href: "/portfolio/copywriter",
    colour: "cinnabar",
  },
];

const developerExpertise = [
  {
    icon: computersvg.src,
    tag: "front end",
    expertiseHeader: "I develop & deploy gorgeous websites.",
    expertiseBody:
      "Responsive, secure & reliable websites that showcase your brand, and capture the hearts of users.",
    href: "/portfolio/developer",
    colour: "etonBlue",
  },
];

export default function Portfolio() {
  const { mode } = useContext(ModeContext);

  const shownCardData =
    mode === "copywriter" ? copywriterExpertise : developerExpertise;
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <h1 className="section-h1">Portfolio</h1>
          <p className="text-gray-800 my-4">
            From copywriting projects, to developer applications, AI generated
            artwork, screenplays and more – here is a showcase of my work.
          </p>
        </section>
        {/* 2 part section -- skill & projects */}
        <div className="laptop:flex laptop:gap-4">
          <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
            <h2 className="section-h2">What I Do</h2>
            {shownCardData.map((item, index) => {
              return (
                <SkillCard
                  icon={item.icon}
                  tag={item.tag}
                  expertiseHeader={item.expertiseHeader}
                  expertiseBody={item.expertiseBody}
                  href={item.href}
                  colour={item.colour}
                  key={index}
                />
              );
            })}
          </section>
          {/* <section className="section-y-spacing section-x-outer-margin-width">
          <h2 className="section-h2">Copywriting Projects</h2>

          <div className=" laptop:basis-1/3">
            {PORTFOLIO_PROJECTS.map((item, index) => {
              return (
                <PortfolioCard
                  source={item.source.src}
                  altText={item.altText}
                  client={item.client}
                  cardHeader={item.cardHeader}
                  cardBody={item.cardBody}
                  tags={item.tags}
                  colour={item.colour}
                  href={item.href}
                  key={index}
                />
              );
            })}
          </div>
        </section> */}
        </div>
      </main>
    </SectionWrapper>
  );
}
