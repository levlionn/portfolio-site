import React from "react";

interface Props {
  expertiseHeader: string;
  expertiseBody: string;
}

const ExpertiseCard = ({ expertiseHeader, expertiseBody }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="my-3 max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow">
        <svg
          className="w-7 h-7 mb-8 text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>

        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          {expertiseHeader}
        </h5>

        <p className="mb-3 font-normal text-gray-500">{expertiseBody}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
