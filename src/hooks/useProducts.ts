import { Product } from "../types/types";
import useData from "./useData";

const useProducts = (categoryId: number | null | string) =>
  useData<Product[]>(
    "/products",
    {
      params: {
        category_id: categoryId,
      },
    },
    [categoryId]
  );

export default useProducts;
