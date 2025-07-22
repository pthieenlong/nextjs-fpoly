import { connectDB } from '@/config/database';
import CartModel, { ICartItem } from '../__model/cart.model';

export class CartService {
  // Lấy cart theo userId hoặc sessionId
  static async getCart({ userId, sessionId }: { userId?: string; sessionId?: string; }) {
    await connectDB();
    const cart = await CartModel.findOne(userId ? { userId } : { sessionId });
    return cart;
  }

  // Thêm sản phẩm vào cart
  static async addToCart({ userId, sessionId, item }: { userId?: string; sessionId?: string; item: ICartItem }) {
    await connectDB();
    let cart = await CartModel.findOne(userId ? { userId } : { sessionId });
    if (!cart) {
      cart = new CartModel({ userId, sessionId, items: [item] });
    } else {
      // Kiểm tra sản phẩm đã có trong cart chưa
      const idx = cart.items.findIndex(i => i.productId === item.productId && i.size === item.size && i.color === item.color);
      if (idx > -1) {
        cart.items[idx].quantity += item.quantity;
      } else {
        cart.items.push(item);
      }
    }
    cart.updatedAt = new Date();
    await cart.save();
    return cart;
  }

  // Xóa sản phẩm khỏi cart
  static async removeFromCart({ userId, sessionId, productId }: { userId?: string; sessionId?: string; productId: string }) {
    await connectDB();
    const cart = await CartModel.findOne(userId ? { userId } : { sessionId });
    if (!cart) return null;
    cart.items = cart.items.filter(i => i.productId !== productId);
    cart.updatedAt = new Date();
    await cart.save();
    return cart;
  }

  // Cập nhật số lượng sản phẩm
  static async updateQuantity({ userId, sessionId, productId, quantity }: { userId?: string; sessionId?: string; productId: string; quantity: number }) {
    await connectDB();
    const cart = await CartModel.findOne(userId ? { userId } : { sessionId });
    if (!cart) return null;
    const item = cart.items.find(i => i.productId === productId);
    if (item) {
      item.quantity = quantity;
      cart.updatedAt = new Date();
      await cart.save();
    }
    return cart;
  }
} 