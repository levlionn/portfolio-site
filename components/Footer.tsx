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

const footerLinks = [
  {
    href: "/portfolio/copywriter",
    text: "copywriter",
  },
  {
    href: "/portfolio/developer",
    text: "developer",
  },
  {
    href: "/about",
    text: "about",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const path = usePathname();

  return (
    <motion.footer>
      <motion.div
        className="relative w-full  bg-gradient-to-br from-independence to-independence/90 text-white p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="border border-gray-100 w-fit p-5 rounded-lg shadow-lg">
            <h3 className="mb-4 font-black text-5xl laptop:text-6xl">
              Got a project?
            </h3>
            <p className="text-sm my-4">
              I&apos;d love to hear from you! Drop me a message and let&apos;s
              bring it to life.
            </p>
            <CoolButton
              btnLabel="Get in touch!"
              href="/contact"
              btnwidth="s"
              textSize="md"
              colour="goldCrayola"
            />
          </div>
          <div className="my-6 grid auto-grid-auto grid-cols-3 gap-6 uppercase">
            <div>
              {socialLinks.map((item: any) => (
                <li key={item.url} className="list-none">
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

            <div className="grid auto-rows-auto">
              <p className="font-black text-lg">Projects</p>

              <Link
                href="portfolio/copywriter/call-center-guys"
                className="text-sm"
              >
                CCG
              </Link>
              <Link href="portfolio/copywriter/social-ink" className="text-sm">
                Social Ink
              </Link>
              <Link href="portfolio/copywriter/omni-agency" className="text-sm">
                Omni Agency
              </Link>
            </div>
            <div className="grid auto-rows-auto">
              <p className="font-black  text-lg">Pages</p>
              {/* Page Links */}

              {footerLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className={`${
                      link.href === path
                        ? "text-sm  text-goldCrayola font-bold"
                        : "text-sm "
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <p className="absolute bottom-0 pb-2 text-xs text-white/50">
            &copy; {year} Lev Markelov. Made with ❤️
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
