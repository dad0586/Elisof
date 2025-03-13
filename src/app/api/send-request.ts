import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, request } = req.body;
    // Bu yerda ma'lumotlarni qayta ishlash (masalan, bazaga saqlash yoki log qilish)
    console.log("Received data:", { firstName, lastName, email, phone, request });

    // Muvaffaqiyatli javob qaytarish
    res.status(200).json({ message: "Request received successfully" });
  } else {
    // Faqat POST so'rovlariga ruxsat beriladi
    res.status(405).json({ message: "Method not allowed" });
  }
}