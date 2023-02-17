import ResourceCard from "@/components/ResourceCard";
import React from "react";

import { RESOURCE_DATA } from "../../ALL_DATA";

const ResourceSection = () => {
  return (
    <div className="">
      <div className="max-w-sm laptop:max-w-xs mx-auto">
        <h2 className="section-h2">Resources</h2>
        <p className="py-3 text-independence">
          Templates, tools & guides – something for everyone.
        </p>
      </div>
      <div className="flex flex-col items-center">
        {RESOURCE_DATA.map((resource, index) => {
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
