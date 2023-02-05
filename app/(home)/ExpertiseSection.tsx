"use client";
import React, { useContext } from "react";
import CoolButton from "@/components/CoolButton";
import ExpertiseCard from "@/components/ExpertiseCard";
import { ModeContext } from "@/ModeContext";

// Images
import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";
import ToggleActiveMode from "@/components/ToggleActiveMode";

const copywriterExpertise = [
  {
    icon: pencilsvg.src,
    tag: "copywriting",
    expertiseHeader: "I write clean, concise, converting copy.",
    expertiseBody:
      "Craft engaging & persuasive stories that drive results. Specialized in web, email, ad copy, video scripts & more.",
  },
];

const developerExpertise = [
  {
    icon: computersvg.src,
    tag: "front end",
    expertiseHeader: "I develop & deploy gorgeous websites",
    expertiseBody:
      "Responsive, secure & reliable websites that showcase your brand, and capture the hearts of users.",
  },
];

const ExpertiseSection = () => {
  const { mode } = useContext(ModeContext);

  const shownCardData =
    mode === "copywriter" ? copywriterExpertise : developerExpertise;

  return (
    <div className="">
      <h2 className="text-4xl font-extrabold">What I do</h2>

      <p className="py-4 text-independence">
        50% developer, 50% copywriter. 100% fun.
      </p>

      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          HINT: Toggle to see my two sides.{" "}
        </p>
        <ToggleActiveMode />
      </div>

      {shownCardData.map((item) => {
        return (
          <ExpertiseCard
            icon={item.icon}
            tag={item.tag}
            expertiseHeader={item.expertiseHeader}
            expertiseBody={item.expertiseBody}
          />
        );
      })}
    </div>
  );
};

export default ExpertiseSection;
