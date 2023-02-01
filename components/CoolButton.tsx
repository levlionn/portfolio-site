import React from "react";
import Link from "next/link";

interface Props {
  btnLabel: string;
  href: string;
}

const CoolButton = ({ btnLabel, href }: Props) => {
  return (
    <div>
      <Link href={href}>
        <button className="py-4 px-4 bg-purple-400 hover:bg-purple-600 text-white text-xs font-semibold rounded">
          {btnLabel}
        </button>
      </Link>
    </div>
  );
};

export default CoolButton;
