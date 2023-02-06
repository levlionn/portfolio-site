import HeroSection from "./heroSection";
import MeMeSection from "./MeMeSection";
import ExplainTheWebsite from "./ExplainTheWebsite";
import ResourceSection from "./ResourceSection";
import ExpertiseSection from "./ExpertiseSection";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="mx-4">
        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>

        {/* About Section */}
        <section>
          <MeMeSection />
        </section>

        <section className="my-28">
          <ExplainTheWebsite />
        </section>

        {/* Resources Section */}
        <section className="my-28">
          <ResourceSection />
        </section>

        {/* Expertise Section */}
        <section className="my-28">
          <ExpertiseSection />
        </section>
      </div>
    </main>
  );
}
