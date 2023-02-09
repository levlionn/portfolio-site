import React from "react";
import Image from "next/image";

import mockPlaceholder from "/public/images/phone-mock.png";
import mockPlaceholder2 from "/public/images/mock2.png";
import rightArrow from "/public/svg/right-arrow-long.svg";

interface Props {
  icon: string;
  tag: string;
  expertiseHeader: string;
  expertiseBody: string;
  href: string;
}

const ExpertiseCard = ({
  icon,
  expertiseHeader,
  expertiseBody,
  tag,
  href,
}: Props) => {
  return (
    <div className="relative my-3 h-2/3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="p-7 ">
        <div className="max-w-xs flex flex-row items-center my-4">
          <Image
            src={icon}
            alt="icon"
            width={25}
            height={25}
            className="mr-2"
          />
          <div className="uppercase text-xs text-gray-500">{tag}</div>
        </div>
        <h5 className="mb-6 text-xl font-black">{expertiseHeader}</h5>
        <p className="text-independence">{expertiseBody}</p>

        <a href={href} className="text-sm w-32 text-black flex flex-row my-4">
          See my work
          <Image
            src={rightArrow}
            alt="icon"
            height={15}
            width={15}
            className="ml-2"
          />
        </a>
      </div>

      <Image src={mockPlaceholder2} alt="hi" className="fill" />
    </div>
  );
};

export default ExpertiseCard;
