import React from "react";
import Image, { StaticImageData } from "next/image";
import firstPic from "../../public/me-nobg.png";

const MeMeSection = () => {
  return (
    <div className="flex flex-col pt-10 space-y-5">
      <h2 className="text-4xl font-extrabold mb-2">My story</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        dolorum ullam expedita qui exercitationem quas doloribus illum,
        reprehenderit soluta, laboriosam, ratione ut necessitatibus repudiandae!
        Corporis et in alias quae. Sapiente!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        dolorum ullam expedita qui exercitationem quas doloribus illum,
        reprehenderit soluta, laboriosam, ratione ut necessitatibus repudiandae!
        Corporis et in alias quae. Sapiente!
      </p>
      <Image
        src={firstPic}
        width={356}
        height={50}
        alt="hello"
        className="rounded"
      />
    </div>
  );
};

export default MeMeSection;
