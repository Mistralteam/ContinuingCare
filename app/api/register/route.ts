import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request, 
) {
  const body = await request.json();
  const { 
    email,
    name,
    password,
    role 
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  // Include the role in the user creation process
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
      role 
    }
  });

  return NextResponse.json(user);
}
