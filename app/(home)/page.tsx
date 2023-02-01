import Image from "next/image";
import heroPic from "../public/me-nobg.png";
import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
