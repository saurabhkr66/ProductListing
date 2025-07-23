// app/product/[id]/page.tsx
import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage(props: Props) {
  const { id } = props.params;

  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
// This page fetches product details by ID and renders the ProductDetailsPage component