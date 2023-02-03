import CoolButton from "@/components/CoolButton";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col space-y-4 mb-60">
      <h3 className="mb-4">Hi! 👋 I'm Lev Markelov</h3>

      <h1 className="text-4xl font-extrabold mb-10 ">
        ChatGPT, but in human form
      </h1>

      <CoolButton
        btnLabel="Connect with me"
        href="#"
        btnwidth="s"
        textSize="s"
      />
    </div>
  );
};

export default HeroSection;
