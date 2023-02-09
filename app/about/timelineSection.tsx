import React from "react";

//Data for timeline
const TIMELINE_DATA = [
  {
    header: "Started school",
    date: "Started January 23,2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.",
  },
  {
    header: "Got a job",
    date: "March 2022",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.",
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
      <h2 className="text-2xl font-black mb-4">Timeline</h2>
      <ol className="relative border-l border-gray-200">
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
