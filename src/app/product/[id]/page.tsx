import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product"; // Ensure this path is correct

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
