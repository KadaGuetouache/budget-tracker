'use client'

import { useSession } from "next-auth/react";
import NavLinks from "./NavLinks";

const DesktopNavbar = () => {
  const status = useSession()?.status
  return (
    <nav className="hidden md:block gap-2">
      <NavLinks status={status} />
    </nav>
  )
}

export default DesktopNavbar;
