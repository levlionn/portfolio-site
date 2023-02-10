import React from "react";
import Image from "next/image";

// import heroImage from "public/images/heroImage.jpg";

const AboutHeroSection = () => {
  return (
    <div className="flex flex-col my-10 laptop:pr-8 first:items-center">
      <div className="flex">
        <Image
          src="/images/heroImage.jpg"
          height={250}
          width={250}
          alt="heroImage"
          className="rounded-lg"
          priority
        />
      </div>
      <div>
        <h1 className="text-5xl font-black my-6">About me in 10 seconds</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dignissimos rem similique, enim reiciendis autem veniam, quod labore
          deleniti temporibus atque et alias suscipit explicabo? Laboriosam quis
          tempore voluptate odio.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
