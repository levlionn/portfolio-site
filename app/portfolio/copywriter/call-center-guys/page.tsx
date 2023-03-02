import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import compressedPlaceholder from "/public/images/compressed-placeholder.jpg";
import compressedVerticalPlaceholder from "/public/images/compressed-vertical-placeholder.jpg";
import Image, { StaticImageData } from "next/image";

import rightArrow from "/public/svg/right-top-arrow.svg";
import { SectionWrapper } from "@/app/SectionWrapper";

interface PDFItem {
  href: string;
  src: StaticImageData;
  title: string;
  body: string;
}

const PDFComponenet = ({ href, src, title, body }: PDFItem) => {
  return (
    <>
      <div className="relative w-36 h-48 desktop:w-44 rounded-lg bg-white shadow-xl cursor-pointer my-2">
        <Image src={src} alt="CCG Brochure" className="rounded-lg" fill />
      </div>
      <div className="py-2 tablet:-ml-14 desktop:-ml-20">
        <h5 className="text-md desktop:text-lg font-bold leading-tight">
          {title}
        </h5>
        <p className="text-xs desktop:text-base text-gray-600 my-4">{body}</p>
        <a href={href} target="_blank">
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
    </>
  );
};

export default function CallCenterGuysCaseStudy() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto ">
        {/* Header Image */}
        <div className=" relative h-52 max-w-6xl mx-auto">
          <Image src={ccgThumbnail} alt="Call Center Guys Section Image" fill />
        </div>

        {/* H1 & CTA & Stats */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
          {/* Quote Box */}
          <div className="border-l-2 border-gray-600 pl-4">
            <h1 className="caseStudy-h1 ">
              Constructed a complete brand identity for CCG, a custom website
              and ran lead generation/social media marketing.
            </h1>
            <button
              type="button"
              className="border border-black rounded-md p-2 uppercase"
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
            <div className="text-gray-400">March - July 2020</div>
            <div className="text-gray-400">Custom</div>
            <div className="text-gray-400">Copywriter & Developer</div>
          </div>
          <hr />
        </section>

        {/* Laptop Up, Convert to Grid view */}
        <div className="desktop:flex desktop:section-x-outer-margin-width desktop:max-w-6xl desktop:gap-6">
          {/* Summary & Services */}
          <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
            <h2 className="section-h2">Summary</h2>
            <p className="text-gray-800 my-4">
              Call Center Guys needed a full brand refresh – what they had in
              the books, wasn't cutting it. Their main objective was to generate
              leads through their site, so they needed a brand image that
              communicated professionalism, yet an air of casual playfullness so
              as to not appear overly corporate.
            </p>
            <h3 className="text-gray-700 uppercase text-xs tablet:text-sm my-2">
              <span className="text-gray-900 text-bold">Services: </span>Web
              Design, Copywriting, Digital Marketing, Brand Identity, Lead
              Generation & SMM.
            </h3>
          </section>

          {/* Copywriting*/}
          <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
            <div className="">
              <h2 className="section-h2">Copywriting</h2>
              <p className="text-gray-800 my-4">
                Quality research would make-or-break this project, so I made
                sure to dig in and get a full grasp of the telecommunications
                industry before writing a single word down. This gave me a
                deeper understanding of common pain points for businesses within
                the vertical, while simutaneously adding ammunition to my
                marketing gun – offering the chance to shoot off timely messages
                to our target audience who needed to hear it most.
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

        {/* Brand Identity - 3 Images*/}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl desktop:grid desktop:grid-rows-1 desktop:grid-cols-2 desktop:gap-4">
          <div className="desktop:order-last">
            <h2 className="section-h2">Brand Identity</h2>
            <p className="text-gray-800 my-4">
              Initially, CCG was a blank slate. There was no defined target
              audience, no main persona, and few details on how the company was
              planning to generate leads. My mission, was to hone in on the
              characteristics of their target audience, and craft engaging copy
              to persuade them to book a call with CCG.
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
          <h2 className="section-h2">Facebook Ads</h2>
          <p className="text-gray-800 my-4">
            A collection of lead-gen ads ran via Facebook & LinkedIn. Generating
            1M impressions and a 13% CTR.
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

        {/* eBooks & PDFs */}
        <section className="section-y-spacing section-x-outer-margin-width max-w-6xl ">
          <h2 className="section-h2">eBooks & Brochure</h2>
          <p className="text-gray-800">
            Beautifully crafted PDFs to showcase the newly redefined CCG to
            potential clients. Below are examples of assets my team & I created
            as incentive for signing up to CCG's newsletter.
          </p>

          <div className="grid grid-cols-2 laptop:grid-cols-4 gap-3 py-2">
            <PDFComponenet
              href="https://drive.google.com/file/d/1X8JxZvI3SdZisX46oe6a28FgdmwWhnIi/view?usp=sharing"
              src={compressedVerticalPlaceholder}
              title="Sacks Fifth Brochure"
              body="A brochure targetted to execs within Sacks Fifth with the goal of
            onboarding them as a client."
            />
            <PDFComponenet
              href="https://drive.google.com/file/d/1Jnz8yi-o481mj7B8n9ihlU4k0ryeNj2G/view?usp=sharing"
              src={compressedVerticalPlaceholder}
              title="Omnichannel Customer Service"
              body="Used for a Facebook ads campaign. An educational incentive piece to get users to sign up to CCG's newslettter & recieve a free copy."
            />
            <PDFComponenet
              href="https://drive.google.com/file/d/1bg1W4jsM6BPkfN5CvnFcsvMLZ2usksjF/view?usp=sharing"
              src={compressedVerticalPlaceholder}
              title="11 Critical Customer Service Skills"
              body="Used for a Facebook ads campaign. An educational incentive piece to get users to sign up to CCG's newslettter & recieve a free copy."
            />
            <PDFComponenet
              href="https://drive.google.com/file/d/1Vjw8filxhipH3ns13M-TKdJSjUnZdfOp/view?usp=sharing"
              src={compressedVerticalPlaceholder}
              title="Design Guide"
              body="CCG's brand colours, typography, layout and identity."
            />
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
