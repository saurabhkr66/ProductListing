// app/product/[id]/page.tsx
import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
