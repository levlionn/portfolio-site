import React from "react";
import Image from "next/image";

//images
import heroImage from "/images/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col my-10 items-center">
      <h1 className="text-5xl font-black mb-10 text-center">
        Innovate with code, captivate with copy
      </h1>

      {/* Image will go here */}
      <div className="my-4">
        <Image
          src="/images/heroImage.jpg"
          height={250}
          width={250}
          alt="heroImage"
          className="rounded-lg rotate-6"
        />
      </div>
    </div>
  );
};

export default HeroSection;
