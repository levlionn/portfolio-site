import React from "react";
import Image from "next/image";

interface Props {
  icon: string;
  expertiseHeader: string;
  expertiseBody: string;
}

const ExpertiseCard = ({ icon, expertiseHeader, expertiseBody }: Props) => {
  return (
    <div className="flex justify-center mt-2">
      <div className="my-3 max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow-lg">
        <Image src={icon} alt="icon" width={25} height={25} className="mb-8" />

        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          {expertiseHeader}
        </h5>

        <p className="mb-3 font-normal text-gray-500">{expertiseBody}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
