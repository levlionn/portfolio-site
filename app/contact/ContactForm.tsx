"use client";
import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
    setValue,
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
    <form onSubmit={handleSubmit(onSubmit)} className="border border-black">
      <input {...register("name")} type="text" name="name" placeholder="Name" />
      <input
        {...register("email")}
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        {...register("message")}
        name="message"
        placeholder="message"
      ></textarea>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? ""}
        onVerify={(token, ekey) => {
          setHCaptchaObject({ token, ekey });
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
