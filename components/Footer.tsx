import React from "react";
import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" bg-independence text-white p-5 pt-10">
      <div className="text-sm text-white/50">
        © {year} Lev Markelov. Made with love.
      </div>
    </footer>
  );
};

export default Footer;
