import ccgThumbnail from "/public/images/CCG-Thumbnail.jpg";
import compressedPlaceholder from "/public/images/compressed-placeholder.jpg";
import compressedVerticalPlaceholder from "/public/images/compressed-vertical-placeholder.jpg";
import Image, { StaticImageData } from "next/image";

import rightArrow from "/public/svg/right-top-arrow.svg";

interface PDFItem {
  href: string;
  src: StaticImageData;
  title: string;
}

const PDFComponenet = ({ href, src, title }: PDFItem) => {
  return (
    <div className=" rounded-lg bg-white shadow-xl cursor-pointer my-2">
      <Image src={src} alt="CCG Brochure" className="rounded-t-lg" />

      <div className="p-2 ">
        <h5 className=" text-sm leading-tight text-neutral-500">{title}</h5>

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
    </div>
  );
};

export default function CallCenterGuysCaseStudy() {
  return (
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
            Constructed a complete brand identity for CCG, a custom website and
            ran lead generation/social media marketing.
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
          <div className="text-gray-400">March - April 2023</div>
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
            Call Center Guys needed a full brand refresh – what they had in the
            books, wasn't cutting it. Their main objective was to generate leads
            through their site, so they needed a brand image that communicated
            professionalism, yet an air of casual playfullness so as to not
            appear overly corporate.
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
              Quality research would make-or-break this project, so I made sure
              to dig in and get a full grasp of the telecommunications industry
              before writing a single word down. This gave me a deeper
              understanding of common pain points for businesses within the
              vertical, while simutaneously adding ammunition to my marketing
              gun – offering the chance to shoot off timely messages to our
              target audience who needed to hear it most.
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
          <h2 className="section-h2">Brand Identify</h2>
          <p className="text-gray-800 my-4">
            Initially, CCG was a blank slate. There was no defined target
            audience, no main persona, and few details on how the company was
            planning to generate leads. My mission, was to hone in on the
            characteristics of their target audience, and craft engaging copy to
            persuade them to book a call with CCG.
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
              <div className="rounded-lg overflow-hidden shadow-lg" key={index}>
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
          potential clients. Below are examples of assets my team & I created as
          incentive for signing up to CCG's newsletter.
        </p>

        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-3 py-4">
          <PDFComponenet
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7b01eff-c84c-4c01-a3f4-236be098e4c5/CCG_Brochure.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230222T205655Z&X-Amz-Expires=86400&X-Amz-Signature=e5e1279a7c00fb6bb3959d7065ea635bbc518d4f15e140446b4996d1e7627dad&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22CCG%2520Brochure.pdf%22&x-id=GetObject"
            src={compressedVerticalPlaceholder}
            title="Sacks Fifth Brochure"
          />
          <PDFComponenet
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0990f8b-65bf-4571-aa41-6290d1b663f7/CCG_Resource_2_v1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230222T205812Z&X-Amz-Expires=86400&X-Amz-Signature=b94883c053a38f80bea4079f0272ec72ae5d481b824eee3772ba3d8b5782fddb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22CCG%2520Resource%2520%25232%2520v1.pdf%22&x-id=GetObject"
            src={compressedVerticalPlaceholder}
            title="Omnichannel Customer Service"
          />
          <PDFComponenet
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ce18dd7-b6d3-4931-a5a0-a99daf0f4ece/CCG_Resource_Final.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230222T205906Z&X-Amz-Expires=86400&X-Amz-Signature=9c017477d469b8c909eb4fa404905ee2c1bcc74490acd6b04110accf5e5cb028&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22CCG%2520Resource%2520Final.pdf%22&x-id=GetObject"
            src={compressedVerticalPlaceholder}
            title="11 Critical Customer Service Skills"
          />
          <PDFComponenet
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f08b3d99-5af6-4096-9739-4c751eb15cbe/Design_Guide.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230222T205928Z&X-Amz-Expires=86400&X-Amz-Signature=442d840c55b2afeb9837735717577d01fd3df13bf09744f071a5d07c684a0341&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Design%2520Guide.pdf%22&x-id=GetObject"
            src={compressedVerticalPlaceholder}
            title="Design Guide"
          />
        </div>
      </section>
    </main>
  );
}
