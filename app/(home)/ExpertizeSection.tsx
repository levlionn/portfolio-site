import React from "react";
import CoolButton from "@/components/CoolButton";

const ExpertizeSection = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-4xl font-extrabold my-4">My expertize</h2>
      <p className="my-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fuga
        eveniet dignissimos pariatur, facere itaque nemo repellendus voluptas
        odio, nesciunt, consequatur earum. Ut, nobis reprehenderit! Nulla
        asperiores enim repellendus deserunt?
      </p>

      <CoolButton btnLabel="CONNECT WITH ME" href="#" />
    </div>
  );
};

export default ExpertizeSection;
