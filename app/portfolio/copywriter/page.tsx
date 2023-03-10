import { SectionWrapper } from "@/app/SectionWrapper";
import PortfolioCard from "@/components/PortfolioCard";
import PrincipleItem from "../PrincipleItem";

//images
import CCGProjectImage from "/public/images/Puzzle.png";

import SocialInkProjectImage from "/public/images/Modern-Socialization.png";
import OmniProjectImage from "/public/images/Marketing-Plan.png";

const COPYWRITER_PROJECTS = [
  {
    source: CCGProjectImage,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Call Center Guys Brand Overhaul",
    cardBody:
      "Revamped Call Center Guys' brand, crafted compelling copy, and achieved success with improved engagement and website traffic.",
    tags: ["#uxui", "#contentmarketing"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/call-center-guys",
  },
  {
    source: SocialInkProjectImage,
    client: "Social Ink",
    altText: "Social Ink portfolio image",
    cardHeader: "Content Manager",
    cardBody:
      "Ran the complete content pipeline from ideation, design, copywriting and publishing.",
    tags: ["#contentmarketing", "#smm"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/social-ink",
  },
  {
    source: OmniProjectImage,
    client: "Omni Agency",
    altText: "Social Ink portfolio image",
    cardHeader: "Lead Copywriter",
    cardBody:
      "Ideated & wrote social media content, website blogs, and guerrilla marketing ideas for multiple Web3-based startups.",
    tags: ["#smm", "#seo"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/omni-agency",
  },
];

const copywriterPrinciples = [
  {
    principleHeader: "Have empathy towards the reader",
    principleBody:
      "I place myself in the shoes of the audience member; to understand their needs, wants and motivations to create copy that resonates and inspires action.",
  },
  {
    principleHeader: "Write clean, clear & concise copy",
    principleBody:
      "My copy is easy to understand, illustrates a well-defined message and guides readers to where they need to go.",
  },
  {
    principleHeader: "Always provide value",
    principleBody:
      "Whether educational, entertainment or persuasive, the end result must always be the same – add value to the readers life, and incentivize action.",
  },
];

export default function CopywriterPortfolio() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto">
        <section className="flex flex-col section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <h1 className="section-h1 text-cinnabar">
            Great copywriting tells a story.
          </h1>

          {/* PRINCIPLES SECTION */}

          <div>
            <h2 className="section-h2">Principles I live by</h2>

            {copywriterPrinciples.map((p, index) => (
              <PrincipleItem
                principleHeader={p.principleHeader}
                principleBody={p.principleBody}
                key={index}
              />
            ))}
          </div>
          {/* EXPERTISE SECTION */}
          <div>
            <h2 className="section-h2">Expertise</h2>

            <p className="text-gray-500 font-sm my-4">
              Since I can remember, I've always had a love for writing &
              building. I thrive when I put ink to paper, or digital pixels to
              screen, and I constantly seek novel creative challenges to push
              myself to improve my game.
            </p>

            <p className="text-gray-500 font-sm">
              <span className="text-gray-700 font-sm uppercase">
                key skills:{" "}
              </span>
              Writing, editing, research, marketing, time management,
              communication.
            </p>
            <p className="text-gray-500 font-sm">
              <span className="text-gray-700 font-sm uppercase">Tech: </span>
              Google Suite, Microsoft Suite, Adobe Suite, Canva
            </p>
          </div>
        </section>

        {/* COPYWRITING PROJECTS */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <h2 className="section-h2">Copywriting Projects</h2>

          <div className="laptop:grid laptop:grid-cols-2 laptop:gap-4">
            {COPYWRITER_PROJECTS.map((item, index) => {
              return (
                <PortfolioCard
                  source={item.source.src}
                  altText={item.altText}
                  client={item.client}
                  cardHeader={item.cardHeader}
                  cardBody={item.cardBody}
                  tags={item.tags}
                  colour={item.colour}
                  href={item.href}
                  key={index}
                />
              );
            })}
          </div>
        </section>

        {/* end of file */}
      </main>
    </SectionWrapper>
  );
}
