import { AuthOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function GET(request: Request) {
  const session = await getServerSession(AuthOptions)
  const user = session?.user

  if (!user) {
    redirect("/login")
  }

  let userSettings = await prisma.userSettings.findUnique({ where: { userId: user?.id } })

  if (!userSettings) {
    userSettings = await prisma.userSettings.create({
      data: {
        userId: user?.id,
        currency: "USD"
      }
    })
  }

  // Revalidate the homepage that uses the user currency
  revalidatePath("/")
  return Response.json(userSettings)
}
