export interface Product {
    id : string;
    name: string;
    type: "product" ;
    image: {
        asset : {
            _ref : string
            _type: "image"
        }
    };
    price: number
    description: string
    discountPercentage: number
    category: string
    stockLevel: number
}