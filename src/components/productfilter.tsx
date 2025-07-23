"use client";
import React from "react";

// Update the interface to match the actual data structure
interface Category {
  slug: string;
  name: string;
  url: string;
}

interface Props {
  search: string;
  onSearchChange: (val: string) => void;
  category: string;
  onCategoryChange: (val: string) => void;
  sortBy: string;
  onSortChange: (val: string) => void;
  categories: Category[]; // Changed from string[] to Category[]
}

export const ProductFilters: React.FC<Props> = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories,
}) => (
  <div className="flex flex-wrap gap-4 mb-4">
    <input
      type="text"
      placeholder="Search title..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    />
    <select
      value={category}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    >
      <option value="">All Categories</option>
      {categories.map((cate) => (
        <option key={cate.slug} value={cate.slug}>
          {cate.name}
        </option>
      ))}
    </select>
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    >
      <option value="">Sort By</option>
      <option value="price">Price (Low to High)</option>
      <option value="stock">Stock</option>
      <option value="title">Title (A-Z)</option>
    </select>
  </div>
);
