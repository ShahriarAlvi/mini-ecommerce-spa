import { useParams } from 'react-router-dom';
import { useProductById } from '../features/products/hooks.ts';
import { useCartStore } from '../features/cart/store.ts';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading } = useProductById(id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <div>Loading...</div>;
  if (!product) {
    return <p className="p-6 text-red-500">Product not found</p>;
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg w-full h-auto max-h-[480px] object-cover"
      />

      <div>
        <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
        <p className="text-lg mt-2 text-grey-600">{product.description}</p>
        <p className="text-red-600 font-bold">$ {product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 px-5 rounded bg-blue-300 text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
