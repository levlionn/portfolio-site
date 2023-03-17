import { formatISO9075 } from "date-fns";

const SenecaStamp = () => {
  const lastUpdated = formatISO9075(new Date(), {
    format: "extended",
    representation: "complete",
  });
  return (
    <div>
      <p className="text-gray-800 my-4 font-semibold text-lg">
        Below is a showcase of my lab or assignment that I did for BTH645 during
        my 4th year at Seneca 2023.
      </p>
      <p className="text-gray-400 mt-4">
        I declare that this is wholly my own work in accordance with Seneca
        Academic Policy. No part of this work has been copied manually or
        electronically from any other source (including web sites) or
        distributed to other students.
      </p>
      <div className="flex items-center justify-between my-2">
        <span className="text-gray-400">Lev Markelov | 031-431-158</span>

        <p className="text-gray-400">Last Modified {lastUpdated}</p>
      </div>
    </div>
  );
};

export default SenecaStamp;
