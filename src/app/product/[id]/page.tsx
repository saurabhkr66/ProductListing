// import axios from "axios";
// import { ProductDetailsPage } from "@/components/ProductDetailsPage";
// import { Product } from "@/types/product";

// type ProductPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function ProductPage({ params }: ProductPageProps) {
//   const productId = Number(params.id);

//   const res = await axios.get(`https://dummyjson.com/products/${productId}`);
//   const product: Product = res.data;

//   return <ProductDetailsPage product={product} />;
// }

// src/app/product/[id]/page.tsx

// import axios from "axios";
// import { ProductDetailsPage } from "@/components/ProductDetailsPage";
// import { Product } from "@/types/product";

// type ProductPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function ProductPage({ params }: ProductPageProps) {
//   const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
//   const product: Product = res.data;

//   return <ProductDetailsPage product={product} />;
// }
// src/app/product/[id]/page.tsx

// src/app/product/[id]/page.tsx

import { ProductDetailsPage } from "@/components/ProductDetailsPage";
import { Product } from "@/types/product";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  // Await the params since it's now a Promise
  const { id } = await params;
  
  const res = await fetch(`https://dummyjson.com/products/${Number(id)}`);
  const product: Product = await res.json();

  return <ProductDetailsPage product={product} />;
}


