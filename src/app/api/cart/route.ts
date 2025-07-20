import { NextRequest, NextResponse } from 'next/server';
import CartModel from '@/app/cart/__model/cart.model';
import { connectDB } from '@/config/database';

// Lấy cart theo userId hoặc sessionId
export async function GET(req: NextRequest) {
  await connectDB();
  const userId = req.nextUrl.searchParams.get('userId');
  const sessionId = req.nextUrl.searchParams.get('sessionId');
  if (!userId && !sessionId) {
    return NextResponse.json({ error: 'Missing userId or sessionId' }, { status: 400 });
  }
  const cart = await CartModel.findOne(userId ? { userId } : { sessionId });
  return NextResponse.json(cart || { items: [] });
}

// Thêm sản phẩm vào cart
export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const { userId, sessionId, item } = body;
  if (!item || (!userId && !sessionId)) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 });
  }
  let cart = await CartModel.findOne(userId ? { userId } : { sessionId });
  if (!cart) {
    cart = new CartModel({ userId, sessionId, items: [item] });
  } else {
    // Kiểm tra sản phẩm đã có trong cart chưa
    const idx = cart.items.findIndex(
      (i: any) =>
        i.productId === item.productId &&
        i.size === item.size &&
        i.color === item.color
    );
    if (idx > -1) {
      cart.items[idx].quantity += item.quantity;
    } else {
      cart.items.push(item);
    }
  }
  cart.updatedAt = new Date();
  await cart.save();
  return NextResponse.json(cart);
}

// Xóa sản phẩm khỏi cart
export async function DELETE(req: NextRequest) {
  await connectDB();
  const { userId, sessionId, productId } = await req.json();
  if (!productId || (!userId && !sessionId)) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 });
  }
  const cart = await CartModel.findOne(userId ? { userId } : { sessionId });
  if (!cart) return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
  cart.items = cart.items.filter((i: any) => i.productId !== productId);
  cart.updatedAt = new Date();
  await cart.save();
  return NextResponse.json(cart);
}

// Cập nhật số lượng sản phẩm trong cart
export async function PATCH(req: NextRequest) {
  await connectDB();
  const { userId, sessionId, productId, quantity } = await req.json();
  if (!productId || typeof quantity !== 'number' || (!userId && !sessionId)) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 });
  }
  const cart = await CartModel.findOne(userId ? { userId } : { sessionId });
  if (!cart) return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
  const item = cart.items.find((i: any) => i.productId === productId);
  if (item) {
    item.quantity = quantity;
    cart.updatedAt = new Date();
    await cart.save();
  }
  return NextResponse.json(cart);
}
