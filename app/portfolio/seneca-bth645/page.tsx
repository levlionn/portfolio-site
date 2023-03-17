import Link from "next/link";
import React from "react";

import SenecaStamp from "@/components/SenecaTimeStamp";

const WEB_USABILITY_PRINCIPLES = [
  {
    title: "Navigation",
    desc: "I made sure to make my website easy to navigate. The navbar at the top displays all major pages, and the footer provides futher access into specific, nested pages. This makes it easier for the user to find what they are looking for. Additionally, I added some visual feedback by displaying the 'active' page the user is currently on by bolding that page link and changing its colour (footer).",
  },
  {
    title: "Loading Speed",
    desc: "This site is built using NextJS13, which allows for both SSR and CSR. This means that the whole website is pre-loaded once the user first arrives on the site. All navigation between pages becomes incredibly fast. This reduces the amount of time a user has to wait, improving user experience.",
  },
  {
    title: "Responsiveness",
    desc: "This website is responsive across four major breakpoints: mobile (min-width:390px), tablet (min-width: 640px), laptop (min-width: 1024px) and desktop (min-width: 1280px). Feel free to try it out using the inspector. By having a responsive site, the user can enjoy a smooth and consistent viewing experience across any device they use.",
  },
  {
    title: "Accessibility",
    desc: "I made sure to add descriptions to all my images used (alt text), font-sizes used are appropriate for each viewing screen and the HTML structure of the website is semantically proper so that screen readers can parse through it without a hitch.",
  },
  {
    title: "Clear CTAs",
    desc: "My website has a main CTA built into the footer. Since my aim with this site is to (a) show people who I am and (b) have people contact me for future work, I wanted to ensure that no matter which page a user lands on, at the bottom of it, they are reminded about reaching out to me. There is a clear yellow button that contrasts against the black, emphasizing its importance and giving users a clear indication on where to press.",
  },
  {
    title: "Content Clarity",
    desc: "The content across my website is clear, clean and concise. I don't add extra fluff, and try my best to give it plenty of room to breathe. I didn't want to overwhelm users, so I tried providing a balance of white-space, text and images.",
  },
  {
    title: "Error Prevention",
    desc: "My contact form is Spam-proof. I used hCaptcha for human verifiction, and set up a ton of edge case try-catches in order to ensure that my website will not be overrun by bots.",
  },
  {
    title: "Consistent Branding",
    desc: "I maintained consistent branding throughout my website, including logo, color scheme, and typography. This helps to reinforce my brand identity and build trust with your users.",
  },
  {
    title: "Visual Hierarchy",
    desc: "Using visual hierarchy, I prioritized important content on my website. This involved using contrasting colours, different font sizes, and spacing to guide users' attention to the most important parts of each page.",
  },
  {
    title: "User Testing",
    desc: "I conducted user testing by asking friends and family to navigate through the site and relay back their experience. By observing their actions, and listening to their feedback, I made necessary and important adjustments to the website for improved flow and user experience.",
  },
];

export default function SenecaBTHPage() {
  return (
    <main className="min-h-screen mx-auto ">
      <section className="section-y-spacing section-x-outer-margin-width max-w-6xl">
        <h1 className="section-h1">Seneca BTH645</h1>
        <SenecaStamp />
      </section>
      {/* 2 part section -- skill & projects */}

      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">Labs</h2>
        <Link
          href="/portfolio/seneca-bth645/lab2"
          target="_blank"
          className="underline"
        >
          View Lab 2
        </Link>
      </section>
      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">Assignments</h2>
        <Link
          href="/portfolio/seneca-bth645/assignment-1"
          target="_blank"
          className="underline"
        >
          View Assignment 1
        </Link>
      </section>
      <section className="section-y-spacing section-x-outer-margin-width laptop:basis-2/3 max-w-6xl">
        <h2 className="section-h2">Web Usability</h2>
        <p className="my-4">
          Note: This website was built as a way for me to get a job post-Seneca.
          If you navigate around the website, you will see my actual
          portfolio/skills/projects etc that I will be sending to recruiters;
          this isn't the only working page.
        </p>
        <div className="grid grid-cols-2 auto-rows-auto gap-4">
          {WEB_USABILITY_PRINCIPLES.map((i, index) => (
            <div key={index} className="text-justify">
              <h3 className="font-semibold text-lg">{i.title}</h3>
              <p className="text-gray-400 text-xs ">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
