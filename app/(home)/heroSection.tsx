import React from "react";
import Image from "next/image";

//images
import heroImage from "public/images/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col my-10 items-center">
      <h1 className="text-5xl font-black mb-10 text-center">
        Innovate with <span className="text-etonBlue">code</span>, captivate
        with <span className="text-cinnabar">copy</span>
      </h1>

      {/* Image will go here */}
      <div className="my-4">
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
