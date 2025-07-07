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
    <>
      <div className="grid md:grid-cols-2 gap-6 items-start min-h-[70vh]">
        <div className="w-full aspect-[4/3]">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-between">
          <div>
            <h1 className="mt-2 text-3xl font-bold">{product.title}</h1>
            <p className="text-lg mt-2 text-grey-600 mt-2">
              {product.description}
            </p>
            <p className="text-xl text-green-600 font-bold mt-4">
              ${product.price}
            </p>{' '}
          </div>

          <button
            onClick={() => toastAddToCart(product, addToCart)}
            className="mt-6 px-6 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 transition w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
