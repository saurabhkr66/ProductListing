"use client";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductTableProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({ products, onProductClick }) => {
  return (
    <table className="w-full border rounded shadow-sm ">
      <thead className=" text-sm">
        <tr>
          <th className="p-2">Image</th>
          <th className="p-2">Title</th>
          <th className="p-2">Category</th>
          <th className="p-2">Price</th>
          <th className="p-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className="border-t hover:bg-blue-400 cursor-pointer"
            onClick={() => onProductClick?.(product)}
          >
            <td className="p-2">
              <Image src={product.thumbnail}  width={300} height={200} alt={product.title} className="h-12 w-12 object-cover rounded" />
            </td>
            <td className="p-2">{product.title}</td>
            <td className="p-2">{product.category}</td>
            <td className="p-2">₹{product.price}</td>
            <td className="p-2">{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
