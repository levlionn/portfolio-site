import ContactMeButton from "@/components/ContactMeButton";
import PortfolioCard from "@/components/PortfolioCard";
import firstPic from "/public/images/005.jpg";
import PrinciplesILiveBySection from "../PrinciplesILiveBySection";

const developerData = [
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
    colour: "etonBlue",
    href: "/portfolio/developer/call-center-guys",
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
    colour: "etonBlue",
    href: "/portfolio/developer/call-center-guys",
  },
  {
    source: firstPic,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Website Makover",
    cardBody:
      "Designed, developed and deployed a full-scale wesbite. Ran marketing operations afterwards.",
    tags: ["#uxui", "#webcopy"],
    colour: "etonBlue",
    href: "/portfolio/developer/call-center-guys",
  },
];

export default function Developerfolio() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col m-4">
        <section className="tablet:mx-10 laptop:mx-24">
          <h1 className="text-5xl font-black text-center my-10 tablet:my-20 text-etonBlue">
            Designing digital experiences, one pixel at a time.
          </h1>

          <PrinciplesILiveBySection principle="developerPrinciples" />
        </section>

        <hr />
        <section className="mb-10 tablet:mx-10 laptop:mx-24">
          <h2 className="text-3xl font-semibold my-4">Developer Projects</h2>

          <div className="laptop:grid laptop:grid-cols-2 laptop:gap-4">
            {developerData.map((item) => {
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

        <ContactMeButton colour="etonBlue" />

        {/* end of file */}
      </div>
    </main>
  );
}
