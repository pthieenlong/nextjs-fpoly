// src/app/cart/__model/cart.model.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
}

export interface ICart extends Document {
  userId?: string;      // Nếu có đăng nhập
  sessionId?: string;   // Nếu chưa đăng nhập, lưu theo session
  items: ICartItem[];
  updatedAt: Date;
}

const CartItemSchema = new Schema<ICartItem>({
  productId: { type: String, required: true },
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  color: String,
  size: String,
});

const CartSchema = new Schema<ICart>({
  userId: String,
  sessionId: String,
  items: [CartItemSchema],
  updatedAt: { type: Date, default: Date.now },
});

const CartModel: Model<ICart> = mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);

export default CartModel;
