import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

interface ProductPageProps {
  params: {
    id: number;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
