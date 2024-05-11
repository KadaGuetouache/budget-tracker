"use server"

import { AuthOptions } from "@/lib/authOptions";
import { UpdateUserCurrencySchema } from "@/schema/userSettings"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function UpdateUserCurrency(currency: string) {
  const parsedBody = UpdateUserCurrencySchema.safeParse({ currency })

  if (!parsedBody.success) {
    throw parsedBody.error;
  }

  const session = await getServerSession((AuthOptions))

  if (session === null) {
    redirect("/login")
  }

  //BUG: cannot update an empty record!
  const userSettings = await prisma.userSettings.update({
    where: {
      userId: session?.user?.id
    },
    data: {
      currency
    }
  })

  return userSettings;
}
