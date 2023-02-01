import ExpertizeSection from "./ExpertizeSection";
import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroSection />
      <ProjectSection />
      <ExpertizeSection />
      <TestimonialsSection />
    </main>
  );
}
