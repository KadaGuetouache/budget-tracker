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
import axios from "axios";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ClosedEyeIcon, EyeIcon, SpinnerIcon } from "@/constants/icons";
import { registerForm, registerFormType } from "@/types/formTypes";

const RegisterForm = ({ className }: { className: string }) => {
  const [pending, startTransition] = useTransition()
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] =
    useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof registerForm>>({
    resolver: zodResolver(registerForm),
    defaultValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (values: registerFormType) => {
    startTransition(async () => {
      const { email, name, username, password } = values;
      const data = { email, name, username, password };

      try {
        await axios.post("/api/register", { data });

        toast({
          title: "Success",
          description: "head over to your inbox and verify your email address.",
        });

        router.push("/login");
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.response.data,
          variant: "destructive",
        });
      }
    })
  };

  return (
    <div className={cn(className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col justify-between"
        >
          <Tabs defaultValue="account" className="w-full">
            <div className="flex justify-center">
              <TabsList className="mb-5">
                <TabsTrigger value="account">Account Details</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="account">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Omar Omar" {...field} />
                    </FormControl>
                    <FormDescription>Your full name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: omar43 " {...field} />
                    </FormControl>
                    <FormDescription>
                      Your username should be unique
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent value="credentials">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Ex: omar11@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your personal email</FormDescription>
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
                    <FormDescription>Type a secure password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirmation</FormLabel>
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
            </TabsContent>
            <Button type="submit" className="mt-5 w-full" disabled={pending}>
              {pending ? (
                <SpinnerIcon className="animate-spin w-5 h-5 ml-3" />
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </Tabs>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
