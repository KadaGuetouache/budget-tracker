"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClosedEyeIcon, EyeIcon } from "@/constants/icons";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { passwordResetTypes } from "@/types/formTypes";
import { toast } from "./ui/use-toast";
import { hashPassword } from "@/lib/hash";

const ResetPasswordForm = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] =
    useState<boolean>(false);
  const router = useRouter();

  /*
   * Check if user is validated for password reset
   * */

  const id = useSearchParams().get("id") || undefined;
  if (!status) {
    validateUserAccessToThisPage(id, router, setStatus);
  }

  const passwordResetForm = useForm<z.infer<typeof passwordResetTypes>>({
    resolver: zodResolver(passwordResetTypes),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const onPasswordReset = async (
    values: z.infer<typeof passwordResetTypes>,
  ) => {
    const hashedPassword = await hashPassword(values.password);
    const data = { hashedPassword, id: id };
    await axios.post("/api/password-reset/update-password", {
      data,
    });

    toast({
      title: "Success",
      description:
        "Hooray! Password reset complete, You can now log in to your account with your new password",
    });

    router.push("/login");
  };

  if (status) {
    return (
      <div className="shadow-md shadow-blue-500 rounded-md p-10 w-[50%]">
        <h2 className="mb-5 text-2xl font-bold text-center">
          Reset your password
        </h2>
        <Form {...passwordResetForm}>
          <form
            onSubmit={passwordResetForm.handleSubmit(onPasswordReset)}
            className="space-y-8"
          >
            <FormField
              control={passwordResetForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Input
                        placeholder="******"
                        type={passwordVisible ? "text" : "password"}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="link"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? <EyeIcon /> : <ClosedEyeIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription>Type a secure password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={passwordResetForm.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password confirmation</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Input
                        placeholder="******"
                        type={passwordConfirmVisible ? "text" : "password"}
                        {...field}
                        className="w-full"
                      />
                      <Button
                        type="button"
                        variant="link"
                        onClick={() =>
                          setPasswordConfirmVisible(!passwordConfirmVisible)
                        }
                      >
                        {passwordConfirmVisible ? (
                          <EyeIcon />
                        ) : (
                          <ClosedEyeIcon />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Please type your password again
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    );
  } else {
    return <div></div>;
  }
};

function validateUserAccessToThisPage(
  id: string | undefined,
  router: AppRouterInstance,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>,
) {
  if (id !== undefined) {
    checkForUser();
  }

  async function checkForUser() {
    const response = await axios.post("/api/password-reset/check-user", { id });

    if (response.data.status === false) {
      router.push("/");
    } else {
      setStatus(true);
    }
  }
}

export default ResetPasswordForm;
