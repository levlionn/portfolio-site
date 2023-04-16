"use client";

import React, { useContext } from "react";
import { ModeContext } from "@/ModeContext";
import SkillCard from "@/components/SkillCard";
import { SectionWrapper } from "../SectionWrapper";
import Link from "next/link";

const copywriterExpertise = [
  {
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
          <Link href="/portfolio/prompt-journal">Prompt Journal</Link>
        </section>
        {/* 2 part section -- skill & projects */}
        <div className="laptop:flex laptop:gap-4">
          <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
            <h2 className="section-h2">What I Do</h2>
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
          </section>
        </div>
      </main>
    </SectionWrapper>
  );
}
