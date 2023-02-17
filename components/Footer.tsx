import React from "react";
import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" bg-independence text-white p-5 pt-10">
      <div className="text-sm text-white/50 max-w-6xl mx-auto">
        © {year} Lev Markelov. Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
