import Image from "next/image";
import heroPic from "../public/me-nobg.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto w-full min-h-screen">
      <div className="mt-16">
        <div className="mb-4">
          <span className="bg-pink-100 text-pink-800 text-xs font-bold mr-2 px-2.5 py-1 rounded">
            Copywriter
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded">
            Developer
          </span>
        </div>
        <h1 className="flex-none text-5xl justify-center text-center font-extrabold">
          Lev Markelov
        </h1>
      </div>

      <div className="mt-2">
        <h2 className="flex-auto">Welcome to my portfolio.</h2>
      </div>

      <div className="mt-4 flex flex-row">
        <button className="bg-red-100 text-sm font-bold px-5 py-1 mr-2 rounded">
          Let's Chat
        </button>

        <button className="bg-red-100 text-sm font-bold px-5 py-1 rounded inline-flex items-center">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Resume</span>
        </button>
      </div>

      {/* <Image
        src={heroPic}
        alt="Picture of Lev Markelov"
        width={500}
        height={700}
        className=""
      /> */}

      <video autoPlay muted className="flex">
        <source src="../public/videos/robot.mp4" />
      </video>

      <div className="inline-block align-bottom">
        <div className="flex flex-col items-center">
          <svg
            className="fill-current w-4 h-4 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span className="text-sm text-gray-400 ">Scroll down</span>
        </div>
      </div>
    </main>
  );
}
