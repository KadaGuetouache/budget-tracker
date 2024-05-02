import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  const { id, hashedPassword } = data.data;

  try {
    //NOTE: This code was updated
    //Check if username exits
    await prisma.user.update({ where: { id: id }, data: { password: hashedPassword } })

    return new NextResponse("user updated", { status: 200 });

    // Check if email exits
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
