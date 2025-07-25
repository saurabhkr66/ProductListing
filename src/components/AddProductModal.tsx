"use client";
import React, { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  onAdd: (product: Product) => void;
  isPopover?: boolean;
  onClose: () => void;
}

export const AddProductModal: React.FC<Props> = ({ onAdd, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    price: null as number | null,
    category: "",
    stock: null as number | null,
    thumbnail: "",
  });

const handleSubmit = () => {
    // Ensure all required fields are filled
    if (!form.title || !form.category || form.price === null || form.price <= 0) {
      alert("Please fill in all required fields");
      return;
    }

    const newProduct: Product = {
      // or use a proper ID generation method
      title: form.title,
      price: form.price ?? 0,
      category: form.category,
      stock: form.stock ?? 0,
      thumbnail: form.thumbnail,
      id: 0,
      description: "",
      discountPercentage: 0,
      rating: 0,
      tags: [],
      brand: "",
      sku: "",
      weight: 0,
      dimensions: {
        depth: 0,
        width: 0,
        height: 0
      },
      warrantyInformation: "",
      shippingInformation: "",
      availabilityStatus: "",
      reviews: [],
      returnPolicy: "",
      minimumOrderQuantity: 0,
      meta: {
        createdAt: "",
        updatedAt: "",
        barcode: "",
        qrCode: ""
      },
      images: []
    };

    onAdd(newProduct);
    setForm({ title: "", price: 0, category: "", stock: 0, thumbnail: "" });
    onClose(); // Close the modal after adding
  };

  return (
    // input form for adding a new product
    <div className="p-4 border rounded mb-4  shadow">
      <h3 className="text-lg font-semibold mb-2">Add Product</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price !== null ? form.price : ""}
          onChange={(e) => setForm({ ...form, price: e.target.value === "" ? null : +e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Stock"
          value={form.stock !== null ? form.stock : ""}
          onChange={(e) => setForm({ ...form, stock: e.target.value === "" ? null : +e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Image URL"
          value={form.thumbnail}
          onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
          className="border p-2 rounded col-span-full"
        />
      </div>
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Add Product
      </button>
    </div>
  );
};
