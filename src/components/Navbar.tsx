import { useState } from 'react';
import CartSidebar from './CartSidebar.tsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const items = useCartStore((state) => state.items);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 top-0 sticky z-40">
        <h1 className="text-xl font-bold">Mini Shop</h1>
        <button onClick={() => setIsOpen(true)}>Cart</button>

        <CartSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </nav>
    </>
  );
}
