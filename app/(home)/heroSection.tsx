"use client";

import CoolButton from "@/components/CoolButton";
import React from "react";

import { useContext } from "react";
import { ModeContext } from "../../ModeContext";

const HeroSection = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="flex flex-col space-y-4 mb-60">
      <h3 className="mb-4">Hi! 👋 I'm Lev Markelov</h3>

      <h1 className="text-4xl font-extrabold mb-10">
        {mode === "copywriter" ? "ChatGPT, but in human form" : "ha"}
      </h1>

      <CoolButton btnLabel="Connect with me" btnwidth="md" />
    </div>
  );
};

export default HeroSection;