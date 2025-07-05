import type {Product} from "../types/Product.ts";

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({product, onAddToCart}: ProductCardProps) {
    return (
        <div className="rounded-xl border p-4 hover:shadow transition duration-150 ease-in-out">
            <img src ={product.image}
                 className="h-48 w-full object-cover rounded-md" alt={product.title} />
            <h2 className="mt-2 font-semibold">{product.title}</h2>
            <p className="text-green-600 font-bold" >$ {product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    )
}