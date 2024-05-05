import React from "react";
import VerifyEmailNotification from "./VerifyEmailNotification";
import { Suspense } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { AuthOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navbar = async () => {
  const session = await getServerSession(AuthOptions)
  return (
    <>
      <Suspense fallback={<div></div>}>
        <VerifyEmailNotification />
      </Suspense>
      <header className="border-b justify-between flex items-center h[10%] px-8 relative bg-background" >
        <Logo />
        <div className="flex justify-center items-center">
          <ThemeToggle className="md:mr-4" />
          <DesktopNavbar status={session !== null ? true : false} />
          <MobileNavbar status={session !== null ? true : false} />
        </div>
      </header >
    </>
  );
};

export default Navbar;
