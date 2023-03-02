import React from "react";
import { formatISO9075 } from "date-fns";
import Image from "next/image";

import imageONE from "public/images/lab2-1-compressed.jpg";
import imageTWO from "public/images/lab2-3-min.jpg";
import imageTHREE from "public/images/lab2-2-compressed.png";

const lastUpdated = formatISO9075(new Date(), {
  format: "extended",
  representation: "complete",
});
const SenecaStamp = () => (
  <>
    <p className="text-gray-800 my-4 font-semibold text-lg">
      Below is a showcase of all labs & assignments that I did for BTH645 during
      my 4th year at Seneca 2023.
    </p>
    <p className="text-gray-400 my-4">
      I declare that this is wholly my own work in accordance with Seneca
      Academic Policy. No part of this work has been copied manually or
      electronically from any other source (including web sites) or distributed
      to other students.
    </p>
    <hr />
    <div className="flex items-center justify-between my-2">
      <span className="text-gray-400">Lev Markelov | 031-431-158</span>

      <p className="text-gray-400">Last Modified {lastUpdated}</p>
    </div>
  </>
);

export default function SenecaBTHLab2() {
  return (
    <main className="min-h-screen mx-auto ">
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
        <h1 className="section-h1">Seneca BTH645 - Lab 2</h1>
        <SenecaStamp />
      </section>

      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">Images</h2>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <span>Stock Photo</span>
            <Image
              src={imageONE}
              height={200}
              width={200}
              alt="heroImage"
              className="rounded-lg"
            />
            <a
              href="https://elements.envato.com/cute-dog-behind-the-kitchen-table-YQUCN9X"
              className="text-xs text-gray-600 my-1"
              target="_blank"
            >
              View Original Source
            </a>
          </div>
          <div>
            <span>Edited Image</span>

            <Image
              src={imageTWO}
              height={200}
              width={200}
              alt="heroImage"
              className="rounded-lg"
            />
            <p className="text-xs text-gray-600 my-1">
              The original dog is too cute, it was time to give him some scary
              features. I added devil's horns, darkened the background, added a
              vignette, increased shadows, upped clarity and added 2 heart
              stickers (so not to make the dog too scary.)
            </p>
          </div>
          <div>
            <span>AI Generated</span>

            <Image
              src={imageTHREE}
              height={200}
              width={200}
              alt="heroImage"
              className="rounded-lg overflow-hidden"
            />

            <p className="text-xs text-gray-600 my-1">
              PROMPT: "cute dog behind the kitchen table with his head resting
              on the table facing forwards, pixel art style"
            </p>
            <p className="text-xs text-gray-600 my-1">
              Wanted to try using AI tools and was curious how hard it would be
              to recreate the original photo. I think it turned out really nice,
              and fairly accurate to the original. The pixel art style is a nice
              touch.
            </p>
          </div>
        </div>
      </section>
      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">5 Image Guidelines</h2>
        <div className="grid grid-cols-5 gap-5">
          <div>
            <h3 className="text-base font-semibold my-2">
              Optimize image size and resolution
            </h3>
            <p className="text-xs text-gray-600 text-justify">
              Large image files can slow down your website, so it's important to
              optimize the size and resolution of your images before uploading
              them. Aim for a file size of under 100KB, and use compression
              tools to reduce the size of your images without sacrificing
              quality.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold my-2">
              Use descriptive alt text
            </h3>
            <p className="text-xs text-gray-600 text-justify">
              Alt text is important for accessibility, as it provides a
              description of the image for users who are visually impaired or
              using assistive technologies. Make sure to use descriptive alt
              text that accurately describes the image, including any relevant
              keywords.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold my-2">
              Choose appropriate image format
            </h3>
            <p className="text-xs text-gray-600 text-justify">
              Different image formats are optimized for different types of
              images. For photographs, use JPEG format for high-quality images
              and PNG format for images with transparency. For graphics and
              icons, use SVG format for scalable vector images.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold my-2">
              Consider image placement
            </h3>
            <p className="text-xs text-gray-600 text-justify">
              The placement of your images can have a big impact on the user
              experience. Consider using images to break up long blocks of text,
              highlight important information, or provide visual interest. Avoid
              using too many images, which can make your website feel cluttered
              and overwhelming.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold my-2">
              Consider image placement
            </h3>
            <p className="text-xs text-gray-600 text-justify">
              When using images on your website, make sure you have permission
              to use them. This can include purchasing a license, using images
              that are licensed under Creative Commons, or creating your own
              images. Avoid using copyrighted images without permission, as this
              can result in legal issues.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
