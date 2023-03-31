import React from "react";
import Image from "next/image";
import SenecaStamp from "@/components/SenecaTimeStamp";

export default function SenecaBTHAssignment2() {
  return (
    <main className="min-h-screen mx-auto ">
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
        <h1 className="section-h1">Seneca BTH645 - Assignment #2</h1>
        <SenecaStamp />
      </section>

      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">VIDEO</h2>
        <iframe
          width="470"
          height="315"
          className="my-8"
          src="https://www.youtube.com/embed/n7fqkMYKWRM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>

      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">
          <a
            href="https://docs.google.com/document/d/1fjOO2nwrrihwdYFIPif93U7xRZjQDu8UiFf6i7kK9Sk/edit?usp=sharing"
            target="_blank"
          >
            CLICK TO VIEW SCRIPT
          </a>
        </h2>
        <p>
          <span className="font-semibold">Actor: </span>Alex Cucos
        </p>
        <p>
          <span className="font-semibold">Editor & Camera: </span>Lev Markelov
        </p>
        <p>
          <span className="font-semibold">Equipment Used: </span>iPhone13 Pro
          Max, Rode Mic Wireless GO II, Descript, iMovie & VoiceMemos (software
          for editing & sound)
        </p>
        <ul className="text-gray-800 my-4">
          <span className="font-bold">Our Process </span>
          <li className="my-3">1️⃣ Collaborated on writing the script.</li>
          <li className="my-3">
            2️⃣ Generated a rough shot list based on our script, booked Sandbox &
            figured out wardrobe.
          </li>
          <li className="my-3">
            3️⃣ Filmed & recorded the video @ Seneca Sandbox.
          </li>
          <li className="my-3">
            4️⃣ Edited via Descript, published to YouTube & updated portfolio
            websites.
          </li>
        </ul>
      </section>
    </main>
  );
}
