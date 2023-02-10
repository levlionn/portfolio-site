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
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/call-center-guys",
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
    colour: "cinnabar",
    href: "/portfolio/copywriter/call-center-guys",
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
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
    <main className="container mx-auto">
      <div className="flex flex-col m-4">
        <section className="tablet:mx-10 laptop:mx-24">
          <h1 className="text-5xl font-black text-center my-10 tablet:my-20 text-cinnabar">
            Great copywriting tells a story.
          </h1>
          <h2 className="text-2xl font-black">Principles I live by</h2>

          {copywriterPrinciples.map((p, index) => (
            <PrincipleItem
              principleHeader={p.principleHeader}
              principleBody={p.principleBody}
              key={index}
            />
          ))}
          <hr />
        </section>

        <section className="mb-10 tablet:mx-10 laptop:mx-24">
          <h2 className="text-3xl font-semibold my-4">Copywriting Projects</h2>

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

        <ContactMeButton colour="cinnabar" />

        {/* end of file */}
      </div>
    </main>
  );
}
