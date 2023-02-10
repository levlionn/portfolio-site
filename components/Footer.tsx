import React from "react";
import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="">
      <div className="text-sm text-gray-500 sm:text-center">
        © {year} Lev Markelov. Made with love.
      </div>
    </footer>
  );
};

export default Footer;
