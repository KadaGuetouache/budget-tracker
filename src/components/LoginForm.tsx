"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from "next/navigation";
import { ClosedEyeIcon, EyeIcon, SpinnerIcon } from "@/constants/icons";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import axios from "axios";
import { loginForm, resendTokenFormTypes } from "@/types/formTypes";
import { passwordForgottenTypes } from "@/types/formTypes";
import { ReSendVerificationEmail } from "@/action/authentication";
import { getURL } from "@/lib/helpers";
import { useSearchParams } from "next/navigation";
const LoginForm = ({className}: {className: string}) => {
  const tokenInvalid = useSearchParams().get("invalid")
  const [resendTokenDialog, setResendTokenDialog] = useState<boolean>(false)
  const [pending, startTransition] = useTransition();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof loginForm>>({
    resolver: zodResolver(loginForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (!resendTokenDialog && tokenInvalid) {
    toast({
      title: "Invalid Token",
      description: "Your token has expired. it's time to generate new token.",
      variant: "destructive",
      action: <ToastAction altText="Re-send" onClick={() => setResendTokenDialog(true)}>Re-send</ToastAction>
    })
  }

  const onResendVerifyToken = async (values: z.infer<typeof resendTokenFormTypes>) => {
    try {
      await axios.post("/api/resend-verify-email", { email: values.email })

      toast({
        title: "Hooray!",
        description: "Your new token has been generated, go check it out.",
      })

    } catch (error: any) {
      console.log(error.response.data)
      if (error.response.data.includes("constraint failed on the fields")) {
        return toast({
          title: "Something went wrong!",
          description: "You can only send one token at a time",
          variant: "destructive",
        })
      }
      toast({
        title: "Something went wrong!",
        description: error.response.data,
        variant: "destructive",
      })
    }
  }

  const passwordForgottenForm = useForm<z.infer<typeof passwordForgottenTypes>>(
    {
      resolver: zodResolver(passwordForgottenTypes),
      defaultValues: {
        email: "",
      },
    },
  );

  const onPasswordForgotten = (
    values: z.infer<typeof passwordForgottenTypes>,
  ) => {
    startTransition(async () => {
      const url = getURL()
      const data = { ...values, url }
      try {
        console.log(values)
        await axios.post("/api/password-reset", { data });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error?.response?.data,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success",
        description: "head over to your inbox to change your password",
      });
    });
  };

  const onSubmit = (values: z.infer<typeof loginForm>) => {
    startTransition(async () => {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (response?.ok === false) {
        if (response.error?.toLowerCase().includes("account not verified")) {
          toast({
            description: "Email not sent yet? Tap 'Resend' to try again.",
            action: <ToastAction altText="Re-send" onClick={() => ReSendVerificationEmail(values.email)}>Re-send</ToastAction>
          });
          return;
        }

        toast({
          title: "Error",
          description: response?.error,
          variant: "destructive",
        });
      } else {
        router.push("/wizard");
      }
    });

  };

  return (
    <div className={className}>
      <Dialog open={resendTokenDialog} onOpenChange={() => setResendTokenDialog(!resendTokenDialog)}>
        <DialogContent>
          <Form {...passwordForgottenForm}>
            <form
              onSubmit={passwordForgottenForm.handleSubmit(onResendVerifyToken)}
              className="space-y-8"
            >
              <FormField
                control={passwordForgottenForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: omar@mail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Please provide your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? (
                  <SpinnerIcon className="animate-spin w-5 h-5 ml-3" />
                ) : (
                  <span>Send new token</span>
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: omar@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>type your email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
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
                <FormDescription>
                  Make sure your password is strong
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? (
              <SpinnerIcon className="animate-spin w-5 h-5 ml-3" />
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </form>
      </Form>
      <Dialog>
        <DialogTrigger asChild>
          <p className="pt-4 cursor-pointer">forgotten your password?</p>
        </DialogTrigger>
        <DialogContent>
          <Form {...passwordForgottenForm}>
            <form
              onSubmit={passwordForgottenForm.handleSubmit(onPasswordForgotten)}
              className="space-y-8"
            >
              <FormField
                control={passwordForgottenForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: omar@mail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Please provide your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? (
                  <SpinnerIcon className="animate-spin w-5 h-5 ml-3" />
                ) : (
                  <span>Reset password</span>
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
