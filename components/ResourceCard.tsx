import React from "react";
import Image, { StaticImageData } from "next/image";

//images
import rightArrow from "/public/svg/right-arrow-long.svg";

interface Props {
  resourceImage: StaticImageData;
  badgeLbl: string;
  header: string;
  linkLbl: string;
  href: string;
}

const ResourceCard = ({
  badgeLbl,
  header,
  linkLbl,
  href,
  resourceImage,
}: Props) => {
  return (
    <div className="relative max-w-xs my-2 bg-white border border-gray-200 overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <Image src={resourceImage} alt="heroImage" className="fill" />
      <span className="bg-independence text-white text-xs font-medium px-2.5 py-0.5 rounded opacity-50 m-4 absolute top-0 right-0 w-22 tracking-tighter">
        {badgeLbl}
      </span>
      <div className="absolute bottom-0 left-0 text-white w-full">
        <div className="p-4 space-y-2">
          <h3 className="w-48 tracking-tight font-black text-xl tablet:text-sm text-black laptop:text-2xl">
            {header}
          </h3>
          <div className="text-sm tablet:text-xs laptop:text-base text-black flex flex-row">
            <a href={href} className="mr-2 ">
              {linkLbl}
            </a>
            <Image src={rightArrow} alt="icon" width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
