import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const { categoryName, categoryImg } = body;

    if (!categoryName || !categoryImg) {
      return NextResponse.json(
        { status: "fail", message: "categoryName and categoryImg are required" },
        { status: 400 }
      );
    }

    const newCategory = await prisma.categories.create({
      data: {
        categoryName,
        categoryImg,
      },
    });

    return NextResponse.json({ status: "success", data: newCategory });
  } catch (error) {
    console.error("POST /brands error:", error);
    return NextResponse.json(
      { status: "fail", error: error.message },
      { status: 500 }
    );
  }
}
