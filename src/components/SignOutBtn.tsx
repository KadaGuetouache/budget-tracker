"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const SignOutBtn = ({ className }: { className?: string }) => {
  return (
    <Button onClick={() => signOut()} variant="ghost" className={className}>
      Logout
    </Button>
  );
};

export default SignOutBtn;
