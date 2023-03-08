import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CoolButton from "./CoolButton";

const year = new Date().getFullYear();

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

const pageLinks = [
  {
    href: "/about",
    text: "about",
  },
  {
    href: "/portfolio/copywriter",
    text: "copywriter",
  },
  {
    href: "/portfolio/developer",
    text: "developer",
  },
];

const projectLinks = [
  {
    href: "/portfolio/copywriter/call-center-guys",
    text: "CCG",
  },
  {
    href: "/portfolio/copywriter/social-ink",
    text: "Social Ink",
  },
  {
    href: "/portfolio/copywriter/omni-agency",
    text: "Omni Agency",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const path = usePathname();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      viewport={{ once: true }}
      className="relative w-full text-white"
    >
      <motion.div className="relative w-full p-5 bg-independence/95">
        <motion.div className=" max-w-6xl mx-auto py-4">
          <h3 className="mb-4 font-black text-4xl laptop:text-6xl">
            Got a project? 🎉
          </h3>
          <p className="text-sm font-semibold">
            I&apos;d love to hear from you!
          </p>
          <p className="text-sm mb-4">
            Drop me a message and let&apos;s bring it to life.
          </p>
          <CoolButton
            btnLabel="Get in touch!"
            href="/contact"
            btnwidth="s"
            textSize="md"
            colour="goldCrayola"
          />
        </motion.div>
      </motion.div>
      <motion.div className="relative w-full p-5 bg-independence">
        <motion.div className="max-w-6xl mx-auto">
          <div className="grid auto-grid-auto grid-cols-3 gap-3 uppercase">
            <div className="flex">
              {socialLinks.map((item: any) => (
                <li key={item.url} className="list-none">
                  <SocialIcon
                    url={item.url}
                    network={item.network}
                    label={item.label}
                    fgColor="white"
                    bgColor="transparent"
                    target="_blank"
                    rel="noreferrer"
                    style={{ height: 25, width: 25 }}
                  />
                </li>
              ))}
            </div>

            <div className="grid auto-rows-auto">
              <p className="font-black text-lg">Projects</p>
              {/* Project Links */}

              {projectLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className={`${
                      link.href === path
                        ? "text-xs  text-goldCrayola font-bold"
                        : "text-xs "
                    }`}
                  >
                    {link.text}{" "}
                  </Link>
                </li>
              ))}
            </div>

            <div className="grid auto-rows-auto">
              <p className="font-black text-lg">Pages</p>
              {/* Page Links */}

              {pageLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className={`${
                      link.href === path
                        ? "text-xs  text-goldCrayola font-bold"
                        : "text-xs "
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <p className="absolute bottom-0 left-0 p-0.5 text-xs text-white/30">
            &copy; {year} Lev Markelov. Made with ❤
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
