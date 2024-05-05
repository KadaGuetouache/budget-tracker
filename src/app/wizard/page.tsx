import { CurrencyComboBox } from '@/components/CurrencyComboBox'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AuthOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const session = await getServerSession(AuthOptions)
  const currentUser = session?.user;

  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Welcome, <span className="font-bold capitalize">{currentUser?.name}! 👋</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">Let &apos;s get started by setting p your currency</h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can change these settings at any time
        </h3>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>Set your default currency for transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button asChild>
        <Link href={"/"}>I&apos;m done! Take me o the dashboad</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  )
}

export default page
