"use client";
import React, { useContext } from "react";
import SkillCard from "@/components/SkillCard";
import ResourceCard from "@/components/ResourceCard";

import { ModeContext } from "@/ModeContext";

import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";
import Image from "next/image";

//images
import heroImage from "public/images/heroImage-compressed.jpg";
import { RESOURCE_DATA } from "../../ALL_DATA";

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
    <main className="flex flex-col tablet:flex-row justify-center mx-auto min-h-screen desktop:max-w-6xl tablet:space-x-12 section-x-outer-margin-width">
      <section className="section-y-spacing tablet:basis-2/3">
        <h1 className="section-h1">Skills</h1>

        {/*<p className="text-gray-500 font-sm mb-4">
          <span className="text-gray-700 font-sm uppercase">summary: </span>
          Since I can remember, I've always had a love for writing & building. I
          thrive when I put ink to paper, or digital pixels to screen, and I
          constantly seek novel creative challenges to push myself to improve my
          game.
        </p>

        <p className="text-gray-500 font-sm mb-4">
          <span className="text-gray-700 font-sm uppercase">key skills: </span>
          Writing, editing, research, marketing, time management, communication.
        </p>
        <p className="text-gray-500 font-sm mb-4">
          <span className="text-gray-700 font-sm uppercase">Tech: </span>
          Google Suite, Microsoft Suite, Adobe Suite, Canva
        </p> */}

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
      <section className="tablet:basis-1/3 section-y-spacing">
        <h2 className="section-h1">Art</h2>
        <p className="text-gray-500 mb-6">AI technology is fascinating.</p>
        {RESOURCE_DATA.map((resource, index) => {
          return (
            <ResourceCard
              resourceImage={resource.resourceImage}
              badgeLbl={resource.badgeLbl}
              header={resource.header}
              linkLbl={resource.linkLbl}
              href={resource.href}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
}
