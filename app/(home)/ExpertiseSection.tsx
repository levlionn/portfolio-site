import React from "react";
import CoolButton from "@/components/CoolButton";
import ExpertiseCard from "@/components/ExpertiseCard";

const ExpertiseSection = () => {
  return (
    <div className="mb-32">
      <h2 className="text-4xl font-extrabold my-4">My expertise</h2>
      <p className="mb-4 py-2 text-gray-500">
        I'm constantly improving my game, so this list is nonexhaustive.
      </p>
      <CoolButton btnLabel="Let's Chat" href="#" btnwidth="s" textSize="sm" />

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
  );
};

export default ExpertiseSection;
