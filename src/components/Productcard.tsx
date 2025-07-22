// components/ProductCard.tsx
"use client";
import React from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">₹{product.price}</span>
          <span className="text-xs text-gray-400">Stock: {product.stock}</span>
        </div>
      </div>
    </div>
  );
};
