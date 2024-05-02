"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "./ui/use-toast";

const VerifyEmailNotification = () => {
  const { data: session } = useSession();

  const verified = useSearchParams().get("verified") || undefined;

  if (verified !== undefined) {
    window.close();
  }

  const onResendVerificationEmail = async () => {
    await axios.post("/api/resend-verify-email", { user: session?.user?.email });

    toast({
      title: "Succeed",
      description:
        "Double check! Your verification email is on its way (again)",
    });
  };

  return <div></div>
};

export default VerifyEmailNotification;
