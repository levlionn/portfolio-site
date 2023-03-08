import React from "react";

//Data for timeline
const TIMELINE_DATA = [
  {
    header: "Finished Highschool",
    date: "2014",
    body: "Went to A.Y Jackson, where my focus was on music, maths, and sport.",
  },
  {
    header: "Pursued Acting",
    date: "2015",
    body: "Worked as a background extra, stunt performer, secondary-director, gaffer, camera operator, and commercial actor. See me on Netflix.",
  },
  {
    header: "Became a Bartender",
    date: "2016",
    body: "Became a part-time psychologist for the local bar patrons. Worked at dive bars, private events, and fancy restaurants. Care for a Negroni?",
  },
  {
    header: "Started My Degree",
    date: "2019",
    body: "I have a passion for creative pursuits & problem-solving. Getting in software development felt like the perfect mix of the two.",
  },
  {
    header: "Started a Marketing Agency",
    date: "2019",
    body: "Covid hit and everything/everyone went online. I saw a need for digital marketing services to help local business adapt. Grew a creative team of 7, and serviced many great clients.",
  },
  {
    header: "Became a Freelancer",
    date: "2022",
    body: "Combining my passion for coding & writing – I now offer services across both disciplines for brands that need help with their online presence.",
  },
  {
    header: "????",
    date: "2023+",
    body: "Looking for more opportunities to connect with amazing people, work on cool projects & expand my skillsets.",
  },
];

interface Props {
  header: string;
  date: string;
  body: string;
}

const TimelineItem = ({ header, date, body }: Props) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-blue-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
        {header}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {date}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500">{body}</p>
    </li>
  );
};

const TimelineSection = () => {
  return (
    <div>
      <h2 className="section-h2">Timeline</h2>
      <p className="text-gray-500 mb-4">Summary of events</p>

      <ol className="relative border-l border-gray-200 ">
        {TIMELINE_DATA.map((i, index) => {
          return (
            <TimelineItem
              header={i.header}
              date={i.date}
              body={i.body}
              key={index}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TimelineSection;
