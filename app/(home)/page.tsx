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

        {/* Expertise & Resources Section */}
        <section className="my-16 tablet:flex tablet:flex-row tablet:content-center mx-4">
          <div className="tablet:basis-2/3 tablet:pr-6 mb-10">
            <ExpertiseSection />
          </div>
          <div className="tablet:basis-1/3 ">
            <ResourceSection />
          </div>
        </section>
      </div>
    </main>
  );
}
