// hooks/useCategory.ts
import { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  const { data, isLoading, error } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/products/categories');
      return response.json();
    }
  });

  return { data, isLoading, error };
};
