import { Cart, CartItem } from '../__types/cart.type';

export class CartEntity {
  private _cart: Cart;

  constructor(cart: Cart) {
    this._cart = cart;
  }

  get items(): CartItem[] {
    return this._cart.items;
  }

  get totalItems(): number {
    return this._cart.totalItems;
  }

  get subtotal(): number {
    return this._cart.subtotal;
  }

  get discount(): number {
    return this._cart.discount;
  }

  get total(): number {
    return this._cart.total;
  }

  // Business logic methods
  isEmpty(): boolean {
    return this._cart.items.length === 0;
  }

  getItemById(itemId: string): CartItem | undefined {
    return this._cart.items.find(item => item.id === itemId);
  }

  getItemCount(): number {
    return this._cart.items.reduce((total, item) => total + item.quantity, 0);
  }

  hasDiscount(): boolean {
    return this._cart.discount > 0;
  }

  getDiscountPercentage(): number {
    if (this._cart.subtotal === 0) return 0;
    return Math.round((this._cart.discount / this._cart.subtotal) * 100);
  }

  getItemsWithDiscount(): CartItem[] {
    return this._cart.items.filter(item => item.originalPrice !== undefined);
  }

  getTotalSavings(): number {
    return this._cart.items.reduce((total, item) => {
      if (item.originalPrice) {
        return total + ((item.originalPrice - item.price) * item.quantity);
      }
      return total;
    }, 0);
  }

  toJSON(): Cart {
    return { ...this._cart };
  }
}

export class CartItemEntity {
  private _item: CartItem;

  constructor(item: CartItem) {
    this._item = item;
  }

  get id(): string {
    return this._item.id;
  }

  get productId(): string {
    return this._item.productId;
  }

  get name(): string {
    return this._item.name;
  }

  get price(): number {
    return this._item.price;
  }

  get originalPrice(): number | undefined {
    return this._item.originalPrice;
  }

  get image(): string {
    return this._item.image;
  }

  get size(): string | undefined {
    return this._item.size;
  }

  get color(): string | undefined {
    return this._item.color;
  }

  get quantity(): number {
    return this._item.quantity;
  }

  get inStock(): boolean {
    return this._item.inStock;
  }

  // Business logic methods
  hasDiscount(): boolean {
    return this._item.originalPrice !== undefined && 
           this._item.originalPrice > this._item.price;
  }

  getDiscountPercentage(): number {
    if (!this.hasDiscount()) return 0;
    return Math.round(((this._item.originalPrice! - this._item.price) / this._item.originalPrice!) * 100);
  }

  getTotalPrice(): number {
    return this._item.price * this._item.quantity;
  }

  getTotalOriginalPrice(): number {
    if (this._item.originalPrice) {
      return this._item.originalPrice * this._item.quantity;
    }
    return this.getTotalPrice();
  }

  getSavings(): number {
    return this.getTotalOriginalPrice() - this.getTotalPrice();
  }

  toJSON(): CartItem {
    return { ...this._item };
  }
} 