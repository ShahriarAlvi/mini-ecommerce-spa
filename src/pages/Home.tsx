import ProductList from '../components/ProductList.tsx';
import { useProducts } from '../features/products/hooks.ts';
import { useCartStore } from '../features/cart/store.ts';

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium products
        </p>
      </div>

      <ProductList products={products || []} onAddToCart={addToCart} />
    </>
  );
}
