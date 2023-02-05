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
    <div className="relative my-3 max-w-sm h-2/3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="p-7 ">
        <div className="flex flex-row items-center my-4">
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
        <div className="text-sm text-black flex flex-row my-4">
          <a href={href} className="mr-2 ">
            See my work
          </a>
          <Image src={rightArrow} alt="icon" width={15} height={15} />
        </div>
      </div>

      <Image src={mockPlaceholder2} alt="hi" className="fill" />
    </div>
  );
};

export default ExpertiseCard;
