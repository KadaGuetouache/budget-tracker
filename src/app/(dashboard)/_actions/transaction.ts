"use server"

import { AuthOptions } from "@/lib/authOptions";
import { CreateTransactionSchema, CreateTransactionSchemaType } from "@/schema/transaction";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";

export async function CreateTransaction(form: CreateTransactionSchemaType) {
  const parsedBody = CreateTransactionSchema.safeParse(form)

  if (!parsedBody.success) {
    throw new Error(parsedBody.error.message)
  }

  const session = await getServerSession(AuthOptions)

  if (!session) {
    redirect("/login")
  }

  const user = session?.user

  const { amount, category, date, description, type } = parsedBody.data

  const categoryRow = await prisma.category.findFirst({
    where: {
      userId: user?.id,
      name: category
    }
  })

  if (!categoryRow) {
    throw new Error("category not found!")
  }

  await prisma.$transaction([

    // Create user transaction
    prisma.transaction.create({
      data: {
        userId: user.id,
        amount,
        date,
        description: description || "",
        type,
        category: categoryRow.name,
        categoryIcon: categoryRow.icon
      }
    }),

    // Update aggregate table
    prisma.monthHistory.upsert({
      where: {
        day_month_year_userId: {
          userId: user.id,
          day: date.getUTCDay(),
          month: date.getUTCMonth(),
          year: date.getUTCFullYear(),
        }
      },
      create: {
        userId: user.id,
        day: date.getUTCDay(),
        month: date.getUTCMonth(),
        year: date.getUTCFullYear(),
        expense: type === "expense" ? amount : 0,
        income: type === "income" ? amount : 0,
      },
      update: {
        expense: {
          increment: type === "expense" ? amount : 0,
        },
        income: {
          increment: type === "income" ? amount : 0,
        }
      }
    }),
    prisma.yearHistory.upsert({
      where: {
        month_year_userId: {
          userId: user.id,
          month: date.getUTCMonth(),
          year: date.getUTCFullYear(),
        }
      },
      create: {
        userId: user.id,
        month: date.getUTCMonth(),
        year: date.getUTCFullYear(),
        expense: type === "expense" ? amount : 0,
        income: type === "income" ? amount : 0,
      },
      update: {
        expense: {
          increment: type === "expense" ? amount : 0,
        },
        income: {
          increment: type === "income" ? amount : 0,
        }
      }
    })
  ])
}
