"use client";
import React, { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  onAdd: (product: Product) => void;
}

export const AddProductModal: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    price: null as number | null,
    category: "",
    stock: null as number | null,
    thumbnail: "",
  });

  const handleSubmit = () => {
    onAdd({ ...form, id: Date.now() });
    setForm({ title: "", price:0, category: "", stock: 0, thumbnail: "" });
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
          value={form.price}
          onChange={(e) => setForm({ ...form, price: +e.target.value })}
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
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: +e.target.value })}
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
