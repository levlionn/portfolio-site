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
        <section className="">
          <HeroSection />
        </section>

        {/* About Section */}
        <section>
          <MeMeSection />
        </section>

        <section className="mt-12">
          <ExplainTheWebsite />
        </section>

        {/* Expertise Section */}
        <section className="my-16">
          <ExpertiseSection />
        </section>

        {/* Resources Section */}
        <section className="my-28">
          <ResourceSection />
        </section>
      </div>
    </main>
  );
}
