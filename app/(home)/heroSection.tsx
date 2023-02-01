import CoolButton from "@/components/CoolButton";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-full relative flex flex-col justify-start pt-10">
      <h3 className="mb-4">Hi! 👋 I'm Lev Markelov</h3>

      <h1 className="text-4xl font-extrabold mb-10 ">
        ChatGPT, but in human form
      </h1>

      <CoolButton btnLabel="See my work" />

      <span className="absolute bottom-0 left-0 right-0 text-center">
        scroll down
      </span>
    </div>
  );
};

export default HeroSection;
