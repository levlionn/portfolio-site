import React from "react";
import Link from "next/link";

const MeMeSection = () => {
  return (
    <main className="flex flex-col mx-auto space-y-4">
      <h2 className="section-h2">Hi! It's Lev 👋 </h2>
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
        & share my personal ADHD-related journey via my newsletter.
      </p>
      <p>
        Read more{" "}
        <Link href="/about" className="font-bold">
          about me{" "}
        </Link>
        or keep scrolling!
      </p>
      <p>Thanks for dropping by,</p>
    </main>
  );
};

export default MeMeSection;
