"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DesktopIcon, MoonIcon, SunIcon } from "@/constants/icons"

const ThemeToggle = ({ className }: { className?: string }) => {
  const { setTheme } = useTheme()

  return (
    <div className={className}>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="py-10 px-10 border-none rounded-none">
            <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <SunIcon /> <span className="ml-3">Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonIcon /> <span className="ml-3">Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <DesktopIcon /> <span className="ml-3">System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu></div>
  )
}

export default ThemeToggle
