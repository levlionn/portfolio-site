import ContactMeButton from "@/components/ContactMeButton";
import AboutHeroSection from "./aboutHeroSection";
import WhatImDoingNowSection from "./nowSection";
import TimelineSection from "./timelineSection";

export default function About() {
  return (
    <main className="container mx-auto">
      <div className="mx-4">
        <section>
          <AboutHeroSection />
        </section>
        <section>
          <WhatImDoingNowSection />
        </section>
        <section>
          <TimelineSection />
        </section>
        <section>
          <ContactMeButton colour={"cinnabar"} />
        </section>
      </div>
    </main>
  );
}
