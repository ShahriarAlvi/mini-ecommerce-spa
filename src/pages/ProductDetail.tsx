import { useParams } from 'react-router-dom';
import { useProductById } from '../features/products/hooks.ts';
import { useCartStore } from '../features/cart/store.ts';
import { toastAddToCart } from '../utils/useToastCart.ts';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProductById(id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading)
    return (
      <>
        <p>Loading....</p>
      </>
    );

  if (error || !product)
    return (
      <>
        <p>Product not found.</p>
      </>
    );

  return (
    <div className="max-w-7xl px-4 py-8 min-h-[calc(100vh-80px)]">
      <div className="grid md:grid-cols-4 gap-8 items-start">
        <div className="col-span-4 md:col-span-2">
          <div className="w-full aspect-[4/3]">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 flex flex-col justify-between space-y-6">
          <div className="px-4 py-2">
            <h1 className="mt-2 text-3xl font-bold text-right">
              {product.title}
            </h1>
            <p className="text-lg mt-2 text-gray-600 text-right">
              {product.description}
            </p>
            <p className="text-xl text-right text-green-600 font-bold mt-4">
              ${product.price}
            </p>
          </div>

          <button
            onClick={() => toastAddToCart(product, addToCart)}
            className="mt-6 right-0 px-6 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 transition w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
