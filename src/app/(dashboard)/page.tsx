import { AuthOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import CreateTransactionDialog from './_components/CreateTransactionDialog'

const page = async () => {
  const session = await getServerSession(AuthOptions)

  !session && redirect("/login");

  const user = session?.user

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user?.id
    }
  })

  !userSettings && redirect("/wizard")

  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="text-3xl font-bold capitalize">
            {user?.name} 👋
          </p>
          <div className="flex items-cener gap-3">
            <CreateTransactionDialog trigger={
              <Button variant="outline" className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700">New income 🤑</Button>
            } type="income" />
            <CreateTransactionDialog trigger={
              <Button variant="outline" className="border-rose-500 bg-rose-950 text-white hover:bg-rose-700">New expense 😡</Button>
            } type="expense" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
