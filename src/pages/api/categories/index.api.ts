import { prisma } from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Apenas permite o método GET
  }

  try {
    // Faz a consulta para buscar os livros e incluir as categorias associadas
    const books = await prisma.book.findMany({
      include: {
        categories: true, // Isso assume que existe uma relação entre livro e categorias no Prisma
        ratings: true,
      },
    });

    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar livros" });
  }
}
