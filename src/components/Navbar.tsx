import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import VerifyEmailNotification from "./VerifyEmailNotification";
import { Suspense } from "react";
import { BullHornIcon } from "@/constants/icons";

const Navbar = () => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <VerifyEmailNotification />
      </Suspense>
      <header className="flex justify-between items-center h[10%] px-8 py-4 relative bg-background">
        <div>
          <Link href="/" className="flex justify-center items-center">
            <BullHornIcon className="w-7 h-7 text-amber-500" />
            <span className="ml-1 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">BudgetTracker</span>
          </Link>
        </div>
        <nav className="gap-2">
          <NavLinks />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
