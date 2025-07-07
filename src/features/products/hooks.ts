import { useQuery } from '@tanstack/react-query';
import { dummyProducts } from './data.ts';
import type { Product } from '../../types/Product.ts';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return new Promise<Product[]>((resolve) => {
        setTimeout(() => resolve(dummyProducts), 200);
      });
    },
  });
};

export const useProductById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      return new Promise<Product | undefined>((resolve) =>
        setTimeout(() => {
          resolve(dummyProducts.find((product) => product.id === Number(id)));
        }, 200)
      );
    },
    enabled: !!id,
  });
};
