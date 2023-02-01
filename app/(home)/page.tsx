import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";
import PortfolioCard from "@/components/PortfolioCard";

// Images
import firstPic from "../../public/005.jpg";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroSection />
      <ProjectSection />
      <PortfolioCard
        source={firstPic}
        altText="Food Coma portfolio image"
        client="Food Coma"
        cardHeader="Social Media Campaign Strategy"
        cardBody="Drove 202 email signups in 6 days."
        tags={["#socialmedia", "#advertising"]}
      />

      <PortfolioCard
        source={firstPic}
        altText="Call Center Guys portfolio image"
        client="Call Center Guys"
        cardHeader="Website Revamp"
        cardBody="Designed, developed, deployed a brand new website. Followed by running marketing operations and creative for a call center company based in Canada."
        tags={["#uxui", "#websitecopy"]}
      />
    </main>
  );
}
