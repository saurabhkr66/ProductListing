import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  const res = await axios.get(`https://dummyjson.com/products/${productId}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
