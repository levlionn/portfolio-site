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
        section-x-outer-margin-width
        tablet:flex tablet:space-x-12 desktop:max-w-6xl
"
        >
          <div className="basis-2/3">
            <SkillsSection />
          </div>

          <div className="basis-1/3">
            <ResourceSection />
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
