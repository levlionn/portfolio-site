import React from "react";
import Image from "next/image";

import levTabletUpImage from "/public/images/me-nobg.png";

const GuideSection = () => {
  return (
    <div className="bg-independence laptop:rounded-lg max-w-6xl mx-auto">
      <p className="section-x-inner-margin-width text-center py-6 text-white text-xl laptop:text-2xl tracking-wide font-bold">
        There is a lot to enjoy here 👀 So, let me be your guide! 🗺️ Grab your
        favourite drink, sit back, and let's explore 🧭
      </p>
    </div>
  );
};

export default GuideSection;
