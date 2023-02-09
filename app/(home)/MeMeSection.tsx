import React from "react";
import Image from "next/image";

//images
import signature from "@/public/images/Lev-Signature.png";
import Link from "next/link";

const MeMeSection = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col space-y-5">
        <h2 className="text-3xl font-extrabold mb-2">Hi! It's Lev 👋 </h2>
        <p>
          Welcome to my slice of the internet – I hope you find something useful
          here.
        </p>
        <p>
          I{" "}
          <Link href="/portfolio/developer" className="font-bold">
            develop{" "}
          </Link>{" "}
          frontend applications,{" "}
          <Link href="/portfolio/copywriter" className="font-bold">
            copywrite{" "}
          </Link>{" "}
          & share self-improvement insights via my newsletter.
        </p>
        <p>
          Read more{" "}
          <Link href="/about" className="font-bold">
            about me{" "}
          </Link>
          or keep scrolling!
        </p>
        <p>Thanks for dropping by,</p>
        <Image
          src={signature}
          alt="Lev Markelov Signature"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
};

export default MeMeSection;
