import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// create new product
export async function POST(req) {
  try {
    const body = await req.json();

    const newProduct = await prisma.products.create({
      data: {
        title: body.title,
        short_des: body.short_des,
        price: body.price,
        discount_price: body.discount_price,
        image: body.image,
        discount: body.discount,
        stock: body.stock,
        star: body.star,
        remark: body.remark,
        brand_id: body.brand_id,
        category_id: body.category_id,
      },
    });

    return NextResponse.json({ status: 'success', data: newProduct }, { status: 201 });
  } catch (err) {
    console.error('POST /products error:', err);
    return NextResponse.json({ status: 'error', message: err.message }, { status: 500 });
  }
}


// get all product
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.products.findMany();

    return NextResponse.json({ status: "success", data:result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

// Delete a single product
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ status: 'fail', message: 'Product ID is required' }, { status: 400 });
    }

    const deleted = await prisma.products.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ status: 'success', data: deleted });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}

// Update a single product
export async function PATCH(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const data = await req.json();

    if (!id) {
      return NextResponse.json({ status: 'fail', message: 'Product ID is required' }, { status: 400 });
    }

    const updated = await prisma.products.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ status: 'success', data: updated });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}
