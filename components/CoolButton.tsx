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
    <Link href={href} className="my-4">
      <button
        className={`py-2 px-2 w-${btnwidth} bg-${colour} text-white text-${textSize} font-semibold rounded-md shadow-md leading-relaxed `}
      >
        {btnLabel}
      </button>
    </Link>
  );
};

export default CoolButton;
