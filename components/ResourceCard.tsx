import React from "react";
import Image, { StaticImageData } from "next/image";

//images
import rightTopArrow from "/public/svg/right-top-arrow.svg";

import Link from "next/link";

interface Props {
  resourceImage: StaticImageData;
  badgeLbl: string;
  header: string;
  body: string;
  linkLbl: string;
  href: string;
}

const ResourceCard = ({
  badgeLbl,
  header,
  body,
  linkLbl,
  href,
  resourceImage,
}: Props) => {
  return (
    <div className="flex w-fit h-fit rounded-md overflow-hidden shadow-lg my-2 border border-independence">
      <div className="relative basis-1/2 flex items-center justify-center border border-r-independence">
        <Image
          src={resourceImage}
          alt="Resource Card Image of a male brick layer building a wall. Style in Notion illustration."
          className="mx-auto "
          height={150}
          width={150}
        />
        <span className="absolute top-0 left-0 w-fit m-2 p-1.5 bg-independence/80 text-white text-xs rounded-md tracking-tighter">
          {badgeLbl}
        </span>
      </div>
      <div className="basis-1/2 p-3">
        <h3 className="tracking-tighter font-bold text-2xl text-black">
          {header}
        </h3>
        <p className="text-xs desktop:text-sm text-gray-600 my-3">{body}</p>

        <div className="flex text-sm w-fit text-bold">
          <Link href={href} className="mr-2 ">
            {linkLbl}
          </Link>
          <Image
            src={rightTopArrow}
            alt="pointing top-right arrow icon"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
