import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import compressedPlaceholder from "/public/images/compressed-placeholder.jpg";
import compressedVerticalPlaceholder from "/public/images/compressed-vertical-placeholder.jpg";
import Image from "next/image";

import { SectionWrapper } from "@/app/SectionWrapper";

// interface PDFItem {
//   href: string;
//   src: StaticImageData;
//   title: string;
// }

// const PDFComponenet = ({ href, src, title }: PDFItem) => {
//   return (
//     <div className=" rounded-lg bg-white shadow-xl cursor-pointer my-2">
//       <Image src={src} alt="CCG Brochure" className="rounded-t-lg" />

//       <div className="p-2 ">
//         <h5 className=" text-sm leading-tight text-neutral-500">{title}</h5>

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
//     </div>
//   );
// };

export default function CallCenterGuysDeveloperCaseStudy() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        {/* Header Image */}
        <div className=" relative max-w-6xl mx-auto">
          <Image src={ccgThumbnail} alt="Call Center Guys Section Image" />
        </div>

        {/* H1 & CTA & Stats */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          {/* Quote Box */}
          <div className="border-l-2 border-gray-600 pl-4">
            <h1 className="caseStudy-h1 ">
              Designed, built and launched a complete custom website for CCG, a
              complete brand identity and ran lead generation/social media
              marketing.
            </h1>
            <button
              type="button"
              className="border border-black rounded-md p-2 uppercase focus:outline-none"
            >
              <a href="https://www.callcenterguys.com/" target="_blank">
                Visit Live Site
              </a>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-rows-2 grid-cols-3 gap-x-2 pt-8 pb-4">
            <div className="uppercase text-gray-600">Timeline</div>
            <div className="uppercase text-gray-600">Platform</div>
            <div className="uppercase text-gray-600">Role</div>
            <div className="text-gray-400">March - April 2023</div>
            <div className="text-gray-400">Custom</div>
            <div className="text-gray-400">Developer | Copywriter</div>
          </div>
          <hr />
        </section>

        {/* Laptop Up, Convert to Grid view */}
        <div className="desktop:flex desktop:section-x-outer-margin-width desktop:max-w-6xl desktop:gap-6">
          {/* Summary & Services */}
          <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
            <h2 className="section-h2">Summary</h2>
            <p className="text-gray-800 my-4">
              Call Center Guys, a startup without a brand identity or website,
              needed a full brand refresh to generate leads. As a web developer,
              I collaborated with them to create a functional, approachable, and
              easy-to-navigate website that turned new visitors into customers.
              Using a user-centered design approach, I incorporated custom
              graphics and created a responsive site that worked well across all
              devices. The result was a site that helped Call Center Guys
              establish their brand and achieve their business objectives.
            </p>
            <h3 className="text-gray-700 uppercase text-xs tablet:text-sm my-2">
              <span className="text-gray-900 text-bold">Services: </span>Web
              Design, Web Development, Copywriting, Digital Marketing, Brand
              Identity, Lead Generation & SMM.
            </h3>
          </section>

          {/* Requirements of The Project*/}
          <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
            <div className="">
              <h2 className="section-h2">Requirements of the project</h2>
              <p className="text-gray-800 my-4">
                Call Center Guys is a telecommunications company that needed a
                full brand refresh and a custom website to generate leads. Their
                target audience was businesses in need of call center services,
                and their main goals for the project were to establish their
                brand identity, educate visitors about their services, capture
                leads and rank on Google organically.
              </p>
            </div>

            <div className="relative w-full h-72 my-2">
              <Image
                src={compressedPlaceholder}
                alt="Call Center Guys Section Image"
                fill
                className="rounded-md"
              />
            </div>
          </section>
        </div>

        {/* Project Scope - 3 Images*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl desktop:grid desktop:grid-rows-1 desktop:grid-cols-2 desktop:gap-4">
          <div className="desktop:order-last">
            <h2 className="section-h2">Project Scope</h2>
            <p className="text-gray-800 my-4">
              The website needed to have a modern design and be easy to
              navigate, with a contact form to capture leads. It also needed to
              be optimized for search engines to drive organic traffic. The
              client requested a custom color scheme and graphics to match their
              new brand identity.
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

        {/* Technical Requirements - VIDEOS */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Technical Requirements</h2>
          <p className="text-gray-800 my-4">
            The website was built using NextJS as the framework, Vercel for
            hosting, BulmaCSS for styling, and Storyblok as a headless CMS.
            Various analytics tools like Google, LinkedIn, Facebook, MouseFlow,
            and Segment were used to track user behavior and engagement on the
            site. The site was SSR to ensure quick loading times, and anti-spam
            security principles were implemented to prevent abuse of the contact
            form and protect sensitive data.
          </p>
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

        {/* Timeline & Budget */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">Timeline & Budget</h2>
          <p className="text-gray-800">
            The project had a tight timeline of 3 months and a budget of $20K.
            We established clear milestones for the completion of the website
            and worked closely with the client throughout the process to ensure
            that everything ran smoothly. By breaking the project into chunks,
            we were able to deliver a quality product on time and within budget.
          </p>
        </section>
      </main>
    </SectionWrapper>
  );
}
