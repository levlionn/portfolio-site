import ContactMeButton from "@/components/ContactMeButton";
import PortfolioCard from "@/components/PortfolioCard";
import firstPic from "/public/images/005.jpg";
import PrincipleItem from "../PrincipleItem";

const DEVELOPER_PROJECTS = [
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

const developerPrinciples = [
  {
    principleHeader: "User-centric design",
    principleBody:
      "I prioritize the needs and goals of the user to create an intuivie and enjoyable user experience.",
  },
  {
    principleHeader: "Mobile-first development",
    principleBody:
      "Responsive design and accessibility create better quality of life for the end-user – the way it should be; seamless.",
  },
  {
    principleHeader: "Build for performance",
    principleBody:
      "I focus on optimizing load times and overall performance because no one likes to wait.",
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

          <h2 className="text-2xl font-black">Principles I live by</h2>

          {developerPrinciples.map((p, index) => {
            return (
              <PrincipleItem
                principleHeader={p.principleHeader}
                principleBody={p.principleBody}
                key={index}
              />
            );
          })}
        </section>

        <hr />
        <section className="mb-10 tablet:mx-10 laptop:mx-24">
          <h2 className="text-3xl font-semibold my-4">Developer Projects</h2>

          <div className="laptop:grid laptop:grid-cols-2 laptop:gap-4">
            {DEVELOPER_PROJECTS.map((item, index) => {
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

        <ContactMeButton colour="etonBlue" />

        {/* end of file */}
      </div>
    </main>
  );
}
