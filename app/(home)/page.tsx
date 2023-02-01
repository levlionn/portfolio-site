import ExpertizeSection from "./ExpertizeSection";
import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroSection />
      <ProjectSection />
      <ExpertizeSection />
    </main>
  );
}
