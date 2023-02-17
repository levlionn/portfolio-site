import HeroSection from "./heroSection";
import MeMeSection from "./MeMeSection";
import GuideSection from "./GuideSection";
import ResourceSection from "./ResourceSection";
import SkillsSection from "./SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      {/* Hero Section */}
      <section className="section-y-spacing section-x-outer-margin-width">
        <HeroSection />
      </section>

      {/* About Me Section */}
      <section className="section-y-spacing section-x-outer-margin-width">
        <MeMeSection />
      </section>

      <section className="section-y-spacing">
        <GuideSection />
      </section>

      {/* Skills & Resources Section */}
      <section
        className="section-y-spacing 
        section-x-outer-margin-width
        tablet:flex tablet:space-x-12
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
  );
}
