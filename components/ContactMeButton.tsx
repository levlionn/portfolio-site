import React from "react";
import CoolButton from "./CoolButton";

interface Props {
  colour: string;
}

const ContactMeButton = ({ colour }: Props) => {
  return (
    <div className="max-w-sm flex justify-center mx-auto">
      <div className="flex flex-col items-center p-6 space-y-3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden ">
        <h2 className="text-2xl font-black text-center">Got a project?</h2>
        <p className="text-center font-medium">
          I&apos;d love to hear from you! Drop me a message and let&apos;s bring
          it to life.
        </p>
        <CoolButton
          btnLabel="Get in touch!"
          href="/contact"
          btnwidth="s"
          textSize="md"
          colour={colour}
        />
      </div>
    </div>
  );
};

export default ContactMeButton;
