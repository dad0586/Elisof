import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, request } = req.body;
    console.log("Received data:", { firstName, lastName, email, phone, request });

    res.status(200).json({ message: "Request received successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}