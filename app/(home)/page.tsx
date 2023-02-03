import BlogSection from "./blogSection";
import ExpertiseSection from "./ExpertiseSection";
import HeroSection from "./heroSection";
import MeMeSection from "./MeMeSection";
import ProjectSection from "./projectSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="mx-4">
        <HeroSection />
        <ProjectSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <MeMeSection />
        <BlogSection />
      </main>
    </div>
  );
}
