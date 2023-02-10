import ContactMeButton from "@/components/ContactMeButton";
import CoolButton from "@/components/CoolButton";
import PortfolioCard from "@/components/PortfolioCard";
import PrinciplesILiveBySection from "../PrinciplesILiveBySection";

import firstPic from "/public/images/005.jpg";

const copywriterData = [
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

export default function CopywriterPortfolio() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col m-4">
        <h1 className="text-5xl font-black text-center my-10 tablet:my-20 text-cinnabar">
          Great copywriting tells a story.
        </h1>
        <section className="tablet:mx-10 laptop:mx-24">
          <PrinciplesILiveBySection />
          <hr />
        </section>

        <section className="mb-10 tablet:mx-10 laptop:mx-24">
          <h2 className="text-3xl font-semibold my-4">Copywriting Projects</h2>

          <div className="laptop:grid laptop:grid-cols-2 laptop:gap-4">
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
          </div>
        </section>

        <ContactMeButton colour="cinnabar" />

        {/* end of file */}
      </div>
    </main>
  );
}
