'use client'

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button"
import { MenuIcon } from "@/constants/icons";
import { authItems, items } from "@/constants/navitems";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SignOutBtn from "./SignOutBtn";
import Logo from "./Logo";

const MobileNavbar = ({ status }: { status: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className="block border-separate bg-background md:hidden">
      <div className="container flex items-center justify-between p-8">

        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <SheetTrigger asChild>
            <Button>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full">
            <div>
              <Logo />
            </div>
            <nav>
              <ul>
                {!status && authItems.map((item, index) => (
                  <li key={index} className="py-6">
                    <Link href={item.path} className={cn(buttonVariants({ variant: "ghost" }), "w-full")} onClick={() => setIsOpen(prev => !prev)}>{item.label}</Link>
                  </li>
                ))}
                {status &&
                  items.map((item, index) => (
                    <li key={index} className="py-6">
                      <Link href={item.path} className={cn(buttonVariants({ variant: "ghost" }), "w-full")} onClick={() => setIsOpen(prev => !prev)}>{item.label}</Link>
                    </li>
                  ))
                }
                {status && <li className="py-6"><SignOutBtn className="w-full" /></li>}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default MobileNavbar;
