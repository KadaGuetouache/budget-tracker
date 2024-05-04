import React from 'react'
import Link from "next/link";
import { BullHornIcon } from "@/constants/icons";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex justify-center items-center">
        <BullHornIcon className="w-7 h-7 text-amber-500" />
        <span className="ml-1 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">BudgetTracker</span>
      </Link>
    </div>
  )
}

export default Logo
