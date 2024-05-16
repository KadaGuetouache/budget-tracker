import { AuthOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getServerSession(AuthOptions)

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  const periods = await getHistoryPeriods(user?.id)

  return Response.json(periods)
}

export type GetHistoryPeriodsResponsetype = Awaited<ReturnType<typeof getHistoryPeriods>>

async function getHistoryPeriods(userId: string) {
  const result = await prisma.monthHistory.findMany({
    where: {
      userId,
    },
    select: {
      year: true
    },
    distinct: ["year"],
    orderBy: [
      { year: "asc" }
    ]
  })

  const years = result.map((el) => el.year)

  if (years.length === 0) {
    // Return the current year
    return [new Date().getFullYear()]
  }

  return years
}
