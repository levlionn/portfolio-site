"use client";

import { ModeContext } from "@/ModeContext";
import Image from "next/image";

import React, { useContext } from "react";

//images
import pencilsvg from "/public/svg/pencil.svg";
import computersvg from "/public/svg/computer.svg";

const ToggleActiveMode = () => {
  const { mode, setMode } = useContext(ModeContext);

  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-sm text-gray-500">
        HINT: Toggle to see my other side.{" "}
      </p>

      <div className="flex flex-col items-center">
        <button
          className="inline-flex border bg-gray-200 rounded-xl"
          onClick={() =>
            setMode(mode === "copywriter" ? "developer" : "copywriter")
          }
        >
          {/* Copywriter Button */}
          <div
            className={`px-2 py-1 rounded-lg ${
              mode === "copywriter"
                ? "bg-white/50 shadow border border-cinnabar"
                : ""
            }`}
          >
            <Image src={pencilsvg} alt="icon" width={20} height={20} />
          </div>
          {/* Dev Button */}
          <div
            className={`px-2 py-1 rounded-lg ${
              mode === "developer"
                ? "bg-white/50 shadow border border-etonBlue"
                : ""
            }`}
          >
            <Image src={computersvg} alt="icon" width={20} height={20} />
          </div>
          {/* Current mode UI */}
        </button>
        <div className="flex flex-row items-center pt-1">
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              mode === "copywriter" ? "bg-cinnabar" : "bg-etonBlue"
            }`}
          ></span>
          <span className="text-xs">{mode}</span>
        </div>
      </div>
    </div>
  );
};

export default ToggleActiveMode;
