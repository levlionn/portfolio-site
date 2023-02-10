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
  colour: string;
}

const ExpertiseCard = ({
  icon,
  expertiseBody,
  tag,
  colour,
  href,
  expertiseHeader,
}: Props) => {
  return (
    <div className="relative my-3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
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
        <h5 className="mb-6 text-xl font-black laptop:text-3xl">
          <span className={`text-${colour}`}>{expertiseHeader}</span>
          {/* <span className="text-etonBlue">
            I write clean, concise, converting copy.
          </span> */}
        </h5>
        <p className="text-independence">{expertiseBody}</p>

        <a
          href={href}
          className="text-sm w-32 text-black flex flex-row my-4 laptop:text-base laptop:w-40"
        >
          <span className={`text-${colour}`}>See my work</span>
          <Image
            src={rightArrow}
            alt="icon"
            height={15}
            width={15}
            className="ml-2"
          />
        </a>
      </div>
      <div className="relative h-52 w-full">
        <Image src={mockPlaceholder2} alt="hi" fill />
      </div>
    </div>
  );
};

export default ExpertiseCard;
