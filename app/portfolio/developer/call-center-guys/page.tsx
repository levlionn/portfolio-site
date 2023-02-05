import mockPlaceholder2 from "/public/images/mock2.png";
import Image from "next/image";

export default function CallCenterGuysCaseStudyDeveloper() {
  return (
    <main className="container mx-auto">
      <div className="m-4">
        <div className="flex flex-col items-center">
          <Image src={mockPlaceholder2} alt="hi" className="fill" />

          <h1 className="text-4xl font-black text-center my-6">
            Building a custom website from scratch.
          </h1>
        </div>

        <hr />
        <div className="grid grid-cols-3 my-4">
          <div className="flex flex-col space-y-2">
            <div className="uppercase font-semibold text-gray-500 text-xs">
              Timeline
            </div>
            <div className=" text-gray-500 text-xs">March - April 2023</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="uppercase font-semibold text-gray-500 text-xs">
              Platform
            </div>
            <div className=" text-gray-500 text-xs">
              NextJS | Google Analytics
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="uppercase font-semibold  text-gray-500 text-xs">
              Role
            </div>
            <div className=" text-gray-500 text-xs">Copywriter | Developer</div>
          </div>
        </div>
        <hr />

        <h2 className="text-xl font-bold my-4">Introduction</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          sapiente tenetur nulla. Et, voluptate alias? Unde, perspiciatis
          maiores. Temporibus reprehenderit suscipit vero quia maiores quas?
          Odio doloribus modi natus nisi?
        </p>

        <h2 className="text-xl font-bold my-4">My Role</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          sapiente tenetur nulla. Et, voluptate alias? Unde, perspiciatis
          maiores. Temporibus reprehenderit suscipit vero quia maiores quas?
          Odio doloribus modi natus nisi?
        </p>

        <h2 className="text-xl font-bold my-4">Problem</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          sapiente tenetur nulla. Et, voluptate alias? Unde, perspiciatis
          maiores. Temporibus reprehenderit suscipit vero quia maiores quas?
          Odio doloribus modi natus nisi?
        </p>

        <h2 className="text-xl font-bold my-4">Results</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          sapiente tenetur nulla. Et, voluptate alias? Unde, perspiciatis
          maiores. Temporibus reprehenderit suscipit vero quia maiores quas?
          Odio doloribus modi natus nisi?
        </p>
      </div>
    </main>
  );
}
