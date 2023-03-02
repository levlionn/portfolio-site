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
    href: "/portfolio",
    text: "portfolio",
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
        className="relative  w-full bg-gradient-to-bl from-independence to-independence/90 text-white p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        <h3 className="section-h2 laptop:section-h1">Got a project?</h3>
        <p className="text-sm my-2">
          I&apos;d love to hear from you! Drop me a message and let&apos;s bring
          it to life.
        </p>
        <CoolButton
          btnLabel="Get in touch!"
          href="/contact"
          btnwidth="s"
          textSize="md"
          colour="goldCrayola"
        />
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
            <p className="font-bold  text-lg">Projects</p>
            <Link href="portfolio/copywriter/call-center-guys">CCG</Link>
            <Link href="portfolio/copywriter/social-ink">Social Ink</Link>
          </div>
          <div className="grid auto-rows-auto">
            <p className="font-bold  text-lg">Pages</p>
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

        <p className="absolute bottom-0 left-0 p-2 text-xs text-white/50">
          &copy; {year} Lev Markelov. Made with ❤️
        </p>
      </motion.div>
    </motion.footer>
  );
}
