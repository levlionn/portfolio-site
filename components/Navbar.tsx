"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

import CoolButton from "./CoolButton";

const FlyOutMenu = dynamic(() => import("../components/FlyOutMenu"), {
  ssr: false,
});

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };
  ``;
  return (
    <nav className="sticky top-0 z-50 flex items-start justify-between bg-goldCrayola shadow-lg text-white p-5 max-w-6xl rounded-b-lg mx-auto laptop:items-center">
      <div className="flex flex-row items-center space-x-1 cursor-pointer outline-none">
        <Link href="/" className="mr-2 font-black outline-none">
          levm
        </Link>
        <div className="invisible tablet:visible outline-none">
          <SocialIcon
            url="https://linkedin.com/in/levmarkelov"
            network="linkedin"
            label="Lev Markelov Linkedin Profile"
            fgColor="white"
            bgColor="transparent"
            target="_blank"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://github.com/levlionn"
            network="github"
            label="Lev Markelov Github Profile"
            fgColor="white"
            bgColor="transparent"
            target="_blank"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://youtube.com/levmarkelov"
            network="youtube"
            label="Lev Markelov YouTube Profile"
            fgColor="white"
            bgColor="transparent"
            target="_blank"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>
      {/* Pages */}
      <div className="flex flex-row items-center space-x-2 cursor-pointer">
        <Link href="/portfolio" className="text-sm uppercase">
          Portfolio
        </Link>
        <Link href="/about" className="text-sm uppercase">
          About
        </Link>
        <Link href="#" className="text-sm uppercase">
          Blog
        </Link>
        <div className="flex flex-row items-center text-bold">
          <Link href="/contact">
            <SocialIcon
              network="email"
              fgColor="white"
              bgColor="transparent"
              target="_blank"
              className="cursor-pointer"
              style={{ height: 25, width: 25 }}
            />
            <span className="hidden tablet:inline-flex text-xs uppercase">
              Lets Connect
            </span>
          </Link>
        </div>
      </div>

      {/* <div className="flex items-center">
        <button>
          <div className="space-y-2" onClick={toggleMenu}>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </button>
        <h3 className="ml-6 font-bold">
          <Link href="/">levm</Link>
        </h3>
      </div>

      <CoolButton
        href="/contact"
        btnLabel="Subscribe"
        colour="independence"
        textSize="xs"
      />
      {/* <ToggleActiveMode /> */}
      {/* {menuToggle && <FlyOutMenu isOpen={menuToggle} closeMenu={toggleMenu} />} */}
    </nav>
  );
};

export default Navbar;
