import React from "react";
import Link from "next/link";

type NavLink = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
