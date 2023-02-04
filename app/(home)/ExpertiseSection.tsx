"use client";
import React, { useContext } from "react";
import CoolButton from "@/components/CoolButton";
import ExpertiseCard from "@/components/ExpertiseCard";
import { ModeContext } from "@/ModeContext";

const copywriterExpertise = [
  {
    expertiseHeader: "Copywriter | Ghostwriter",
    expertiseBody:
      "Craft engaging & persuasive words to drive results. Specializing in web, email, ad copy, video scripts & more.",
  },
  {
    expertiseHeader: "SEO optimization",
    expertiseBody:
      "Get your brand noticed. High ranking articles, website audits, sitemaps, metadescriptions & more.",
  },
  {
    expertiseHeader: "Social Media | Paid Ads",
    expertiseBody:
      "Create engaging content that makes people stop & click. Add a budget to boost performance and reach a larger audience.",
  },
];

const developerExpertise = [
  {
    expertiseHeader: "Front-end Developer",
    expertiseBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, saepe architecto perferendis.",
  },
  {
    expertiseHeader: "System Building",
    expertiseBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, saepe architecto perferendis.",
  },
  {
    expertiseHeader: "Backend",
    expertiseBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, saepe architecto perferendis.",
  },
];

const ExpertiseSection = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="mb-32">
      <h2 className="text-4xl font-extrabold my-4">My expertise</h2>

      <p className="mb-4 py-2 text-gray-500">
        I'm constantly improving my game, so this list is nonexhaustive.
      </p>

      <CoolButton btnLabel="Let's Chat" href="#" btnwidth="s" textSize="sm" />

      {mode === "copywriter"
        ? copywriterExpertise.map((item) => {
            return (
              <ExpertiseCard
                expertiseHeader={item.expertiseHeader}
                expertiseBody={item.expertiseBody}
              />
            );
          })
        : developerExpertise.map((item) => {
            return (
              <ExpertiseCard
                expertiseHeader={item.expertiseHeader}
                expertiseBody={item.expertiseBody}
              />
            );
          })}
    </div>
  );
};

export default ExpertiseSection;
