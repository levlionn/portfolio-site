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
        <p className="text-gray-500">
          <span className="font-bold">My mentality: </span>Never stop working on
          yourself – daily 1% improvements.
        </p>
        <p className="text-gray-500 my-2">
          I'm a passionate and adventurous person with a variety of interests,
          including writing, coding, playing guitar, practicing martial arts,
          and gaming. I thrive on taking on new challenges, even when the path
          forward is uncertain.
        </p>
        <p className="text-gray-500 my-2">
          Over the course of my 26 years, I've learned that comfort can be a
          trap, and life is too short to not live with intention. That said, I
          also believe in giving myself space to breathe and enjoy the moment,
          and I try to make the most of every opportunity to savour the joys of
          life.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
