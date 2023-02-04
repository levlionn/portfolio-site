import React from "react";
import Link from "next/link";
import { TailwindWidth } from "@/types";

interface Props {
  btnLabel: string;
  href?: string;
  btnwidth?: TailwindWidth;
  textSize?: TailwindWidth;
}

const CoolButton = ({
  btnLabel,
  href = "#",
  btnwidth = "s",
  textSize = "s",
}: Props) => {
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
