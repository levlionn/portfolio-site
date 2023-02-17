import ContactMeButton from "@/components/ContactMeButton";
import ResourceCard from "@/components/ResourceCard";
import AboutHeroSection from "./aboutHeroSection";
import WhatImDoingNowSection from "./nowSection";
import TimelineSection from "./timelineSection";

import { RESOURCE_DATA } from "../../ALL_DATA";

export default function About() {
  return (
    <main className="min-h-screen mx-auto desktop:w-9/12">
      <section className="section-y-spacing section-x-outer-margin-width">
        <AboutHeroSection />
      </section>

      <section className="section-y-spacing section-x-outer-margin-width tablet:grid tablet:grid-cols-2 tablet:gap-x-11">
        <div className="">
          <TimelineSection />
        </div>

        <div className="">
          <WhatImDoingNowSection />
          {/* Resource Section */}
          <div className="mt-8">
            <h2 className="text-3xl font-black">Resources</h2>
            <p className="text-gray-500 mb-6">I come baring gifts.</p>
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
      </section>
      <div className="section-x-outer-margin-width">
        <ContactMeButton colour={"cinnabar"} />
      </div>
    </main>
  );
}
