import type { Product } from '../types/Product.ts';
import { Link } from 'react-router-dom';

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
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          className="h-48 w-full object-cover rounded-md"
          alt={product.title}
        />
        <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
        <p className="text-green-600 font-bold">$ {product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </Link>
    </div>
  );
}
