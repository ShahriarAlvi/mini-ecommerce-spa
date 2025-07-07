import type { Product } from '../types/Product.ts';
import toast from 'react-hot-toast';

export const toastAddToCart = (
  product: Product,
  addToCart: (product: Product) => void
) => {
  return toast.promise(
    new Promise((resolve) => {
      setTimeout(() => {
        addToCart(product);
        resolve(true);
      }, 100);
    }),
    {
      loading: 'Adding to cart...',
      success: 'Product added!',
      error: 'Failed to add to cart',
    }
  );
};

export const toastRemoveFromCart = (
  product: Product,
  removeFromCart: (id: number) => void
) => {
  return toast.promise(
    new Promise((resolve) => {
      setTimeout(() => {
        removeFromCart(product.id);
        resolve(true);
      }, 300);
    }),
    {
      loading: `Removing "${product.title}"...`,
      success: `"${product.title}" removed!`,
      error: `Failed to remove "${product.title}"`,
    }
  );
};

export const toastCheckoutSuccess = (clearCart: () => void) => {
  return toast.promise(
    new Promise((resolve) => {
      setTimeout(() => {
        clearCart();
        resolve(true);
      }, 1500);
    }),
    {
      loading: 'Placing order...',
      success: 'Order placed successfully!',
      error: 'Something went wrong.',
    }
  );
};
