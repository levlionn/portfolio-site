import ContactMeButton from "@/components/ContactMeButton";
import CoolButton from "@/components/CoolButton";
import PortfolioCard from "@/components/PortfolioCard";

import firstPic from "/public/images/005.jpg";

const copywriterData = [
  // {
  //   source: firstPic,
  //   client: "Food Coma",
  //   altText: "Food Coma portfolio image",
  //   cardHeader: "Social Media Campaign Strategy",
  //   cardBody: "Drove 202 email signups in 6 days.",
  //   tags: ["#socialmedia", "#advertising"],
  //   colour: "cinnabar",
  //   href: "#",
  // },
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
  // {
  //   source: firstPic,
  //   client: "Data Union",
  //   altText: "DataUnion portfolio image",
  //   cardHeader: "Community Management",
  //   cardBody: "Ran creative operations for a blockchain startup.",
  //   tags: ["#blogs", "#socialmedia"],
  //   colour: "cinnabar",
  //   href: "#",
  // },
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
        <h1 className="text-4xl font-black text-center my-9 text-cinnabar">
          Great copywriting tells a story.
        </h1>
        <h2 className="text-2xl font-black">Principles I live by</h2>

        <div className="mt-4">
          {copywriterPrinciples.map((principle, index) => {
            return (
              <div key={index} className="mb-4">
                <h3 className="text-xl text-semibold mb-4">
                  {principle.principleHeader}
                </h3>
                <p className="text-gray-500 text-medium">
                  {principle.principleBody}
                </p>
              </div>
            );
          })}
        </div>
        <hr />
        <h2 className="text-3xl font-semibold my-4">Copywriting Projects</h2>

        {copywriterData.map((item) => {
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
            />
          );
        })}

        <ContactMeButton colour="cinnabar" />

        {/* end of file */}
      </div>
    </main>
  );
}
