"use client";
import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import compressedPlaceholder from "/public/images/compressed-placeholder.jpg";
import compressedVerticalPlaceholder from "/public/images/compressed-vertical-placeholder.jpg";
import Image, { StaticImageData } from "next/image";

import rightArrow from "/public/svg/right-top-arrow.svg";
import { SectionWrapper } from "@/app/SectionWrapper";
import { useState } from "react";
import CaseStudyQuickPeek from "@/components/CaseStudyQuickPeek";

const ARTICLE_DATA = [
  {
    id: 0,
    href: "https://drive.google.com/file/d/1X8JxZvI3SdZisX46oe6a28FgdmwWhnIi/view?usp=sharing",
    src: compressedPlaceholder,
    title: "Brochure",
    body: "A brochure targetted to execs within Sacks Fifth with the goal of onboarding them as a client.",
    client: "CCG",
    badgeLbl: "Brochure",
  },
  {
    id: 1,
    href: "https://drive.google.com/file/d/1Jnz8yi-o481mj7B8n9ihlU4k0ryeNj2G/view?usp=sharing",
    src: compressedPlaceholder,
    title: "Omnichannel Customer Service",
    body: "Used for a Facebook ads campaign. An educational incentive piece to get users to sign up to CCG's newslettter & recieve a free copy.",
    client: "CCG",
    badgeLbl: "eBook",
  },
  {
    id: 2,
    href: "https://drive.google.com/file/d/1Jnz8yi-o481mj7B8n9ihlU4k0ryeNj2G/view?usp=sharing",
    src: compressedPlaceholder,
    title: "11 Critical Customer Service Skills",
    body: "Used for a Facebook ads campaign. An educational incentive piece to get users to sign up to CCG's newslettter & recieve a free copy.",
    client: "CCG",
    badgeLbl: "eBook",
  },
  {
    id: 3,
    href: "https://drive.google.com/file/d/1Vjw8filxhipH3ns13M-TKdJSjUnZdfOp/view?usp=sharing",
    src: compressedPlaceholder,
    title: "Design Guide",
    body: "CCG's Design Guide/New Brand Identity Book",
    client: "CCG",
    badgeLbl: "Design Guide",
  },
  {
    id: 4,
    href: "https://www.linkedin.com/company/call-centre-guys-inc-/",
    src: compressedPlaceholder,
    title: "Linkedin Content",
    body: "Ideated, curated and created content to showcase CCG online and attract new leads through value-based content.",
    client: "CCG",
    badgeLbl: "Social",
  },
  {
    id: 4,
    href: "https://www.instagram.com/callcenterguys/",
    src: compressedPlaceholder,
    title: "Instagram Content",
    body: "Ideated, curated and created content to showcase CCG online and attract new leads through value-based content.",
    client: "CCG",
    badgeLbl: "Social",
  },
];

interface PDFItem {
  href: string;
  src: StaticImageData;
  title: string;
  body: string;
  client: string;
  badgeLbl: string;
}

// const PDFComponenet = ({ href, src, title, body, client }: PDFItem) => {
//   return (
//     <>
//       <div className="relative w-36 h-48 desktop:w-44 rounded-lg bg-white shadow-xl cursor-pointer my-2">
//         <Image src={src} alt="CCG Brochure" className="rounded-lg" fill />
//       </div>
//       <div className="py-2 tablet:-ml-14 desktop:-ml-20">
//         <h5 className="text-md desktop:text-lg font-bold leading-tight">
//           {title}
//         </h5>
//         <p className="text-xs desktop:text-base text-gray-600 my-4">{body}</p>
//         <a href={href} target="_blank">
//           <div className="flex py-1 text-sm font-semibold">
//             Read Now
//             <Image
//               src={rightArrow}
//               alt="arrow pointing north east"
//               height={10}
//               width={10}
//               className="ml-1"
//             />
//           </div>
//         </a>
//       </div>
//     </>
//   );
// };

const ArticleComponent = ({
  href,
  src,
  title,
  body,
  client,
  badgeLbl,
}: PDFItem) => {
  return (
    <div className="relative max-w-xs flex flex-col">
      <div className="relative w-full h-32 rounded-lg bg-white shadow-xl cursor-pointer">
        <Image src={src} alt="CCG Brochure" className="rounded-lg" fill />
        {/* Badge */}
        <div className="absolute top-0 left-0 m-2 p-0.5 w-fit text-center text-white text-xs  font-medium px-2 bg-etonBlue rounded-lg">
          {badgeLbl}
        </div>
      </div>
      <div className="py-2">
        <span className="text-xs text-gray-500">{client}</span>

        <h5 className="text-lg font-bold leading-tight">{title}</h5>

        <p className="text-xs desktop:text-base text-gray-600 my-3 ">{body}</p>
        <a href={href} target="_blank" rel="noreferrer">
          <div className="flex py-1 text-sm font-semibold">
            Read Now
            <Image
              src={rightArrow}
              alt="arrow pointing north east"
              height={10}
              width={10}
              className="ml-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

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
          Building, Content Marketing, Communications, & Social Media Management."
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
          <h2 className="section-h2">Advertisement</h2>
          <div className="flex justify-between gap-4 my-4">
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

        {/* eBooks & PDFs */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Articles & Socials</h2>
          <p className="text-gray-800 my-2">
            Below are examples of articles and social media content I created
            for CCG.
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
          <div className="grid grid-cols-2 laptop:grid-cols-4 gap-5 py-2">
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
      </main>
    </SectionWrapper>
  );
}
