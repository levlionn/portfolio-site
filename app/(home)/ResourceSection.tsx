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
    badgeLbl: "Free Lifetime Updates",
    header: "ADHD Notion Planner",
    linkLbl: "Check it out",
    href: "#",
  },
];

const ResourceSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-2">Resources</h2>
      <p className="text-gray-500">
        Templates, tools & guides – something for everyone.
      </p>
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
  );
};

export default ResourceSection;
