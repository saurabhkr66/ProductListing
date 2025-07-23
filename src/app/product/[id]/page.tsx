import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Async function now receives a Promise, so we must await it
export default async function ProductPage(propsPromise: Promise<ProductPageProps>) {
  const { params } = await propsPromise; // ✅ Await the props
  const productId = Number(params.id);   // Convert string to number

  const res = await axios.get(`https://dummyjson.com/products/${productId}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
