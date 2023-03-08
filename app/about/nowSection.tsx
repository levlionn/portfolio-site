import React from "react";
import rightArrow from "/public/svg/right-arrow-long.svg";
import Image from "next/image";

// Data that is pulled when rendering new component
const DATA = [
  {
    header: "Finishing B.T Software Dev",
    subtitle: "Seneca College",
    href: "https://www.senecacollege.ca/programs/fulltime/BSD.html",
  },
  {
    header: "Writing my newsletter",
    subtitle: "ADHD & life-optimization tips.",
    href: "https://thelevletter.substack.com/",
  },
  {
    header: "Building my YouTube",
    subtitle: "ADHD-related support videos.",
    href: "https://thelevletter.substack.com/",
  },
];

interface NowItem {
  header: string;
  subtitle: string;
  href: string;
}
// Components on this page
const CurrentlyDoingNowHeaderLink = ({ header, subtitle, href }: NowItem) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <a href={href} target="_blank" rel="noreferrer">
          <h3 className="text-md font-normal text-gray-900 mr-2">{header}</h3>
        </a>

        <Image src={rightArrow} alt="icon" width={15} height={15} />
      </div>

      <span className="block mb-4 text-sm font-normal leading-none text-gray-400">
        {subtitle}
      </span>
    </div>
  );
};

// Page Section
const WhatImDoingNowSection = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="section-h2">Now</h2>
        <p className="text-gray-500 mb-4">What I'm currently up to</p>
      </div>
      {DATA.map((item, index) => {
        return (
          <CurrentlyDoingNowHeaderLink
            header={item.header}
            subtitle={item.subtitle}
            href={item.href}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default WhatImDoingNowSection;
