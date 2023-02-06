import ContactMeButton from "@/components/ContactMeButton";
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
        <h1 className="text-4xl font-black text-center my-7 text-etonBlue">
          Designing digital experiences, one pixel at a time.
        </h1>

        <div className="mt-4">
          {developerPrinciples.map((principle, index) => {
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
        <h2 className="text-3xl font-semibold my-4">Developer Projects</h2>

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
