import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import VerifyEmailNotification from "./VerifyEmailNotification";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <VerifyEmailNotification />
      </Suspense>
      <header className="flex justify-between items-center h[10%] px-8 py-4">
        <div>
          <Link href="/">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 font-bold text-4xl">
              Next Auth
            </h1>
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
