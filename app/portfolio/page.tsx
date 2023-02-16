"use client";
import React, { useContext } from "react";
import ExpertiseCard from "@/components/ExpertiseCard";

import { ModeContext } from "@/ModeContext";
import ToggleActiveMode from "@/components/ToggleActiveMode";

import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";

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
    <main className="container px-4 tablet:px-12 laptop:px-32">
      <h1 className="text-5xl font-black my-6">Portfolio </h1>
      <p className="text-gray-500 font-sm mb-4">
        I'm a student of life. I LOVE to learn, expand my skillset and explore
        new creative & challenging avenues.
      </p>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          HINT: Toggle to see my other half.{" "}
        </p>
        <ToggleActiveMode />
      </div>
      {shownCardData.map((item, index) => {
        return (
          <ExpertiseCard
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
    </main>
  );
}
