import { create } from 'zustand/react';
import type { Product } from '../../types/Product.ts';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  totalAmount: () => number;

  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
    const items = get().items;
    const existing = items.find((item) => item.product.id === product.id);
    if (existing) {
      set({
        items: items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        items: [...items, { product, quantity: 1 }],
      });
    }
    console.log('item added successfully');
  },

  removeFromCart: (id: number) =>
    set({
      items: get().items.filter((item) => item.product.id !== id),
    }),

  increaseQuantity: (id: number) => {
    set({
      items: get().items.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },

  decreaseQuantity: (id: number) => {
    set({
      items: get().items.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      ),
    });
  },

  totalAmount: () =>
    get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),

  clearCart: () => set({ items: [] }),
}));
