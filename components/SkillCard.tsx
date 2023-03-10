"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import ToggleActiveMode from "./ToggleActiveMode";

//images
import rightArrow from "/public/svg/right-arrow-long.svg";
import Link from "next/link";

interface Props {
  src: StaticImageData;
  icon: string;
  tag: string;
  expertiseHeader: string;
  expertiseBody: string;
  href: string;
  colour: string;
}

const SkillCard = ({
  src,
  icon,
  expertiseBody,
  tag,
  colour,
  href,
  expertiseHeader,
}: Props) => {
  return (
    <div className="">
      <ToggleActiveMode />
      <div className="relative my-3 p-7 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-row items-center mb-4">
          <Image
            src={icon}
            alt="icon"
            width={25}
            height={25}
            className="mr-2"
          />
          <div className="uppercase text-xs text-gray-500">{tag}</div>
        </div>

        <h5 className="text-2xl font-black laptop:text-3xl">
          <span className={`text-${colour}`}>{expertiseHeader}</span>
        </h5>

        <div className="relative h-52 w-52 mx-auto">
          <Image src={src} alt="Copywriter | Developer Skill Image" fill />
        </div>

        <p className="text-independence">{expertiseBody}</p>

        <Link
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
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
