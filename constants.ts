export const HCAPTCHA_SITEKEY =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY
    : "10000000-ffff-ffff-ffff-000000000001";
export const HCAPTCHA_SECRET =
  process.env.NODE_ENV === "production"
    ? process.env.HCAPTCHA_SECRET
    : "0x0000000000000000000000000000000000000000";
