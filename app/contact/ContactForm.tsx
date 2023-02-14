"use client";
import React, { useState } from "react";

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
      className="flex flex-col mx-auto space-y-2"
    >
      <input
        {...register("name")}
        type="text"
        name="name"
        placeholder="Name"
        maxLength={49}
        className="contact-input"
      />
      <input
        {...register("email")}
        type="email"
        name="email"
        placeholder="Email"
        maxLength={69}
        className="contact-input"
      />

      <textarea
        {...register("message")}
        name="message"
        placeholder="message"
        maxLength={420}
        className="contact-input"
      ></textarea>
      <HCaptcha
        sitekey={HCAPTCHA_SITEKEY ?? ""}
        onVerify={(token, ekey) => {
          setHCaptchaObject({ token, ekey });
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
