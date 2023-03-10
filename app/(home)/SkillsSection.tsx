"use client";
import React, { useContext } from "react";

import SkillCard from "@/components/SkillCard";
import { ModeContext } from "@/ModeContext";

const copywriterExpertise = [
  {
    tag: "copywriting",
    expertiseHeader: "I write clean, concise & converting copy.",
    expertiseBody:
      "Craft engaging & persuasive stories that drive results. Specialized in web, email, ad copy, & video scripts.",
    href: "/portfolio/copywriter",
    colour: "cinnabar",
  },
];

const developerExpertise = [
  {
    tag: "front end",
    expertiseHeader: "I develop & deploy gorgeous websites.",
    expertiseBody:
      "Responsive, secure & reliable websites that showcase your brand, and capture the hearts of users.",
    href: "/portfolio/developer",
    colour: "etonBlue",
  },
];

const SkillsSection = () => {
  const { mode } = useContext(ModeContext);

  const shownCardData =
    mode === "copywriter" ? copywriterExpertise : developerExpertise;

  return (
    <main className="">
      <h2 className="section-h2">What I do</h2>
      <p className="py-3 text-independence">
        50% copywriter, 50% developer. 100% fun.
      </p>

      {shownCardData.map((item, index) => {
        return (
          <SkillCard
            tag={item.tag}
            expertiseHeader={item.expertiseHeader}
            expertiseBody={item.expertiseBody}
            href={item.href}
            colour={item.colour}
            key={index}
          />
        );
      })}
    </main>
  );
};

export default SkillsSection;
