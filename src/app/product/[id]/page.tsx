import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

export default async function ProductPage({ params }: { params: Product}) {
  const { id } = params; // ✅ Destructure inside
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const product = res.data;

  return <ProductDetailsPage product={product} />;
}
