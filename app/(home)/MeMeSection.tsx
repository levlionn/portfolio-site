import React from "react";
import Image from "next/image";

//images
import signature from "@/public/images/Lev-Signature.png";

const MeMeSection = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h2 className="text-3xl font-extrabold mb-2">Hi! It's Lev 👋 </h2>
      <p>
        Welcome to my slice of the internet – I hope you find something useful
        here.
      </p>
      <p>
        I <strong className="font-black">develop</strong> frontend applications,{" "}
        <strong className="">copywrite</strong> & share my knowledge across the
        web.
      </p>
      <p>
        Read more <strong className="">about me</strong> or keep scrolling!
      </p>
      <p>Thanks for dropping by,</p>
      <Image
        src={signature}
        alt="Lev Markelov Signature"
        width={75}
        height={75}
      />
    </div>
  );
};

export default MeMeSection;
