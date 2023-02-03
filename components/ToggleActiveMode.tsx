"use client";

import React from "react";
import { useState } from "react";

const ToggleActiveMode = () => {
  const [mode, setMode] = useState("copywriter");

  return (
    <div>
      <ul className="flex flex-col items-center">
        <div className="p-1 inline-flex border bg-gray-200 rounded-xl ">
          {/* Copywriter Button */}
          <button
            className={`px-2 py-1 rounded-lg ${
              mode === "copywriter" ? "bg-white shadow" : ""
            }`}
            onClick={() => setMode("developer")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          {/* Dev Button */}
          <button
            className={`px-2 py-1 rounded-lg ${
              mode === "developer" ? "bg-white shadow" : ""
            }`}
            onClick={() => setMode("copywriter")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </button>
          {/* Current mode UI */}
        </div>
        <div className="flex flex-row items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-xs">{mode}</span>
        </div>
      </ul>
    </div>
  );
};

export default ToggleActiveMode;
