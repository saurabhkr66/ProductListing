"use client";
import { Product } from "@/types/product";
import Image from "next/image";

// ProductDetailsPage component to display detailed information about a product
// It receives a product object as a prop and displays its details including images, dimensions, and reviews
type ProductDetailsPageProps = {
  thumbnail: string;
  product: Product;
};
export const ProductDetailsPage = ({ product }: { product: ProductDetailsPageProps}) => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={400}
            className="w-full h-auto object-contain rounded"
          />
          <div className="grid grid-cols-3 gap-2">
            {product.images?.map((url, idx) => (
              <Image
                key={idx}
                src={url}
                alt={`Product Image ${idx + 1}`}
                width={100}
                height={100}
                className="rounded object-contain"
              />
              
            ))}
            <div><strong>Dimension:</strong> <div>height:{product.dimensions.height}</div>
              <div>width:{product.dimensions.width}</div>
              <div>depth:{product.dimensions.depth}</div>
              </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-lg font-semibold text-green-700 mb-4">₹{product.price}</div>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div><strong>Brand:</strong> {product.brand}</div>
            <div><strong>Category:</strong> {product.category}</div>
            <div><strong>Stock:</strong> {product.stock}</div>
             <div><strong>Weight:</strong> {product.weight}</div>
              
            <div><strong>Rating:</strong> ⭐ {product.rating}</div>
            <div><strong>SKU:</strong> {product.sku}</div>
            <div><strong>Min. Order Qty:</strong> {product.minimumOrderQuantity}</div>
            <div><strong>Warranty:</strong> {product.warrantyInformation}</div>
            <div><strong>Return Policy:</strong> {product.returnPolicy}</div>
        <div className="flex flex-grid-2"> <strong>Available : </strong>   <div className={product.availabilityStatus==="In Stock" ? "text-green-500":"text-red-500"}> {product.availabilityStatus}</div></div> 

          </div>
          <p className="text-sm text-gray-500">{product.shippingInformation}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews?.map((r, i) => (
            <div key={i} className="border p-4 rounded shadow-sm">
              <p className="font-semibold">{r.reviewerName}</p>
              <p className="text-yellow-500">Rating: {r.rating} ⭐</p>
              <p className="text-sm text-gray-600 italic">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
