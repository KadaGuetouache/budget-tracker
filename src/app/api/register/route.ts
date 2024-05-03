import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/sendMail";
import prisma from "@/lib/prisma";
import { tokenGenerator } from "@/lib/helpers";
import { hashPassword } from "@/lib/hash";


export async function POST(request: Request) {
  const data = await request.json();
  const { email, name, username, password } = data.data;

  try {

    //Check if username exits
    const usernameExits = await prisma.user.findUnique({ where: { username: username } })

    if (usernameExits) {
      return new NextResponse("Username already exits", { status: 400 });
    }

    // Check if email exits
    const emailExits = await prisma.user.findUnique({ where: { email: email } })

    if (emailExits) {
      return new NextResponse("Email already in use", { status: 400 });
    }
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }

  try {
    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        password: hashedPassword
      }
    })

    const token = await prisma.token.create({
      data: {
        userId: user.id,
        token: tokenGenerator()
      }
    })

    // Send email
    sendVerificationEmail(user, token.token, process.env.NEXTAUTH_URL!);

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
