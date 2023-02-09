"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 p-5 flex items-center justify-between max-w-7xl mx-auto bg-white">
      <div className="flex items-center">
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
      {menuToggle && <FlyOutMenu isOpen={menuToggle} closeMenu={toggleMenu} />}
    </header>
  );
};

export default Navbar;
