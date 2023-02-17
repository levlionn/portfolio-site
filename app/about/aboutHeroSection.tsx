import React from "react";
import Image from "next/image";

//images
import heroImage from "public/images/heroImage-compressed.jpg";

const AboutHeroSection = () => {
  return (
    <div className="flex flex-col my-10 laptop:pr-8 first:items-center">
      <div className="flex">
        <Image
          src={heroImage}
          height={250}
          width={250}
          alt="heroImage"
          className="rounded-lg"
          priority
        />
      </div>
      <div>
        <h1 className="section-h1">My story in 10 seconds</h1>
        <p className="text-gray-500 mb-4">
          My Mentality: Never stop working on yourself.
        </p>
        <p className="text-gray-500">
          I juggle a few hobbies: writing, coding, guitar, martial arts and
          gaming. I love diving into new challenges without knowing the path
          forward. In my 26 years of life, my biggest takaway is: comfort kills,
          life's too short, and live with intention. Yet, give yourself space to
          breathe and enjoy the moment – enjoy life.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
