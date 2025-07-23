
// export interface Dimensions {
// depth:number;
// width:number;
// height:number;
// }
// export interface Review {
//     rating:number;
//     comment:string;
//     Date:string;
//     reviewerName:string;
//     reviewerEmail:string;
// }
// export interface Meta{
//     createdAt: string;
//   updatedAt: string;
//   barcode: string;
//   qrCode: string;
// }

// export interface Product{
//     id:number;
//    title:string;
//    description:string;
//    category:string;
//    price:number;
//    discountPercentage:number;
//     rating:number;
//     stock:number;
//     tags:string[];
//     brand:string;
//     sku:string;
//     weight:number;
//     dimensions:Dimensions;
//     warrantyInformation:string;
//     shippingInformation: string;
//   availabilityStatus: string;
//   reviews: Review[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: Meta;
//   images: string[];
//   thumbnail: string;
// }
// types/product.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    Date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}
