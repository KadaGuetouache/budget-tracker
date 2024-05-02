import { z } from "zod";

// Reset Password
export const loginForm = z.object({
  email: z.string().min(1, { message: "You must provide an email" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const passwordForgottenTypes = z.object({
  email: z.string().min(1, { message: "You must provide an email" }).email(),
});

// Resend Verify Token
export const resendTokenForm = z.object({
  email: z.string().min(1, { message: "You must provide an email" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const resendTokenFormTypes = z.object({
  email: z.string().min(1, { message: "You must provide an email" }).email(),
});

// Register
export const registerForm = z
  .object({
    email: z.string().min(1, { message: "You must provide an email" }).email(),
    username: z.string().min(6, {
      message: "Your full name can't be less than 6 characters long",
    }),
    name: z.string().min(4, {
      message: "Your full name can't be less than 4 characters long",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(32, { message: "Password can't be more then 32 characters long" })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$&]).{8,15}$/, {
        message:
          " Password must consist of at least one capital letter, one small letter, one number, and one symbol",
      }),
    passwordConfirmation: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine(
    (values) => {
      return values.password === values.passwordConfirmation;
    },
    { message: "Password must match!", path: ["passwordConfirmation"] },
  );

export type registerFormType = z.infer<typeof registerForm>;

export const passwordResetTypes = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(32, { message: "Password can't be more then 32 characters long" })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$&]).{8,15}$/, {
        message:
          " Password must consist of at least one capital letter, one small letter, one number, and one symbol",
      }),
    passwordConfirmation: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine(
    (values) => {
      return values.password === values.passwordConfirmation;
    },
    { message: "Password must match!", path: ["passwordConfirmation"] },
  );

export const magicLinkForm = z
  .object({
    email: z.string().min(1, { message: "You must provide an email" }).email(),
  });

export type magicLinkFormType = z.infer<typeof magicLinkForm>;
