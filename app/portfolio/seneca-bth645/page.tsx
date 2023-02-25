import React from "react";

export default function SenecaBTHPage() {
  return (
    <main className="min-h-screen mx-auto ">
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
        <h1 className="section-h1">Seneca BTH645</h1>
        <p className="text-gray-800 my-4">
          Below is a showcase of all labs & assignments that I did for BTH645
          during my 4th year at Seneca 2023.
        </p>
      </section>
      {/* 2 part section -- skill & projects */}

      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">Labs</h2>
        <div>Lab 2 will go here</div>
      </section>
      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">Assignments</h2>
        <div>Assignment 1 will go here</div>
      </section>
    </main>
  );
}
