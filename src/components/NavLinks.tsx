import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SignOutBtn from "./SignOutBtn";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/authOptions";

const NavLinks = async () => {
  const session = await getServerSession(AuthOptions);

  return (
    <ul className="flex justify-between items-center gap-2">
      {!session && (
        <>
          <li>
            <Link
              href="/register"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Login
            </Link>
          </li>
        </>
      )}
      {session && (
        <>
          <li>
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <SignOutBtn />
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
