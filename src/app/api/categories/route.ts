import { AuthOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";
import { z } from "zod";

export async function GET(request: Request) {
  const session = await getServerSession(AuthOptions)

  if (!session) redirect("/login")

  const user = session?.user

  // getting transaction type from url and validate it
  const { searchParams } = new URL(request.url)
  const paramType = searchParams.get('type')

  const validator = z.enum(["expense", "income"]).nullable()
  const queryParams = validator.safeParse(paramType)

  if (!queryParams.success) {
    return Response.json(queryParams.error, { status: 400 })
  }

  const type = queryParams.data;

  const categories = await prisma.category.findMany({
    where: {
      userId: user?.id,
      ...(type && { type })
    },
    orderBy: {
      name: "asc"
    }
  })

  return Response.json(categories)
}
