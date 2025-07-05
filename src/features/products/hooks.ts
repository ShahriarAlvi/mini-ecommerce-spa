import {useQuery} from "@tanstack/react-query";
import {dummyProducts} from "./data.ts";


export const useProducts = () => {
    return useQuery(
        {
            queryKey: ['products'],
            queryFn: async () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(dummyProducts), 500);
                })
            }
        }
    )
}