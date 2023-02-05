"use client";

import ToggleActiveMode from "./ToggleActiveMode";
import FlyOutMenu from "./FlyOutMenu";

import { useState } from "react";
import CoolButton from "./CoolButton";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  return (
    <div className="flex justify-between py-6 items-center sticky w-full top-0 z-50 bg-white px-4">
      <div className="flex items-center" onClick={toggleMenu}>
        <button>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </button>
        <h3 className="ml-6 font-bold">levm</h3>
      </div>

      <CoolButton
        href="#"
        btnLabel="Subscribe"
        colour="independence"
        textSize="xs"
      />
      {/* <ToggleActiveMode /> */}
      {menuToggle && <FlyOutMenu closeMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;
