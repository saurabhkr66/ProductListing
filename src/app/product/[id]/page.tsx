import axios from "axios";
import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

// ✅ Page Component
export default async function ProductPage(props: Promise<{ params: { id: string } }>) {
  const { params } = await props; // ✅ Await props
  const productId = Number(params.id);

  const res = await axios.get(`https://dummyjson.com/products/${productId}`);
  const product: Product = res.data;

  return <ProductDetailsPage product={product} />;
}
