import React from "react";
import Image from "next/image";

interface Props {
  icon: string;
  expertiseHeader: string;
  expertiseBody: string;
}

const ExpertiseCard = ({ icon, expertiseHeader, expertiseBody }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="my-3 max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow-lg">
        <Image src={icon} alt="icon" width={25} height={25} className="mb-8" />

        <h5 className="mb-6 text-2xl font-black">{expertiseHeader}</h5>

        <p className="text-independence">{expertiseBody}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
