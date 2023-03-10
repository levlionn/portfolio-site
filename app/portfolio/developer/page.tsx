import { SectionWrapper } from "@/app/SectionWrapper";
import PortfolioCard from "@/components/PortfolioCard";
import PrincipleItem from "../PrincipleItem";

//images
import copywriterSkillCardImage from "/public/images/Magic_.png";

const DEVELOPER_PROJECTS = [
  {
    source: copywriterSkillCardImage,
    client: "Call Center Guys",
    altText: "Call Center Guys portfolio image",
    cardHeader: "Full Custom Website",
    cardBody:
      "Designed, developed and deployed a full-scale website. Ran marketing operations afterwards.",
    tags: ["#uxui", "#frontend"],
    colour: "etonBlue",
    href: "/portfolio/developer/call-center-guys",
  },
];

const DEVELOPER_PRINCIPLES = [
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

export default function DeveloperPortfolio() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto">
        <section className="flex flex-col section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <h1 className="section-h1 text-etonBlue">
            Designing digital experiences, one pixel at a time.
          </h1>

          {/* PRINCIPLES SECTION */}

          <div>
            <h2 className="section-h2">Principles I live by</h2>

            {DEVELOPER_PRINCIPLES.map((p, index) => (
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
              For me, programming is the perfect synergy of creativity and
              problem-solving capabilities – it's both challenging, yet
              incredibly fun. I LOVE building useful projects, and will continue
              to for the rest of my life.
            </p>

            <p className="text-gray-500 font-sm">
              <span className="text-gray-700 font-sm uppercase">
                key skills:{" "}
              </span>
              Responsive design, security principles, problem-solving, version
              control, testing & debugging, CRM, SEO
            </p>
            <p className="text-gray-500 font-sm">
              <span className="text-gray-700 font-sm uppercase">Tech: </span>
              React, NextJS,HTML, CSS, Javascript, Node, MongoDB, Postman,
              Storyblok, Vercel, Express, Wordpress, Git, Github
            </p>
          </div>
        </section>

        {/* COPYWRITING PROJECTS */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <h2 className="section-h2">Developer Projects</h2>

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

        {/* end of file */}
      </main>
    </SectionWrapper>
  );
}
