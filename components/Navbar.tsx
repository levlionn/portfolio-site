import dynamic from "next/dynamic";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
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

const socialLinks = [
  {
    url: "https://linkedin.com/in/levmarkelov",
    network: "linkedin",
    label: "Lev Markelov Linkedin Profile",
  },
  {
    url: "https://github.com/levlionn",
    network: "github",
    label: "Lev Markelov Github Profile",
  },
  {
    url: "https://youtube.com/",
    network: "youtube",
    label: "Lev Markelov YouTube Profile",
  },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50  bg-goldCrayola shadow-lg text-white p-5 max-w-6xl rounded-b-lg mx-auto">
      <ul className="flex justify-between items-center tablet:section-x-outer-margin-width">
        <div className="flex items-center space-x-1 cursor-pointer no-outline">
          <li>
            <Link href="/" className="mr-2 font-black no-outline">
              levm
            </Link>
          </li>
          <div className="flex invisible tablet:visible outline-none">
            {socialLinks.map((item) => (
              <li key={item.url}>
                <SocialIcon
                  url={item.url}
                  network={item.network}
                  label={item.label}
                  fgColor="white"
                  bgColor="transparent"
                  target="_blank"
                  style={{ height: 25, width: 25 }}
                />
              </li>
            ))}
          </div>
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
