"use client";
import React, { useContext } from "react";
import SkillCard from "@/components/SkillCard";
import ResourceCard from "@/components/ResourceCard";

import { ModeContext } from "@/ModeContext";

import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";

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
    <main className="mx-auto min-h-screen desktop:w-9/12 tablet:flex tablet:space-x-12 section-x-outer-margin-width">
      <section className="section-y-spacing basis-2/3">
        <h1 className="section-h1">Skills</h1>
        <p className="text-gray-500 font-sm mb-4">
          I'm a student of life. I LOVE to learn, expand my skillset and explore
          new creative & challenging avenues.
        </p>

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
      <section className="basis-1/3 section-y-spacing">
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
