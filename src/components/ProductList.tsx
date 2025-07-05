import ProductCard from "./ProductCard.tsx";
import type {Product} from "../types/Product.ts";

interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export default function ProductList({products, onAddToCart}: ProductListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product: Product) => (
                <ProductCard product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
}