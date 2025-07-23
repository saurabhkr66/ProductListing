"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCategories() {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      return res.data;
    },
  });
}
