import HeroSection from "./heroSection";
import MeMeSection from "./MeMeSection";
import GuideSection from "./GuideSection";
import ResourceSection from "./ResourceSection";
import SkillsSection from "./SkillsSection";
import { SectionWrapper } from "../SectionWrapper";

export default function Home() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto">
        {/* Hero Section */}

        <section className="section-y-spacing section-x-outer-margin-width">
          <HeroSection />
        </section>

        {/* About Me Section */}
        <section className="section-y-spacing section-x-outer-margin-width desktop:max-w-6xl">
          <MeMeSection />
        </section>

        <section className="section-y-spacing">
          <GuideSection />
        </section>

        {/* Skills & Resources Section */}
        <section
          className="section-y-spacing 
        section-x-outer-margin-width flex flex-col laptop:flex-row gap-10 justify-start desktop:max-w-6xl"
        >
          <div className="basis-1/2">
            <SkillsSection />
          </div>

          <div className="basis-1/2">
            <ResourceSection />
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
