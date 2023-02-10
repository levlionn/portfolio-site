import React from "react";

interface Props {
  principleHeader: string;
  principleBody: string;
}

const PrincipleItem = ({ principleHeader, principleBody }: Props) => {
  return (
    <div className="mt-4">
      <div className="mb-4">
        <h3 className="text-xl text-black mb-4">{principleHeader}</h3>
        <p className="text-gray-500 text-base">{principleBody}</p>
      </div>
    </div>
  );
};

export default PrincipleItem;
