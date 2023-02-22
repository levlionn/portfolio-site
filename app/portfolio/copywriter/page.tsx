import ContactMeButton from "@/components/ContactMeButton";
import CoolButton from "@/components/CoolButton";
import PortfolioCard from "@/components/PortfolioCard";
import PrincipleItem from "../PrincipleItem";

import firstPic from "/public/images/005.jpg";

const COPYWRITER_PROJECTS = [
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Complete Website Makover",
    cardBody:
      "Designed, developed and deployed a custom-built wesbite – including copy, and marketing.",
    tags: ["#uxui", "#webcopy"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/call-center-guys",
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Complete Website Makover",
    cardBody:
      "Designed, developed and deployed a custom-built wesbite – including copy, and marketing.",
    tags: ["#uxui", "#webcopy"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/call-center-guys",
  },
];

const copywriterPrinciples = [
  {
    principleHeader: "Have empathy towards the reader",
    principleBody:
      "I place myself in the shoes of the audience member; to understand their needs, wants and motivations to create copy that resonates and inspires action.",
  },
  {
    principleHeader: "Write clear, clean & concise copy",
    principleBody:
      "My copy is easy to understand, illustrates a well-defined message and guides readers to where they need to go.",
  },
  {
    principleHeader: "Always provide value",
    principleBody:
      "Whether educational, entertainment or persuasive, the end result must always be the same – communivate the benefits, and incentivize actions.",
  },
];

export default function CopywriterPortfolio() {
  return (
    <main className="min-h-screen mx-auto">
      <h1 className="section-h1 text-center text-cinnabar section-y-spacing section-x-outer-margin-width">
        Great copywriting tells a story.
      </h1>
      <div className="laptop:flex laptop:section-x-outer-margin-width max-w-6xl laptop:gap-6">
        <section className="section-y-spacing section-x-outer-margin-width">
          <h2 className="section-h2">Principles I live by</h2>

          {copywriterPrinciples.map((p, index) => (
            <PrincipleItem
              principleHeader={p.principleHeader}
              principleBody={p.principleBody}
              key={index}
            />
          ))}
          <hr />
        </section>

        <section className="section-y-spacing section-x-outer-margin-width">
          <h2 className="section-h2">Expertise</h2>

          <p className="text-gray-500 font-sm my-4">
            Since I can remember, I've always had a love for writing & building.
            I thrive when I put ink to paper, or digital pixels to screen, and I
            constantly seek novel creative challenges to push myself to improve
            my game.
          </p>

          <p className="text-gray-500 font-sm mb-4">
            <span className="text-gray-700 font-sm uppercase">
              key skills:{" "}
            </span>
            Writing, editing, research, marketing, time management,
            communication.
          </p>
          <p className="text-gray-500 font-sm mb-4">
            <span className="text-gray-700 font-sm uppercase">Tech: </span>
            Google Suite, Microsoft Suite, Adobe Suite, Canva
          </p>
          <hr />
        </section>
      </div>
      {/* COPYWRITING PROJECTS */}
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
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
        <ContactMeButton colour="cinnabar" />
      </section>

      {/* end of file */}
    </main>
  );
}
