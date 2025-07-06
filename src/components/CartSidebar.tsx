import { useCartStore } from '../features/cart/store.ts';

interface CartSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increaseQuantity);
  return (
    <aside
      className={`fixed top-0 right-0 w-80 h-full bg-white 
      z-5 border-l shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold"> Your Cart </h2>
        <button onClick={onClose} className="text-xl">
          X
        </button>
      </div>

      <div>
        {items.length === 0 ? (
          <p className="text-center text-grey-600"> Cart is empty</p>
        ) : (
          items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-3 items-center">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg w-16 h-16 rounded object-cover"
              />
              <h3 className="text-md font-medium">{product.title}</h3>
              <p className="text-green-600 font-semibold text-sm">
                {product.price}
              </p>

              <div>
                <span>{quantity}</span>
                <button
                  onClick={() => increase(product.id)}
                  className="px-2 py-2 border-rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
