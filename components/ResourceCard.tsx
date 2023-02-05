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
    <div className="relative max-w-sm my-6 bg-white border border-gray-200 overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <Image src={resourceImage} alt="heroImage" className="fill" />
      <div className="absolute bottom-0 left-0 text-white w-full">
        <div className="p-4 space-y-3">
          <span className="bg-independence text-white text-xs font-medium px-2.5 py-0.5 rounded opacity-80">
            {badgeLbl}
          </span>
          <h3 className="text-bold text-xl text-black">{header}</h3>
          <div className="text-sm text-black flex flex-row">
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
