"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { FacebookIcon, GithubIcon, GoogleIcon } from "@/constants/icons";

const Oauth = () => {
  return (
    <div className="flex flex-col justify-between items-center h-[200px] flex-1">
      <Button
        onClick={() => signIn("google")}
        className="bg-white hover:bg-gray-200 w-full"
        size="lg"
      >
        <GoogleIcon className="mr-3 h-5 w-5" />
        Sign in with Google
      </Button>
      <Button
        onClick={() => signIn("facebook")}
        className="bg-blue-700 hover:bg-blue-800 w-full"
        variant="outline"
        size="lg"
      >
        <FacebookIcon className="mr-3 h-5 w-5" />
        Login with Facebook
      </Button>
      <Button
        onClick={() => signIn("github")}
        variant="secondary"
        className="w-full"
        size="lg"
      >
        <GithubIcon className="mr-3 h-5 w-5" />
        Sign in with Github
      </Button>
    </div>
  );
};

export default Oauth;
