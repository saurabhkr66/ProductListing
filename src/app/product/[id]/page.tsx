import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";

export default async function ProductPage({ params }: { params: any }) {
  const { id } = params; // ✅ Destructure inside
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const product = res.data;

  return <ProductDetailsPage product={product} />;
}
