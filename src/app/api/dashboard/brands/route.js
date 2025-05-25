import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const { brandName, brandImg } = body;

    if (!brandName || !brandImg) {
      return NextResponse.json(
        { status: "fail", message: "brandName and brandImg are required" },
        { status: 400 }
      );
    }

    const newBrand = await prisma.brands.create({
      data: {
        brandName,
        brandImg,
      },
    });

    return NextResponse.json({ status: "success", data: newBrand });
  } catch (error) {
    console.error("POST /brands error:", error);
    return NextResponse.json(
      { status: "fail", error: error.message },
      { status: 500 }
    );
  }
}
