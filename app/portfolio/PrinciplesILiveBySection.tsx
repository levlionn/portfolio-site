import React from "react";

const copywriterPrinciples = [
  {
    principleHeader: "Have empathy towards the reader",
    principleBody:
      "I place myself in the shoes of the audience member; to understand their needs, wants and motivations to create copy that resonates and inspires action.",
  },
  {
    principleHeader: "Write clear, clean & concise copy",
    principleBody:
      "My copy is easy to understand, illustrates a well-defined message and guides readers to where they need to go.",
  },
  {
    principleHeader: "Always provide value",
    principleBody:
      "Whether educational, entertainment or persuasive, the end result must always be the same – communivate the benefits, and incentivize actions.",
  },
];

const PrinciplesILiveBySection = () => {
  return (
    <div>
      <h2 className="text-2xl font-black">Principles I live by</h2>

      <div className="mt-4">
        {copywriterPrinciples.map((principle, index) => {
          return (
            <div key={index} className="mb-4">
              <h3 className="text-xl text-bold mb-4">
                {principle.principleHeader}
              </h3>
              <p className="text-gray-500 text-base">
                {principle.principleBody}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrinciplesILiveBySection;
