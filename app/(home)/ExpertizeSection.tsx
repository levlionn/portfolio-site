import React from "react";
import CoolButton from "@/components/CoolButton";
import ExpertiseCard from "@/components/ExpertiseCard";

const ExpertizeSection = () => {
  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold my-4">My expertise</h2>
          <p className="mb-4 text-gray-500">
            I'm constantly improving my game, so this list is nonexhaustive.
          </p>
          <CoolButton btnLabel="CONNECT WITH ME" href="#" />
        </div>

        <ExpertiseCard
          expertiseHeader="Copywriter | Ghostwriter"
          expertiseBody=" Craft engaging & persuasive words to drive results. Specializing in
          web, email, ad copy, video scripts & more."
        />

        <ExpertiseCard
          expertiseHeader="SEO optimization"
          expertiseBody="Get your brand noticed. High ranking articles, website audits, sitemaps, metadescriptions & more."
        />

        <ExpertiseCard
          expertiseHeader="Social Media | Paid Ads"
          expertiseBody="Create engaging content that makes people stop & click. Add a budget to boost performance and reach a larger audience."
        />
      </div>
    </div>
  );
};

export default ExpertizeSection;
