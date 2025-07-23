"use client";
import React from "react";

interface Category {
  slug: string;
}

interface Props {
  search: string;
  onSearchChange: (val: string) => void;
  category: string;
  onCategoryChange: (val: string) => void;
  sortBy: string;
  onSortChange: (val: string) => void;
  categories: (string | Category)[]; // Accept both types
}
// ProductFilters component to filter products by search term, category, and sort order
// It receives search term, category, sort order, and a list of categories as props
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
      className="border p-2 rounded w-full md:w-1/3"
    />
    <select
      value={category}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/4"
    >
      <option value="">All Categories</option>
      {categories.map((cate) => (
        <option key={cate.slug} value={cate.slug}>{cate.slug}</option>
      ))}
    </select>
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/4"
    >
      <option value="">Sort By</option>
      <option value="price">Price</option>
      <option value="stock">Stock</option>
      <option value="title">Title</option>
    </select>
  </div>
);
