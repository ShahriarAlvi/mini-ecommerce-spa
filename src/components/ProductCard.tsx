import type { Product } from '../types/Product.ts';
import { Link } from 'react-router-dom';
import { toastAddToCart } from '../utils/useToastCart.ts';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border p-4 hover:shadow transition duration-150 ease-in-out">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.image}
          className="h-48 w-full object-cover rounded-lg mb-4"
          alt={product.title}
        />
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
      </Link>
      <p className="text-green-600 font-bold text-md mt-2">$ {product.price}</p>
      <button
        onClick={() => toastAddToCart(product, onAddToCart)}
        className="mt-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}
