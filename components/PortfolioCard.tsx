import React from "react";
import Image, { StaticImageData } from "next/image";
import CoolButton from "./CoolButton";

interface Props {
  source: StaticImageData;
  altText: string;
  client: string;
  cardHeader: string;
  cardBody: string;
  tags: string[];
}

const PortfolioCard = ({
  client,
  source,
  altText,
  cardHeader,
  cardBody,
  tags,
}: Props) => {
  return (
    <div className="my-2 max-w-s bg-white border border-gray-200 rounded-lg shadow">
      <Image
        src={source}
        width={356}
        height={50}
        alt={altText}
        className="rounded"
      />

      <div className="p-5">
        <span className="text-xs text-gray-500 pb-1">Client: {client}</span>
        <div className="flex flex-row my-1">
          {tags.map((t) => {
            return (
              <div className="ml-2 first:ml-0 text-xs text-gray-500">{t}</div>
            );
          })}
        </div>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cardHeader}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cardBody}
        </p>

        <CoolButton btnLabel="Read More" href="#" />
      </div>
    </div>
  );
};

export default PortfolioCard;
