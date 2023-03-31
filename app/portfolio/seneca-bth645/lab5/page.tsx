"use client";
import React from "react";
import { formatISO9075 } from "date-fns";
import dynamic from "next/dynamic";
import Image from "next/image";

import { sketch } from "@/components/Sketch";

import ss from "/public/images/lab5-screenshot-sketch.png";

const P5Wrapper = dynamic(() => import("@/components/P5Wrapper"), {
  ssr: false,
});

const lastUpdated = formatISO9075(new Date(), {
  format: "extended",
  representation: "complete",
});

const SenecaStamp = () => (
  <>
    <p className="text-gray-800 my-4 font-semibold text-lg">
      Below is a showcase of all labs & assignments that I did for BTH645 during
      my 4th year at Seneca 2023.
    </p>
    <p className="text-gray-400 my-4">
      I declare that this is wholly my own work in accordance with Seneca
      Academic Policy. No part of this work has been copied manually or
      electronically from any other source (including web sites) or distributed
      to other students.
    </p>
    <hr />
    <div className="flex items-center justify-between my-2">
      <span className="text-gray-400">Lev Markelov | 031-431-158</span>

      <p className="text-gray-400">Last Modified {lastUpdated}</p>
    </div>
  </>
);

export default function SenecaBTHLab5() {
  return (
    <main className="min-h-screen mx-auto ">
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
        <h1 className="section-h1">Seneca BTH645 - Lab 5</h1>
      </section>

      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4">Lab 5 - p5.js Drawing</h2>
        <SenecaStamp />

        <div className="flex-col space-y-4">
          <div className="flex-col ">
            <h2 className="font-semibold text-lg">The Invention of Gravity</h2>
            <p className="text-gray-400">All it took was an apple.</p>
          </div>

          <P5Wrapper sketch={sketch} />
          <div>
            <div className="flex-col ">
              <h2 className="font-semibold text-lg">Sketch.ts</h2>
              <p className="text-gray-400">
                {" "}
                Using NextJS13,Tailwind & Typescript
              </p>
            </div>

            <Image
              src={ss}
              alt={"lab5 image"}
              height={400}
              width={600}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
