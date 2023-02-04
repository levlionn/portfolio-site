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
}: Props) => {
  return (
    <div className="max-w-s md:max-w-2xl mx-auto my-2 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            src={source}
            height={500}
            width={500}
            alt={altText}
            className="w-full md:h-full md:w-48"
          />
        </div>

        <div className="px-5 pt-6 pb-6">
          <div className="flex flex-row -mt-5 mb-3 py-2">
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
          <span className="text-xs text-gray-500">{client}</span>

          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            {cardHeader}
          </h5>

          <p className="my-4 text-gray-700">{cardBody}</p>

          <CoolButton
            btnLabel="Read More"
            href="#"
            btnwidth="full"
            textSize="s"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
