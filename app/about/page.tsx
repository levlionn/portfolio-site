import ContactMeButton from "@/components/ContactMeButton";
import ResourceCard from "@/components/ResourceCard";
import Link from "next/link";
import ResourceSection from "../(home)/ResourceSection";
import AboutHeroSection from "./aboutHeroSection";
import WhatImDoingNowSection from "./nowSection";
import TimelineSection from "./timelineSection";

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

export default function About() {
  return (
    <main className="container mx-auto">
      <div className="m-4 tablet:mx-16 laptop:flex laptop:flex-row">
        <div className="laptop:basis-2/3">
          <section>
            <AboutHeroSection />
          </section>
          <section>
            <WhatImDoingNowSection />
          </section>
          <section>
            <TimelineSection />
          </section>
          <ContactMeButton colour={"cinnabar"} />
        </div>

        <div className="invisible laptop:visible laptop:basis-1/3">
          <div className="flex flex-col fixed desktop:top-52 ">
            <div className="space-y-3 mb-4 ">
              <h2 className="text-4xl laptop:text-3xl font-extrabold text-gray-800">
                Resources
              </h2>
              <p className="text-gray-500 laptop:text-base w-80">
                Over the years, I've developed templates & tools to help me stay
                productive and ontop of my ADHD. You can check them out for
                yourself below!
              </p>
            </div>
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
      </div>
    </main>
  );
}
