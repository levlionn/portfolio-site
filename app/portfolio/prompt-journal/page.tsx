import React from "react";
import Image from "next/image";
import { SectionWrapper } from "@/app/SectionWrapper";

import PromptHeroImage from "/public/images/promptJournalHeroImage.jpg";
import boxImage from "/public/images/PJ_magicHat.png";

export default function PromptJournal() {
  return (
    <SectionWrapper>
      <main className="min-h-screen mx-auto">
        <section className="flex flex-col section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <div className="flex justify-between text-independence text-sm">
            <h1 className="">👋 Welcome To The Future</h1>
            <div>Search Prompts...</div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="flex flex-col section-y-spacing">
          <div className="relative w-full h-80 ">
            <Image
              src={PromptHeroImage}
              alt="Prompt Journal Hero Image"
              fill
              className="absolute z-0 object-cover opacity-70"
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-end py-5 section-x-outer-margin-width">
              <h1 className="text-black font-black text-3xl w-60">
                Become a Prompt Hacker
              </h1>
              <button className="bg-independence text-white px-4 py-2 rounded w-fit mt-4 text-sm shadow-lg">
                Learn The Basics
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <h3 className="text-xl font-bold">Jump Right Into It</h3>
          <p className="text-gray-500 font-sm my-2">
            Looking for a specific use-case? Below are popular ways to utilize
            GPT-4 in various domains.
          </p>
          <div className="grid grid-cols-2 gap-4 laptop:grid-cols-4">
            {[
              { title: "Storytelling", image: boxImage },
              { title: "Coding", image: boxImage },
              { title: "Design", image: boxImage },
              { title: "Branding", image: boxImage },
            ].map(({ title, image }, index) => (
              <div key={index}>
                <h4 className="text-black font-semibold text-md my-2 border-b-4 border-independence/50 w-fit">
                  {title}
                </h4>
                <div className="relative w-full h-48 shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300 ">
                  <Image
                    src={image}
                    alt={`${title} Image`}
                    fill
                    className="absolute z-0 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ADHD Section */}
        <section className="flex flex-col section-y-spacing section-x-outer-margin-width max-w-6xl mx-auto">
          <h2 className="text-black font-black text-3xl">Prompting For ADHD</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative w-full h-80">
              <Image
                src={boxImage}
                alt="ADHD Image"
                fill
                className="absolute z-0 object-contain"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Become SuperHuman</h3>
                <p className="text-gray-500 font-sm my-4">
                  As someone who has struggled with ADHD, I know first-hand how
                  challenging daily tasks can be. Supercharge your productivity,
                  stay organized and tackle your tasks with these ADHD-friendly
                  prompts.
                </p>
                <button className="bg-independence text-white px-4 py-2 rounded w-fit text-sm shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SectionWrapper>
  );
}
