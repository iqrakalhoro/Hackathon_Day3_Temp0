import { client } from "@/sanity/lib/client"

const query = `*[ _type == "product"]{
    id,
    name,
      price,
    description,
       category,
      "Image": image.asset._ref, 
  }`
  export interface Product {
      find(arg0: any): Product;
      category: string;
      id: string;
      type: "product" ;
      image: {
          asset : {
              _ref : string
              _type: "image"
          }
      };
      price: number;
      description: string;
      stockLevel: number;
      Image: string;
      discountPercentage: number;
      isFeaturedProduct: number;
      name: string;
    }
export const data: Product = await   client.fetch(query) 