"use client";
import React from "react";
import Image from "next/image";

//images
import heroImage from "public/images/heroImage-compressed.jpg";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: 15 },
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <motion.p
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ delay: 0.5 }}
          className="text-3xl tablet:text-5xl font-black"
        >
          innovate with <span className="text-etonBlue">code</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="text-3xl tablet:text-5xl font-black ml-6"
        >
          captivate with <span className="text-cinnabar">copy</span>
        </motion.p>
      </div>

      <div className="my-8">
        <Image
          src={heroImage}
          height={250}
          width={250}
          alt="heroImage"
          className="rounded-lg rotate-6"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
