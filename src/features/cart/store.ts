import { create } from 'zustand/react';
import type { Product } from '../../types/Product.ts';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addToCart: (product: Product) => void;

  increaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart(product: Product) {
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

  increaseQuantity: (id: number) => {
    get().items.map((item) =>
      item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  },
}));
