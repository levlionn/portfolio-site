"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import flyoutCloseIcon from "/public/svg/flyout-close.svg";

//closeMenu is a callback function

//images
import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";

import chevronDown from "/public/svg/chevron-down.svg";

interface Props {
  closeMenu: () => void;
  isOpen: boolean;
}
const FlyOutMenu = ({ closeMenu }: Props) => {
  const [toggleDrop, setToggleDrop] = useState(false);
  console.log(toggleDrop);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-white">
      <div className="flex flex-col h-full justify-center items-center text-center space-y-10">
        <div>
          <Image
            src={flyoutCloseIcon}
            alt="icon"
            width={20}
            height={20}
            onClick={closeMenu}
          />
        </div>

        <div className="text-3xl space-y-8 ">
          <div onClick={closeMenu}>
            <Link href="/">Home</Link>
          </div>
          <div onClick={closeMenu}>
            <Link href="/about">My Story</Link>
          </div>
          <div>
            <div onClick={() => setToggleDrop(!toggleDrop)}>Portfolio</div>
          </div>

          {toggleDrop ? (
            <ul className="flex flex-col items-center space-y-4">
              <div className="text-sm text-black flex flex-row">
                <Image
                  src={pencilsvg}
                  alt="icon"
                  width={15}
                  height={15}
                  className="mr-2"
                />
                <Link href="/portfolio/copywriter" onClick={closeMenu}>
                  Copywriter
                </Link>
              </div>
              <div className="text-sm text-black flex flex-row">
                <Image
                  src={computersvg}
                  alt="icon"
                  width={15}
                  height={15}
                  className="mr-2"
                />
                <Link href="/portfolio/developer" onClick={closeMenu}>
                  Developer
                </Link>
              </div>
            </ul>
          ) : (
            ""
          )}

          <div onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>social media icons</div>
      </div>
    </div>
  );
};

export default FlyOutMenu;
