import { AuthOptions } from "@/lib/authOptions";
import { OverviewQuerySchema } from "@/schema/overview";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getServerSession(AuthOptions)

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  const { searchParams } = new URL(request.url)
  const from = searchParams.get("from")
  const to = searchParams.get("to")

  const queryParams = OverviewQuerySchema.safeParse({ from, to })

  if (!queryParams.success) {
    throw new Error(queryParams.error.message)
  }

  const stats = await getCategoriesStats(
    user.id,
    queryParams.data.from,
    queryParams.data.to,
  )

  return Response.json(stats)
}

export type GetCategoriesStatsResponseType = Awaitd<ReturnType<typeof getCategoriesStats>>

async function getCategoriesStats(userId: string, from: Date, to: Date) {
  const stats = await prisma.transaction.groupBy({
    by: ["type", "category", "categoryIcon"],
    where: {
      userId,
      date: {
        gte: from,
        lte: to,
      },
    },
    _sum: {
      amount: true
    },
    orderBy: {
      _sum: {
        amount: "desc",
      },
    },
  })

  return stats
}

