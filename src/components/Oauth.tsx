"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { FacebookIcon, GithubIcon, GoogleIcon } from "@/constants/icons";
import { cn } from "@/lib/utils";
const iconSize = "10"
const items = [
  {
    action: 'google',
    label: "Sign in with Google",
    className: "bg-white hover:bg-gray-200",
    icon: <GoogleIcon className={`md:mr-3 h-${iconSize} w-${iconSize} md:w-5 md:h-5`} />,
    variant: "default"
  },
  {
    action: 'facebook',
    label: "Login with Facebook",
    className: "bg-blue-700 hover:bg-blue-800",
    icon: <FacebookIcon className={`md:mr-3 h-${iconSize} w-${iconSize} md:w-5 md:h-5`} />,
    variant: "outline"
  },
  {
    action: 'github',
    label: "Sign in with Github",
    className: "",
    icon: <GithubIcon className={`md:mr-3 h-${iconSize} w-${iconSize} md:w-5 md:h-5`} />,
    variant: "secondary"
  }
]

const Oauth = () => {
  return (
    <div className="flex md:flex-col justify-around items-center h-[200px] w-[400px] md:w-[auto]">
      {items.map((item, index) => (
        <Button key={index}
          onClick={() => signIn(item.action)}
          className={cn(item.className, "flex jusify-center items-centr p-0 w-16 h-16 rounded-full md:w-full md:rounded-md md:h-11 md:px-8")}
          size="lg"
          variant={item.variant as any}
        >
          {item.icon}
          <span className="hidden md:block">{item.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default Oauth;
