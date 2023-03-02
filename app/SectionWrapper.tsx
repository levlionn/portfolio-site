"use client";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 15 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export const SectionWrapper = ({ children }: any) => (
  <>
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ delay: 0.25 }}
    >
      {children}
    </motion.main>
  </>
);
