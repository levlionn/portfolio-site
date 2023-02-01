import React from "react";

interface Props {
  btnLabel: string;
}

const CoolButton = ({ btnLabel }: Props) => {
  return (
    <div>
      <button className="py-4 px-4 bg-purple-400 hover:bg-purple-600 text-white text-xs font-semibold rounded">
        {btnLabel}
      </button>
    </div>
  );
};

export default CoolButton;
