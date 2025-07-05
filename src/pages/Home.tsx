import ProductList from "../components/ProductList.tsx";
import {useProducts} from "../features/products/hooks.ts";


export default function Home(){

    const {data: products, isLoading} = useProducts();

    // FIX: addToCart function (not set or passed down), props missing

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bond mb-4">All Products</h1>
            <ProductList products={products || []} />
        </div>
    )
}