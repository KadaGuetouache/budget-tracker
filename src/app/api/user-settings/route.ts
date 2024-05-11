import { AuthOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function GET(request: Request) {
  const session = await getServerSession(AuthOptions)

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  //BUG: try fixing this issue
  //and check for tables relations with user 
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
