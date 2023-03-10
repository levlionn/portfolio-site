import React from "react";

interface Props {
  principleHeader: string;
  principleBody: string;
}

const PrincipleItem = ({ principleHeader, principleBody }: Props) => {
  return (
    <div className="flex flex-col my-4">
      <div>
        <h3 className="text-2xl text-black">{principleHeader}</h3>
        <p className="text-gray-600 text-base">{principleBody}</p>
      </div>
    </div>
  );
};

export default PrincipleItem;
