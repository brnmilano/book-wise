import { prisma } from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const ratings = await prisma.rating.findMany();
    return res.status(200).json(ratings);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar ratings" });
  }
}
