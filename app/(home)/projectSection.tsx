"use client";
import React, { useContext } from "react";
import PortfolioCard from "@/components/PortfolioCard";
// Images
import firstPic from "../../public/005.jpg";
import { ModeContext } from "@/ModeContext";

const copywriterData = [
  {
    source: firstPic,
    client: "Food Coma",
    altText: "Food Coma portfolio image",
    cardHeader: "Social Media Campaign Strategy",
    cardBody: "Drove 202 email signups in 6 days.",
    tags: ["#socialmedia", "#advertising"],
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
  },
  {
    source: firstPic,
    client: "Data Union",
    altText: "DataUnion portfolio image",
    cardHeader: "Community Management",
    cardBody: "Ran creative operations for a blockchain startup.",
    tags: ["#blogs", "#socialmedia"],
  },
];

const developerData = [
  {
    source: firstPic,
    client: "Personal Project",
    altText: "Motivate Me portfolio card image",
    cardHeader: "MotivateMe.ai",
    cardBody: "Get daily motivational texts from your favourite characters.",
    tags: ["#nextjs", "#api"],
  },
  {
    source: firstPic,
    client: "Personal Project",
    altText: "Quiz game portfolio image",
    cardHeader: "Discord Quiz Game",
    cardBody: "Challenge your friends to a daily triva challenge.",
    tags: ["#api", "#discord"],
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
  },
];

const ProjectSection = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div className="mb-32">
      <h2 className="text-4xl font-bold my-4">Some fun projects I worked on</h2>
      <p>Hint – Toggle between modes to see work related to each field.</p>
      <div className="flex flex-row items-center my-4">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        <span className="text-xs">Active Mode: {mode}</span>
      </div>

      {mode === "copywriter"
        ? copywriterData.map((item) => {
            return (
              <PortfolioCard
                source={item.source.src}
                altText={item.altText}
                client={item.client}
                cardHeader={item.cardHeader}
                cardBody={item.cardBody}
                tags={item.tags}
              />
            );
          })
        : developerData.map((item) => {
            return (
              <PortfolioCard
                source={item.source.src}
                altText={item.altText}
                client={item.client}
                cardHeader={item.cardHeader}
                cardBody={item.cardBody}
                tags={item.tags}
              />
            );
          })}
    </div>
  );
};

export default ProjectSection;
