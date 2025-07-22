"use client";
import { Product } from "@/types/product";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailsModal: React.FC<Props> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <Dialog open={!!product} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <Dialog.Panel className=" max-w-2xl w-full rounded-lg p-6 shadow-lg overflow-auto max-h-[90vh]">
          <Dialog.Title className="text-xl font-bold mb-2">{product.title}</Dialog.Title>
          <img src={product.thumbnail} alt={product.title} className="mb-4 w-full max-h-64 object-contain rounded" />
          <p className="text-sm mb-2">{product.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div><strong>Category:</strong> {product.category}</div>
            <div><strong>Brand:</strong> {product.brand}</div>
            <div><strong>Price:</strong> ₹{product.price}</div>
            <div><strong>Stock:</strong> {product.stock}</div>
            <div><strong>Rating:</strong> ⭐ {product.rating}</div>
            <div><strong>SKU:</strong> {product.sku || "N/A"}</div>
            <div><strong>Warranty:</strong> {product.warrantyInformation || "N/A"}</div>
            <div><strong>Availability:</strong> {product.availabilityStatus || "N/A"}</div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
