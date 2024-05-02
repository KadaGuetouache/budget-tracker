import { NextResponse } from "next/server";
import { NextRequestWithAuth } from "next-auth/middleware";
import prisma from "@/lib/prisma";
import { checkIfTokenIsValide, getURL } from "@/lib/helpers";

export async function GET(
  request: NextRequestWithAuth,
  { params }: { params: { token: string } },
) {
  const { token } = params;
  try {
    // Check if token exists
    const userToken = await prisma.token.findFirst({ where: { token: token } })

    if (!userToken) {
      throw new Error("Invalid token");
    }

    // Check if token still valid
    const isValidToken = checkIfTokenIsValide(userToken?.createdAt!)

    if (!isValidToken) {
      await prisma.token.delete({ where: { token: token } })
      const url = new URL(process.env.NEXTAUTH_URL + "/login"!);
      url.searchParams.set("invalid", JSON.stringify("true"));
      return NextResponse.redirect(url)
    }

    // Check if user for the token exists
    const user = await prisma.user.findFirst({ where: { id: userToken?.userId as string } })

    if (!user) {
      throw new Error("Invalid user");
    }

    await prisma.user.update({ where: { id: userToken?.userId as string }, data: { verified: true } })

    // This will set URL with active=true and header will update state
    const verified = "true";

    const url = new URL(process.env.NEXTAUTH_URL!);
    url.searchParams.set("verified", JSON.stringify(verified));

    return NextResponse.redirect(url);
  } catch (error: any) {
    console.log(error);
  }
}
