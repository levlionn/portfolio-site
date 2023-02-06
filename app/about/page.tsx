import AboutHeroSection from "./aboutHeroSection";
import WhatImDoingNow from "./nowSection";

export default function About() {
  return (
    <main className="container mx-auto">
      <div className="mx-4">
        <section>
          <AboutHeroSection />
        </section>
        <section>
          <WhatImDoingNow />
        </section>
      </div>
    </main>
  );
}
