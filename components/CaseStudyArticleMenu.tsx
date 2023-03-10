import React from "react";
import Image, { StaticImageData } from "next/image";

//images
import rightArrow from "/public/svg/right-top-arrow.svg";

interface PDFItem {
  href: string;
  src: StaticImageData;
  title: string;
  body: string;
  client: string;
  badgeLbl: string;
}

const ArticleComponent = ({
  href,
  src,
  title,
  body,
  client,
  badgeLbl,
}: PDFItem) => {
  return (
    <div className="p-5 border border-independence/10 relative flex flex-col w-fit h-auto rounded-xl shadow-xl overflow-hidden">
      <div className="absolute top-0 right-0 m-3 p-1 w-fit text-center text-white text-xs font-semibold px-2 bg-etonBlue/70 rounded-md">
        {badgeLbl}
      </div>
      <h5 className="text-xl font-bold laptop:text-3xl">
        <span>{title}</span>
      </h5>

      <div className="relative mx-auto">
        <Image
          src={src}
          alt="Copywriter | Developer Skill Image"
          height={150}
          width={150}
          className="mx-auto"
        />
      </div>

      <p className="text-independence text-sm">{body}</p>

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
  );
};
export default ArticleComponent;
