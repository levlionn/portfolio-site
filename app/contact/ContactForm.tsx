"use client";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useForm, SubmitHandler } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { HCAPTCHA_SITEKEY } from "@/constants";

export interface FormData {
  name: string;
  email: string;
  message: string;
}
export interface HCaptchaObject {
  token: string;
  ekey: string;
}

const ContactForm = () => {
  const [hCaptchaObject, setHCaptchaObject] = useState<HCaptchaObject | null>(
    null
  );

  //modal state
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (hCaptchaObject) {
      fetch("/api/form-submission", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, ...hCaptchaObject }),
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-auto w-fit space-y-2"
    >
      <input
        required
        {...register("name")}
        type="text"
        name="name"
        placeholder="Name"
        minLength={1}
        maxLength={49}
        className="contact-input"
      />
      <input
        required
        {...register("email")}
        type="email"
        name="email"
        placeholder="Email"
        minLength={1}
        maxLength={69}
        className="contact-input"
      />

      <textarea
        required
        {...register("message")}
        name="message"
        placeholder="message"
        minLength={1}
        maxLength={420}
        className="contact-input"
      ></textarea>

      <HCaptcha
        sitekey={HCAPTCHA_SITEKEY ?? ""}
        onVerify={(token, ekey) => {
          setHCaptchaObject({ token, ekey });
        }}
      />

      <button
        type="submit"
        onClick={() => {
          setIsOpen(true);
        }}
        className="bg-etonBlue py-4 px-6 rounded-md text-white font-bold"
      >
        Submit
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Submission Successful 🥳
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Thank you for reaching out! Check your inbox soon for an
                      email from me!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-goldCrayola px-4 py-2 text-sm text-white font-semibold hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:indepedence/90 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </form>
  );
};

export default ContactForm;
