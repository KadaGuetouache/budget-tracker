import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    // NOTE: this code was updated

    //Check if username exits
    const user = await prisma.user.findFirst({ where: { id: id } })
    if (user) {
      return NextResponse.json(user);
    }

    return NextResponse.json({ status: false, msg: "user not found!" });
  } catch (error: any) {
    return NextResponse.json({ status: false, msg: "database error" });
  }
}
