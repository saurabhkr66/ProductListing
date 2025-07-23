import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

interface ProductPageProps {
  params: {
    id: string; // route param is always a string
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id); // Convert to number

  const res = await axios.get(`https://dummyjson.com/products/${productId}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
