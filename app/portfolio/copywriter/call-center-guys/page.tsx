"use client";
import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/app/SectionWrapper";
import CaseStudyQuickPeek from "@/components/CaseStudyQuickPeek";
import ArticleComponent from "@/components/CaseStudyArticleMenu";

//images
import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import compressedVerticalPlaceholder from "/public/images/compressed-vertical-placeholder.jpg";

//article images
import brochureImage from "/public/images/Shopping.png";
import eBookImage1 from "/public/images/Gossip.png";
import eBookImage2 from "/public/images/Instant-Support.png";
import designImage from "/public/images/Painting.png";
import socialImage from "/public/images/Modern-Socialization.png";
import socialImage2 from "/public/images/Notion_Planet.png";

const ARTICLE_DATA = [
  {
    href: "https://drive.google.com/file/d/1X8JxZvI3SdZisX46oe6a28FgdmwWhnIi/view?usp=sharing",
    src: brochureImage,
    title: "Brochure",
    body: "A brochure targetted to execs within Sacks Fifth with the goal of onboarding them as a client.",
    client: "CCG",
    badgeLbl: "Brochure",
  },
  {
    href: "https://drive.google.com/file/d/1Jnz8yi-o481mj7B8n9ihlU4k0ryeNj2G/view?usp=sharing",
    src: eBookImage1,
    title: "Omnichannel Customer Service",
    body: "Used for a Facebook ads campaign. An educational incentive piece to get users to sign up to CCG's newslettter & recieve a free copy.",
    client: "CCG",
    badgeLbl: "eBook",
  },
  {
    href: "https://drive.google.com/file/d/1Jnz8yi-o481mj7B8n9ihlU4k0ryeNj2G/view?usp=sharing",
    src: eBookImage2,
    title: "11 Critical Customer Service Skills",
    body: "Used for a Facebook ads campaign. An educational incentive piece to get users to sign up to CCG's newslettter & recieve a free copy.",
    client: "CCG",
    badgeLbl: "eBook",
  },
  {
    href: "https://drive.google.com/file/d/1Vjw8filxhipH3ns13M-TKdJSjUnZdfOp/view?usp=sharing",
    src: designImage,
    title: "Design Guide",
    body: "CCG's Design Guide/New Brand Identity Book",
    client: "CCG",
    badgeLbl: "Design Guide",
  },
  {
    href: "https://www.linkedin.com/company/call-centre-guys-inc-/",
    src: socialImage,
    title: "Linkedin Content",
    body: "Created value-based, educational content tailored towards the professional.",
    client: "CCG",
    badgeLbl: "Social",
  },
  {
    href: "https://www.instagram.com/callcenterguys/",
    src: socialImage2,
    title: "Instagram Content",
    body: "Created value-based, educational content tailored towards the everyday person.",
    client: "CCG",
    badgeLbl: "Social",
  },
];

