// import db from "@/lib/db";
import { sendPasswordResetEmail } from "@/lib/sendMail";
// import Token from "@/models/Token";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { tokenGenerator } from "@/lib/helpers";

export async function POST(request: Request) {
  const data = await request.json();
  const { email, url } = data.values;

  try {
    // NOTE: this code was updated

    //Check if username exits
    const user = await prisma.user.findFirst({ where: { email: email } })

    if (!user) {
      return new NextResponse(
        "We couldn't find an account associated with that email!",
        { status: 500 },
      );
    }

    if (user) {
      const token = await prisma.token.create({ data: { userId: user.id, token: tokenGenerator() } })

      sendPasswordResetEmail(user, token.token, url);
      return NextResponse.json({ status: true });
    }
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
