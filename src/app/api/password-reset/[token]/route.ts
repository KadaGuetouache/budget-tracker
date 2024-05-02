import { NextResponse } from "next/server";
import { NextRequestWithAuth } from "next-auth/middleware";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequestWithAuth,
  { params }: { params: { token: string } },
) {
  const { token } = params;

  try {
    const userToken = await prisma.token.findFirst({ where: { token: token } })

    if (!userToken) {
      throw new Error("Invalid token");
    }

    const user = await prisma.user.findFirst({ where: { id: userToken.userId } })
    if (!user) {
      throw new Error("Invalid user");
    }

    // this will set URL with active=true and header will update state
    const id = user.id;
    const url = new URL(process.env.NEXTAUTH_URL!);
    url.searchParams.set("id", id);

    return NextResponse.redirect(url);
  } catch (error: any) {
    console.log(error);
  }
}
