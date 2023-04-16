"use client";
import React, { useState, useEffect } from "react";
import SenecaStamp from "@/components/SenecaTimeStamp";
import dynamic from "next/dynamic";

const PongGame = dynamic(() => import("@/components/PongGame"), {
  ssr: false,
});

export default function SenecaBTHAssignment3() {
  const [code, setCode] = useState("");
  useEffect(() => {
    fetch("/api/pongGameCode")
      .then((response) => response.json())
      .then((data) => setCode(data.code));
  }, []);
  return (
    <main className="min-h-screen mx-auto ">
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
        <h1 className="section-h1">Seneca BTH645 - Assignment #3</h1>
        <p>
          This Pong game is a simple animation developed using p5.js, Next.js
          13, TypeScript, and Tailwind CSS. The game features a ball that
          bounces off the paddles, as well as the top/bottom of the canvas. The
          game is played automatically by "bots" – with a running counter of
          each pass completed.
        </p>
        <SenecaStamp />
        <PongGame /> {/* Include the PongGame component */}
        <h2 className="section-h2">PongGame.tsx with comments</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto max-w-full">
          <code className="whitespace-pre-wrap">{code}</code>
        </pre>
      </section>
    </main>
  );
}
