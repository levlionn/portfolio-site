"use client";

import ToggleActiveMode from "./ToggleActiveMode";
import FlyOutMenu from "./FlyOutMenu";

import { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  return (
    <div className="flex justify-between py-10 items-center sticky top-0 z-50 bg-white">
      <div className="flex items-center" onClick={toggleMenu}>
        <button>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </button>
        <h3 className="ml-6 font-bold">levm</h3>
      </div>

      <ToggleActiveMode />
      {menuToggle && <FlyOutMenu closeMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;
