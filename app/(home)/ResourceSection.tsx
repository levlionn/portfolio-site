import ResourceCard from "@/components/ResourceCard";
import React from "react";

//images
import resourcePlaceholder from "@/public/images/resource-placeholder.png";

const resourceData = [
  {
    resourceImage: resourcePlaceholder,
    badgeLbl: "Free Lifetime Updates",
    header: "ADHD Notion Planner",
    linkLbl: "Check it out",
    href: "#",
  },
  {
    resourceImage: resourcePlaceholder,
    badgeLbl: "Lifetime Updates",
    header: "ADHD Notion Planner",
    linkLbl: "Check it out",
    href: "#",
  },
];

const ResourceSection = () => {
  return (
    <div className="">
      <div className="space-y-3 desktop:pl-11">
        <h2 className="text-4xl font-extrabold tablet:text-xl laptop:text-2xl text-gray-800">
          Resources
        </h2>
        <p className="text-gray-500 tablet:text-sm laptop:text-base">
          Templates, tools & guides – something for everyone.
        </p>
      </div>
      <div className="flex flex-col items-center">
        {resourceData.map((resource, index) => {
          return (
            <ResourceCard
              resourceImage={resource.resourceImage}
              badgeLbl={resource.badgeLbl}
              header={resource.header}
              linkLbl={resource.linkLbl}
              href={resource.href}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResourceSection;
