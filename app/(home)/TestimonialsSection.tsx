import React from "react";

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col mb-32">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold my-4">
          Kind words from amazing people
        </h2>
        <p className="mb-4 md:mb-12 md:pb-0 text-gray-500">
          My mission is to create exceptional work that deliver results.
        </p>
      </div>

      <div className="flex flex-col text-center">
        <div>
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="overflow-hidden rounded-t-lg h-20 bg-red-400"></div>
            <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
            </div>
            <div className="pb-4 ">
              <p className="mt-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lev is a highly confident, well written, and sophisticated
                copywriter that is operating in a position he`s likely
                overqualified for but highly passionate about. He’s a clear top
                pick for me.
              </p>
            </div>
            <hr className="my-3" />
            <h4 className="text-xl font-semibold ">Tyler Mullins</h4>
            <div className="flex flex-row justify-center items-center ">
              <h4 className="text-sm text-gray-500 mr-2">CEO</h4>
              <span className="text-sm py-2 text-gray-500">@ Omni Agency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
