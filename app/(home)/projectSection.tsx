import React from "react";

const ProjectSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-4">Some fun projects I worked on</h2>
      <p>Hint – Toggle between modes to see work related to each field.</p>
      <div className="flex flex-row items-center my-4">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        <span className="text-xs">Active Mode: Copywriter</span>
      </div>
    </div>
  );
};

export default ProjectSection;
