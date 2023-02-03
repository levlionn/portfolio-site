import React from "react";
import PortfolioCard from "@/components/PortfolioCard";
// Images
import firstPic from "../../public/005.jpg";

const ProjectSection = () => {
  return (
    <div className="mb-32">
      <h2 className="text-4xl font-bold my-4">Some fun projects I worked on</h2>
      <p>Hint – Toggle between modes to see work related to each field.</p>
      <div className="flex flex-row items-center my-4">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        <span className="text-xs">Active Mode: Copywriter</span>
      </div>

      <PortfolioCard
        source={firstPic}
        altText="Food Coma portfolio image"
        client="Food Coma"
        cardHeader="Social Media Campaign Strategy"
        cardBody="Drove 202 email signups in 6 days."
        tags={["#socialmedia", "#advertising"]}
      />

      <PortfolioCard
        source={firstPic}
        altText="Call Center Guys portfolio image"
        client="Call Center Guys"
        cardHeader="Website Revamp"
        cardBody="Designed, developed, deployed a brand new website. Followed by running marketing operations and creative for a call center company based in Canada."
        tags={["#uxui", "#websitecopy"]}
      />
    </div>
  );
};

export default ProjectSection;
