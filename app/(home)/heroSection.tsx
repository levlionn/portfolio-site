import React from "react";
import Image from "next/image";

//images
import heroImage from "public/images/heroImage-compressed.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <p className="text-3xl tablet:text-5xl font-black">
          innovate with <span className="text-etonBlue">code</span>
        </p>
        <p className="text-3xl tablet:text-5xl font-black ml-6">
          captivate with <span className="text-cinnabar">copy</span>
        </p>
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
