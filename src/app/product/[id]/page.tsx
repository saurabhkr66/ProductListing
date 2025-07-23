import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";

type ProductPageParams = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageParams) {
  const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
  const product = res.data;

  return <ProductDetailsPage product={product} />;
}
