import ContactMeButton from "@/components/ContactMeButton";
import CoolButton from "@/components/CoolButton";
import PortfolioCard from "@/components/PortfolioCard";

import firstPic from "@/public/005.jpg";

const copywriterData = [
  {
    source: firstPic,
    client: "Food Coma",
    altText: "Food Coma portfolio image",
    cardHeader: "Social Media Campaign Strategy",
    cardBody: "Drove 202 email signups in 6 days.",
    tags: ["#socialmedia", "#advertising"],
    colour: "cinnabar",
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
  },
  {
    source: firstPic,
    client: "Data Union",
    altText: "DataUnion portfolio image",
    cardHeader: "Community Management",
    cardBody: "Ran creative operations for a blockchain startup.",
    tags: ["#blogs", "#socialmedia"],
    colour: "cinnabar",
  },
];

export default function CopywriterPortfolio() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col m-4">
        <h1 className="text-4xl font-black text-center mt-10 text-cinnabar">
          Great copywriting tells a story.
        </h1>

        <div className="my-32">
          <h2 className="text-3xl font-semibold text-center justify-center align-center mb-4">
            Principles I live by.
          </h2>
          <p className="text-center text-md px-4 text-gray-500">
            Empathy to be in the shoes of the reader, clarity to write a
            well-defined message, and a unique value proposition to persuade the
            reader to take action.
          </p>
        </div>
        <h2 className="text-3xl font-semibold mb-4">Copywriting Projects</h2>

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
            />
          );
        })}

        <ContactMeButton colour="cinnabar" />

        {/* end of file */}
      </div>
    </main>
  );
}
