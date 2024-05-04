"use client"

import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SignOutBtn from "./SignOutBtn";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { authItems, items } from "@/constants/navitems";

const NavLinks = ({ status }: { status: string }) => {
  const pathname = usePathname()

  return (
    <ul className="flex justify-between items-center gap-2">
      {status === "unauthenticated" && (
        <>
          {authItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={cn(buttonVariants({ variant: "ghost" }), activeLink(pathname, item.path), "py-10 rounded-none")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </>
      )
      }
      {
        status === "authenticated" && (
          <>
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={cn(buttonVariants({ variant: "ghost" }), activeLink(pathname, item.path), "py-10 rounded-none")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <SignOutBtn className="py-10 rounded-none" />
            </li>
          </>
        )
      }
    </ul >
  );
};

// Check for active link
function activeLink(pathname: string, path: string): string {
  return path === pathname ? "border-b border-white" : "text-muted-foreground"
}

export default NavLinks;
