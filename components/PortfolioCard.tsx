import React from "react";
import Image, { StaticImageData } from "next/image";
import CoolButton from "./CoolButton";

interface Props {
  source: string;
  width?: number;
  height?: number;
  altText: string;
  client: string;
  cardHeader: string;
  cardBody: string;
  tags: string[];
  colour: string;
  href: string;
}

const PortfolioCard = ({
  client,
  source,
  width,
  height,
  altText,
  cardHeader,
  cardBody,
  tags,
  colour,
  href,
}: Props) => {
  return (
    <div className=" h-auto max-w-s md:max-w-2xl mx-auto my-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="mx-auto ">
        <Image
          src={source}
          alt={altText}
          height={400}
          width={600}
          className="mx-auto"
        />
      </div>

      <div className="px-5 pt-6 pb-6">
        <span className="text-xs text-gray-500">{client}</span>

        <h5 className="mb-2 text-2xl font-bold text-gray-900">{cardHeader}</h5>

        <p className="my-4 text-gray-700">{cardBody}</p>
        <div className="flex flex-row -mt-5 mb-2 py-2">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="ml-2 first:ml-0 text-xs text-gray-500"
              >
                {tag}
              </div>
            );
          })}
        </div>

        <CoolButton
          btnLabel="Read More"
          href={href}
          btnwidth="full"
          textSize="s"
          colour={colour}
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
