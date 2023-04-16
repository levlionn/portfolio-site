import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.join(process.cwd(), "components", "PongGame.tsx");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  res.status(200).json({ code: fileContent });
}
