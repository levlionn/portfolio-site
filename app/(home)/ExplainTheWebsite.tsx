import React from "react";
import Image from "next/image";

import levTabletUpImage from "/public/images/me-nobg.png";

const ExplainTheWebsite = () => {
  return (
    <div className="relative w-full h-52 rounded-lg bg-goldCrayola flex justify-center items-center">
      <div className="flex-none absolute -top-24 right-12 h-24 w-24 tablet:h-32 tablet:w-32 tablet:-top-32">
        <Image src={levTabletUpImage} alt="lev" fill />
      </div>

      <div className="text-center">
        <p className="text-2xl font-semibold p-6  text-white">
          There is a lot to enjoy here 👀 So, let me be your guide! 🗺️ Grab your
          favourite drink, sit back, and let's explore 🧭
        </p>
      </div>
    </div>
  );
};

export default ExplainTheWebsite;

/**
 * bg border - full width
 * w-24 bottom-60 left-60 tablet:h-48 tablet:w-48 tablet:bottom-44 tablet:left-96 laptop:bottom-36
 *
 */