export default function CallCenterGuysCaseStudy() {
  //state management
  const [filter, setFilter] = useState(ARTICLE_DATA[0].badgeLbl);

  const badgeLabels = ARTICLE_DATA.map((article) => article.badgeLbl);
  const uniqueBadgeLabelsSet = new Set(badgeLabels);
  const uniqueBadgeLabelsArr = Array.from(uniqueBadgeLabelsSet);

  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        {/* Header Image */}
        <div className=" relative max-w-6xl mx-auto">
          <Image
            src={ccgThumbnail}
            alt="Social Section Image"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>

        <CaseStudyQuickPeek
          title="Constructed a complete brand identity for CCG, a custom website
          and ran lead generation/social media marketing."
          href="https://www.callcenterguys.com/"
          timeline="March - July 2020"
          platform="Custom"
          role="Copywriter & Developer"
          services="Copywriting, Digital Marketing, Guerrilla Marketing, Community
          Building, Content Marketing, Communications & Social Media Management."
        />

        {/* Project Summary */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Project Summary</h2>
          <p className="text-gray-800 my-4">
            Call Center Guys needed a complete brand overhaul to establish a
            fresh image and generate leads through their website. They wanted a
            brand identity that communicated professionalism while retaining a
            playful vibe to stay relevant in the modern business landscape.
          </p>
        </section>

        {/* Challenges & Solutions*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">Challenges and Solutions</h2>
            <p className="text-gray-800 my-4">
              One of the biggest challenges I faced in this project was the need
              to communicate professionalism while retaining a playful and
              casual vibe. To overcome this, I conducted extensive research on
              the telecommunications industry to understand the common pain
              points for businesses and identify the characteristics of the
              target audience.
            </p>
            <p className="text-gray-800 my-4">
              This allowed me to craft copy that resonated with the audience
              while also presenting Call Center Guys as a professional and
              trustworthy brand.
            </p>
          </div>
        </section>

        {/* Process & Timeline*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          <div className="">
            <h2 className="section-h2">My Role</h2>
            <p className="text-gray-800 my-4">
              I wore many hats for this project as I played the part of a
              designer, copywriter and developer (along with my team). This gave
              me unique insight into every area of the project, providing the
              necessary viewpoint to create a comprehensive, consistent brand
              experience.{" "}
            </p>
            <ul className="text-gray-800 my-4">
              <span className="font-bold">My Key Responsibilities </span>
              <li className="my-3">
                1️⃣ Conducting extensive research on the telecommunications
                industry and the target audience to identify their pain points
                and needs.
              </li>
              <li className="my-3">
                2️⃣ Crafting compelling and engaging copy that resonated with the
                target audience and motivated them to engage with the brand.
              </li>
              <li className="my-3">
                3️⃣ Creating a brand identity that communicated professionalism
                and approachability.
              </li>
              <li className="my-3">
                4️⃣ Working closely with the Call Center Guys team to ensure that
                their goals and objectives were met throughout the project.
              </li>
            </ul>
          </div>
        </section>

        {/* Articles & Socials */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Articles & Socials</h2>
          <p className="text-gray-800 my-2">
            Below is published content promoting the brand(s) in order to
            further increasing their reach across the web and build authority.
          </p>
          {/* Filter Menu --*/}
          <div className="flex justify-between items-center max-w-6xl cursor-pointer">
            <div className="text-xs tracking-tighter font-bold text-independence/80">
              Viewing 👀
            </div>

            <div className="flex items-center space-x-4 my-2">
              {uniqueBadgeLabelsArr.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`text-xs ${
                      filter === item
                        ? "font-bold text-goldCrayola"
                        : "text-independence/80"
                    }`}
                    onClick={() => {
                      setFilter(item);
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          {/* End Filter Menu -- */}
          <hr />
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-2 py-2">
            {ARTICLE_DATA.filter((a) => a.badgeLbl === filter).map(
              (article, index) => (
                <ArticleComponent
                  href={article.href}
                  src={article.src}
                  title={article.title}
                  body={article.body}
                  client={article.client}
                  badgeLbl={article.badgeLbl}
                  key={index}
                />
              )
            )}
          </div>
        </section>

        {/* Brand Identity - 3 Images*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl desktop:grid desktop:grid-rows-1 desktop:grid-cols-2 desktop:gap-4">
          <div className="desktop:order-last">
            <h2 className="section-h2">Next Steps and Outcomes</h2>
            <p className="text-gray-800 my-4">
              Following the completion of the project, Call Center Guys
              experienced significant improvements in lead generation and
              engagement. The lead-gen ads we ran on Facebook and LinkedIn
              generated 1 million impressions and a 13% CTR, and the educational
              and engaging content we created helped to increase engagement
              rates and drive traffic to the website.
            </p>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-2 my-2">
            <div className="row-start-1 row-end-1 relative">
              <Image
                src={compressedVerticalPlaceholder}
                alt="Call Center Guys Section Image"
                className="rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-2 relative">
              <Image
                src={compressedVerticalPlaceholder}
                alt="Call Center Guys Section Image"
                className="rounded-md"
              />
            </div>
            <div className="col-span-2 row-span-3 relative">
              <Image
                src={compressedVerticalPlaceholder}
                alt="Call Center Guys Section Image"
                className="rounded-md"
              />
            </div>
          </div>
        </section>
        {/* Facebook Ads - VIDEOS */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <div className="flex justify-between gap-4">
            {[
              "/videos/CCG-vid1.mp4",
              "/videos/CCG-vid2.mp4",
              "/videos/CCG-vid3.mp4",
            ].map((vid, index) => {
              return (
                <div
                  className="rounded-lg overflow-hidden shadow-lg"
                  key={index}
                >
                  <video width="300" height="300" muted loop autoPlay>
                    <source src={vid} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final Thoughts*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl desktop:grid desktop:grid-rows-1 desktop:grid-cols-2 desktop:gap-4">
          <div className="desktop:order-last">
            <h2 className="section-h2">Final Thoughts</h2>
            <p className="text-gray-800 my-4">
              Overall, this project was a great success, and I'm proud to have
              played a key role in helping Call Center Guys establish a strong
              brand identity and generate leads for their business.
            </p>
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
