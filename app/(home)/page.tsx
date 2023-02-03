import ExpertiseSection from "./ExpertiseSection";
import HeroSection from "./heroSection";
import MeMeSection from "./MeMeSection";
import ProjectSection from "./projectSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroSection />
      <ProjectSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <MeMeSection />
    </main>
  );
}
