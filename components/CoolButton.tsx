import React from "react";
import Link from "next/link";

interface Props {
  btnLabel: string;
  href: string;
  btnwidth: string;
  textSize: string;
}

const CoolButton = ({ btnLabel, href, btnwidth, textSize }: Props) => {
  return (
    <div>
      <Link href={href}>
        <button
          className={`py-3 px-3 w-${btnwidth} bg-purple-400 hover:bg-purple-600 text-white text-${textSize} font-semibold rounded-md shadow-md`}
        >
          {btnLabel}
        </button>
      </Link>
    </div>
  );
};

export default CoolButton;
