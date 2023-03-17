import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import compressedPlaceholder from "/public/images/compressed-placeholder.jpg";
import compressedVerticalPlaceholder from "/public/images/compressed-vertical-placeholder.jpg";
import Image from "next/image";

import { SectionWrapper } from "@/app/SectionWrapper";
import CaseStudyQuickPeek from "@/components/CaseStudyQuickPeek";

export default function CallCenterGuysDeveloperCaseStudy() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        {/* Header Image */}
        <div className="relative max-w-6xl mx-auto">
          <Image src={ccgThumbnail} alt="Call Center Guys Section Image" />
        </div>

        <CaseStudyQuickPeek
          title="Designed, built and launched a complete custom website for CCG, a
        complete brand identity and ran lead generation/social media
        marketing."
          href="https://www.callcenterguys.com/"
          timeline="March - April 2023"
          platform="Custom"
          role="Developer & Copywriter"
          services="Design, Development, Copywriting, Digital Marketing, Community
          Building, Content Marketing, Communications & Social Media Management."
        />

        {/* Project Summary */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Project Summary</h2>
          <p className="text-gray-800 my-4">
            Call Center Guys, a startup without a brand identity or website,
            needed a full brand refresh to generate leads. As a web developer, I
            collaborated with them to create a functional, approachable, and
            easy-to-navigate website that turned new visitors into customers.
            Using a user-centered design approach, I incorporated custom
            graphics and created a responsive site that worked well across all
            devices. The result was a site that helped Call Center Guys
            establish their brand and achieve their business objectives.
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
              I then incorporated my findings into the design to create an
              optimal user journey while also presenting Call Center Guys as a
              professional and trustworthy brand.
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
                2️⃣ Designing & Developing their website using NextJS
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
            <h2 className="section-h2">Technical Requirements</h2>
            <p className="text-gray-800 my-4">
              The website was built using NextJS as the framework, Vercel for
              hosting, BulmaCSS for styling, and Storyblok as a headless CMS.
              Various analytics tools like Google, LinkedIn, Facebook,
              MouseFlow, and Segment were used to track user behavior and
              engagement on the site. The site was SSR to ensure quick loading
              times, and anti-spam security principles were implemented to
              prevent abuse of the contact form and protect sensitive data.
            </p>
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
