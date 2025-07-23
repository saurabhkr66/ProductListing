"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export function useProduct() {
  const [customProducts, setCustomProducts] = useState<Product[]>([]);

  // Fetch from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem("customProducts");
    if (stored) {
      setCustomProducts(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("customProducts", JSON.stringify(customProducts));
  }, [customProducts]);

  // Fetch real API products
  const { data, isLoading, error } = useQuery<{ products: Product[] }>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      return res.data;
    },
  });

  const allProducts = [...(data?.products || []), ...customProducts];

  // Add new product to state + localStorage
  const addProduct = (product: Product) => {
    const newProduct = { ...product, id: Date.now() }; // simulate unique ID we can use uuid for unique id
    setCustomProducts((prev) => [...prev, newProduct]);
  };

  return { products: allProducts, isLoading, error, addProduct };
}
