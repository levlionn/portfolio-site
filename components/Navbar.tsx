import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const FlyOutMenu = dynamic(() => import("../components/FlyOutMenu"), {
  ssr: false,
});

const navLinks = [
  {
    href: "/portfolio",
    text: "portfolio",
  },
  {
    href: "/about",
    text: "about",
  },
  {
    href: "/blog",
    text: "blog",
  },
  {
    href: "/contact",
    text: "contact",
  },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50  bg-goldCrayola shadow-lg text-white p-6 tablet:max-w-6xl mx-auto rounded-b-lg">
      <ul className="flex justify-between ">
        <div className="flex items-center">
          <li>
            <Link href="/" className="mr-2 font-black no-outline">
              levm
            </Link>
          </li>
        </div>
        {/* Page Links */}
        <div className="flex items-center justify-center space-x-2 cursor-pointer no-outline">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  link.href === path
                    ? "text-sm uppercase text-independence font-bold"
                    : "text-sm uppercase"
                }`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
