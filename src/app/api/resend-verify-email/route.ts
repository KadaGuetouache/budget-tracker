import { sendVerificationEmail } from "@/lib/sendMail";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { tokenGenerator } from "@/lib/helpers";

export async function POST(request: Request) {
  const data = await request.json();
  const email = data.email;
  try {
    // NOTE: This code was upadted

    const user = await prisma.user.findFirst({ where: { email: email } })

    if (!user) {
      return new NextResponse("there is no user registered with this email", { status: 500 })
    }

    const checkForToken = await prisma.token.findFirst({ where: { userId: user.id } })

    if (checkForToken !== null) {
      await prisma.token.delete({ where: { userId: user.id } })
    }

    const token = await prisma.token.create({ data: { userId: user.id, token: tokenGenerator() } })

    const url = process.env.NEXTAUTH_URL!;
    sendVerificationEmail(user, token.token, url);

    return NextResponse.json({ status: true });
  } catch (error: any) {
    return new NextResponse(`something went wrong!: ${error}`, { status: 500 });
  }
}
