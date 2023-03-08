import React from "react";

interface Props {
  title: string;
  href: string;
  timeline: string;
  platform: string;
  role: string;
  services: string;
}

const CaseStudyQuickPeek = ({
  title,
  href,
  timeline,
  platform,
  role,
  services,
}: Props) => {
  return (
    <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
      {/* Quote Box */}
      <div className="border-l-2 border-gray-600 pl-4">
        <h1 className="caseStudy-h1 ">{title}</h1>
        <button
          type="button"
          className="border border-black rounded-md p-2 uppercase"
        >
          <a href={href} target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </button>
      </div>
      {/* Stats Row */}
      <div className="grid grid-rows-2 grid-cols-3 gap-x-2 pt-8 pb-4 text-xs">
        <div className="uppercase text-gray-600">Timeline</div>
        <div className="uppercase text-gray-600">Platform</div>
        <div className="uppercase text-gray-600">Role</div>
        <div className="text-gray-400">{timeline}</div>
        <div className="text-gray-400">{platform}</div>
        <div className="text-gray-400">{role}</div>
      </div>
      <hr />
      <p className="text-gray-400 my-4 text-xs">Services: {services}</p>
    </section>
  );
};

export default CaseStudyQuickPeek;
