import React from "react";
import Image, { StaticImageData } from "next/image";

//images
import rightArrow from "/public/svg/right-arrow-long.svg";
import Link from "next/link";

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
    <div className="relative max-w-sm laptop:max-w-xs w-full h-60 tablet:h-40 laptop:h-72 my-2 bg-white border border-gray-200 overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <Image src={resourceImage} alt="heroImage" fill />
      <span className="bg-independence text-white text-xs font-medium p-1 rounded opacity-50 m-4 absolute top-0 right-0 w-22 tracking-tighter">
        {badgeLbl}
      </span>
      <div className="absolute bottom-0 left-0  w-full">
        <div className="p-4 space-y-2">
          <h3 className="w-full tracking-tight font-bold text-xl laptop:text-2xl tablet:text-xs text-black">
            {header}
          </h3>
          <div className="text-sm tablet:text-xs laptop:text-base text-bold flex flex-row">
            <Link href={href} className="mr-2 ">
              {linkLbl}
            </Link>
            <Image src={rightArrow} alt="icon" width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
