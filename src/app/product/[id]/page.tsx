import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

export default async function ProductPage(props: {
  params: { id: string };
}) {
  const { params } = await props; // ✅ Just await it, no need to type as Promise
  const productId = Number(params.id);

  const res = await axios.get(`https://dummyjson.com/products/${productId}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
