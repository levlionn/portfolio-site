import React from "react";

const PulsatingCircles = () => {
  return (
    <div>
      <div className="absolute border border-cinnabar rounded-full h-48 w-48 animate-ping" />
      <div className="absolute border border-pinkLace rounded-full h-42 w-42 animate-ping" />
      <div className="absolute border border-pinkLace rounded-full h-40 w-40 animate-ping" />
      <div className="absolute border border-goldCrayola rounded-full h-48 w-48 animate-ping" />
    </div>
  );
};

export default PulsatingCircles;
