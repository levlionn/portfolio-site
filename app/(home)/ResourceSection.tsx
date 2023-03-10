import ResourceCard from "@/components/ResourceCard";
import React from "react";

import { RESOURCE_DATA } from "../../ALL_DATA";

const ResourceSection = () => {
  return (
    <>
      <h2 className="section-h2">Resources</h2>
      <p className="py-3 text-independence">
        Templates, tools & guides – something for everyone.
      </p>

      <div className="flex flex-col">
        {RESOURCE_DATA.map((resource, index) => {
          return (
            <ResourceCard
              resourceImage={resource.resourceImage}
              badgeLbl={resource.badgeLbl}
              header={resource.header}
              linkLbl={resource.linkLbl}
              body={resource.body}
              href={resource.href}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default ResourceSection;
