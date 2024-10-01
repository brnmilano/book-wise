import { prisma } from "@/src/lib/prisma";
import { setCookie } from "nookies";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  // aqui é onde eu posso enviar os cookies (response)
  res: NextApiResponse
) {
  /**
   * 405 = Method Not Allowed: O método utilizado pelo cliente é inteligível pelo
   * servidor, mas não pode ser utilizado para o recurso solicitado.
   *
   * O método POST é o único método permitido para esta rota.
   */
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { id } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (userExists) {
    /**
     * 400 Bad Request:O servidor não vai processar a requisição por um erro nas
     * informações enviadas pelo cliente. Uma URL mal formada ou dados inválidos
     * são alguns exemplos.
     */
    return res.status(400).json({ error: "User already exists" });
  }

  setCookie({ res }, "@bookwise:userId", id, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias ou 1 semana
    path: "/",
  });

  /**
   * 201 = Created: A requisição foi completamente processada pelo servidor e um
   * ou mais recursos foram criados em decorrência disso.
   */
  return res.status(201).json(req.body);
}
