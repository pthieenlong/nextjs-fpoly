import { Cart, CartItem } from '@/app/cart';
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
  isLoading: boolean;
  error: string | null
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  total: 0,
  isLoading: false,
  error: null
}
const calculateCartTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = items.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  const total = subtotal - discount;

  return { totalItems, subtotal, discount, total };
}
const findExistingItem = (items: CartItem[], slug: string, size?: string, color?: string) => {
  return items.find(item => 
    item.slug === slug && 
    item.size === size && 
    item.color === color
  );
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = findExistingItem(state.items, newItem.slug, newItem.size, newItem.color);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      const totals = calculateCartTotals(state.items);
      Object.assign(state, totals);
    },

    removeItem: (state, action: PayloadAction<{ slug: string }>) => {
      const { slug } = action.payload;
      
      state.items = state.items.filter(item => item.slug !== slug);
      
      const totals = calculateCartTotals(state.items);
      Object.assign(state, totals);
    },

    updateQuantity: (state, action: PayloadAction<{ slug: string; size?: string; color?: string; quantity: number }>) => {
      const { slug, size, color, quantity } = action.payload;
      const item = findExistingItem(state.items, slug, size, color);
    
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(i => i !== item);
        } else {
          item.quantity = quantity;
        }
    
        const totals = calculateCartTotals(state.items);
        Object.assign(state, totals);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.discount = 0;
      state.total = 0;
    },

    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    // Set error state
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // Load cart from localStorage
    loadCart: (state, action: PayloadAction<Cart>) => {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.subtotal = action.payload.subtotal;
      state.discount = action.payload.discount;
      state.total = action.payload.total;
    },
  },
});

export const { 
  addItem, 
  removeItem, 
  updateQuantity, 
  clearCart, 
  setLoading, 
  setError, 
  loadCart 
} = cartSlice.actions;

export default cartSlice.reducer;