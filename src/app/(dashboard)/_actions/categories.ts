"use server"

import { AuthOptions } from "@/lib/authOptions"
import { CreateCategorySchema, CreateCategorySchemaType, DeleteCategorySchema, DeleteCategorySchemaType } from "@/schema/categories"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parsedBody = CreateCategorySchema.safeParse(form)

  if (!parsedBody.success) {
    throw new Error("bad request")
  }

  const session = await getServerSession(AuthOptions)

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  const { name, icon, type } = parsedBody.data;

  return await prisma.category.create({
    data: {
      userId: user?.id,
      name,
      icon,
      type,
    }
  })

}

export async function DeleteCategory(form: DeleteCategorySchemaType) {
  const parsedBody = DeleteCategorySchema.safeParse(form)

  if (!parsedBody.success) {
    throw new Error("bad request")
  }

  const session = await getServerSession(AuthOptions)

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  return await prisma.category.delete({
    where: {
      name_userId_type: {
        userId: user.id,
        name: parsedBody.data.name,
        type: parsedBody.data.type
      }
    }
  })

}
