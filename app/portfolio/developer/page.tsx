import ContactMeButton from "@/components/ContactMeButton";
import CoolButton from "@/components/CoolButton";
import PortfolioCard from "@/components/PortfolioCard";

import firstPic from "@/public/005.jpg";

const developerData = [
  // {
  //   source: firstPic,
  //   client: "Personal Project",
  //   altText: "Motivate Me portfolio card image",
  //   cardHeader: "MotivateMe.ai",
  //   cardBody: "Get daily motivational texts from your favourite characters.",
  //   tags: ["#nextjs", "#api"],
  //   colour: "etonBlue",
  //   href: "#",
  // },
  // {
  //   source: firstPic,
  //   client: "Personal Project",
  //   altText: "Quiz game portfolio image",
  //   cardHeader: "Discord Quiz Game",
  //   cardBody: "Challenge your friends to a daily triva challenge.",
  //   tags: ["#api", "#discord"],
  //   colour: "etonBlue",
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
    colour: "etonBlue",
    href: "/portfolio/developer/call-center-guys",
  },
];

export default function Developerfolio() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col m-4">
        <h1 className="text-4xl font-black text-center mt-10 text-etonBlue">
          Designing digital experiences, one pixel at a time.
        </h1>

        <div className="my-32">
          <h2 className="text-3xl font-semibold text-center justify-center align-center mb-4">
            Principles I live by.
          </h2>
          <p className="text-center text-md px-4 text-gray-500">
            User-centric design to meet the needs of the user, accessibility so
            everyone can participate, and performance optimized to avoid
            frustrations.
          </p>
        </div>
        <h2 className="text-3xl font-semibold mb-4">Developer Projects</h2>

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

        <ContactMeButton colour="etonBlue" />

        {/* end of file */}
      </div>
    </main>
  );
}
