export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
  inStock: boolean;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
}

export interface CartUpdateRequest {
  itemId: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface CartAddRequest {
  slug: string;
  quantity: number;
  size?: string;
  color?: string;
} 