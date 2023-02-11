// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { FormData, HCaptchaObject } from "@/app/contact/ContactForm";

const MAX_FIELD_LENGTH = 10000;
const TO_ADDRESS = "lev@levm.me";
const FROM_ADDRESS = "send@sendgrid.com";

type ResponseData = { success: true } | { success: false; errMsg: string };

type VerifiedFormData = FormData & HCaptchaObject;

const send = (data: unknown) => {
  console.log(data);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, errMsg: "Incorrect HTTP method." });
    return;
  }

  // Ensure all required fields are present at runtime. (basically, we are making sure that each field inside the req.body is a string, if not, return false.)
  const requiredFields: (keyof VerifiedFormData)[] = [
    "name",
    "email",
    "message",
    "token",
    "ekey",
  ];

  const invalid = requiredFields.some(
    (field) => typeof req.body[field] === "string"
  );

  if (invalid) {
    return res.status(400).json({
      success: false,
      errMsg: "Required fields are missing",
    });
  }

  //truncate form input fields
  const { name, email, message, token, ekey }: VerifiedFormData = req.body;

  const truncatedName = name.substring(0, MAX_FIELD_LENGTH);
  const truncatedEmail = email.substring(0, MAX_FIELD_LENGTH);
  const truncatedMessage = message.substring(0, MAX_FIELD_LENGTH);
  const truncatedToken = token.substring(0, MAX_FIELD_LENGTH);
  const truncatedEkey = ekey.substring(0, MAX_FIELD_LENGTH);

  try {
    await send({
      to: TO_ADDRESS,
      from: FROM_ADDRESS,
      subject: "Contact Form Requeset [levm]",
      html: `
      <p>[Name]: ${truncatedName}</p>
      <p>[Email]: ${truncatedEmail}</p>
      <p>[Message]: ${truncatedMessage}</p>
    `,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, errMsg: "Unable to send email." });
    return;
  }
  res.status(200).json({ success: true });
}
