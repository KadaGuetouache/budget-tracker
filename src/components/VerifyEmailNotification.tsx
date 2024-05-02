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

  if (session?.user) {
    return (
      <div
        className={cn(
          "relative shadow-sm shadow-blue-500 bg-background w-full h-[50px] justify-center items-center",
          `${!session?.user?.verified ? "flex" : "hidden"}`,
        )}
      >
        <p className="text-center">
          Welcome abroad! To get started, head over to your inbox and verify
          your email address. We sent you a quick email to confirm it&apos;s
          really you
        </p>
        <Button
          size="sm"
          className="ml-4"
          onClick={() => onResendVerificationEmail()}
        >
          Re-send email
        </Button>
      </div>
    );
  } else {
    return;
  }
};

export default VerifyEmailNotification;
