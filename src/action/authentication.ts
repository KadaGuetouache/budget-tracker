"use server";

import { sendVerificationEmail } from "@/lib/sendMail";
import { tokenGenerator } from "@/lib/helpers";
import prisma from "@/lib/prisma";

export async function ReSendVerificationEmail(email: string) {
  // NOTE: This code was updated

  const user = await prisma.user.findFirst({ where: { email: email } })

  if (user) {
    // const token = new Token({
    //   userId: user?._id,
    //   token: tokenGenerator(),
    // });
    //
    const token = await prisma.token.create({ data: { userId: user.id, token: tokenGenerator() } })
    const url = process.env.NEXTAUTH_URL || ""
    sendVerificationEmail(user, token?.token, url);
  }
  return;
}
