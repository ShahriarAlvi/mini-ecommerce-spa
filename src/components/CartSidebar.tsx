import { useCartStore } from '../features/cart/store.ts';
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal.tsx';
import {
  toastCheckoutSuccess,
  toastRemoveFromCart,
} from '../utils/useToastCart.ts';

interface CartSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increaseQuantity);
  const decrease = useCartStore((state) => state.decreaseQuantity);
  const remove = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.totalAmount)();
  const clearCart = useCartStore((state) => state.clearCart);

  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-white 
      z-5 border-l shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <ShoppingCart className="w-5 h-5" />
            Your Cart
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {items.length === 0 ? (
            <p className="text-center text-grey-600 mt-10"> Cart is empty</p>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 items-center border-b pb-3"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium leading-tight line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-green-600 text-sm font-semibold mt-1">
                    $ {product.price}
                  </p>

                  <div className="flex gap-2 mt-2 justify-center">
                    <button
                      onClick={() => decrease(product.id)}
                      className="bg-gray-100 p-1 rounded hover:bg-gray-200 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => increase(product.id)}
                      className="bg-gray-100 p-1 rounded hover:bg-gray-200 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => toastRemoveFromCart(product, remove)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t text-right font-bold">
          <div className="flex justify-between mb-3 text-sm text-gray-600">
            <span>Total:</span>
            <span className="text-base font-semibold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={() => setShowCheckout(true)}
            className="w-full py-2 rounded text-white font-medium transition
             bg-blue-500 hover:bg-blue-600 
             disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </aside>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onSubmit={async (data) => {
          console.log(data);
          await toastCheckoutSuccess(clearCart);
          setShowCheckout(false);
        }}
      />
    </>
  );
}
