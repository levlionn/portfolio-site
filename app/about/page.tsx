import { SectionWrapper } from "../SectionWrapper";
import AboutHeroSection from "./aboutHeroSection";
import TimelineSection from "./timelineSection";
import WhatImDoingNowSection from "./nowSection";
import ResourceSection from "../(home)/ResourceSection";

export default function About() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto desktop:w-9/12">
        <section className="section-y-spacing section-x-outer-margin-width">
          <AboutHeroSection />
        </section>

        <section className="section-y-spacing section-x-outer-margin-width tablet:grid tablet:grid-cols-2 tablet:gap-10">
          <div>
            <TimelineSection />
          </div>

          <div>
            <WhatImDoingNowSection />
          </div>
        </section>

        <section className="section-y-spacing section-x-outer-margin-width">
          <ResourceSection />
        </section>
      </main>
    </SectionWrapper>
  );
}
