import React from "react";
import Link from "next/link";
import { TailwindWidth } from "@/types";

interface Props {
  btnLabel: string;
  href?: string;
  btnwidth?: TailwindWidth;
  textSize?: TailwindWidth;
  colour?: string;
}

const CoolButton = ({
  btnLabel,
  href = "#",
  btnwidth = "s",
  textSize = "s",
  colour,
}: Props) => {
  return (
    <div>
      <Link href={href}>
        <button
          className={`py-3 px-3 w-${btnwidth} bg-[${colour}] text-white text-${textSize} font-semibold rounded-md shadow-md `}
        >
          {btnLabel}
        </button>
      </Link>
    </div>
  );
};

export default CoolButton;
