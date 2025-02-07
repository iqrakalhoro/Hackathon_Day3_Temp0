// "use client";

// import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// // Define Product Type
// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   imagePath: string;
// }

// // Define Context Type
// interface WishlistContextType {
//   wishlist: Product[];
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (id: string) => void;
//   isInWishlist: (id: string) => boolean;
// }

// // Create Context
// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const WishlistProvider = ({ children }: { children: ReactNode }) => {
//   const [wishlist, setWishlist] = useState<Product[]>([]);

//   // Load Wishlist from Local Storage on Page Load
//   useEffect(() => {
//     const savedWishlist = localStorage.getItem("wishlist");
//     if (savedWishlist) {
//       setWishlist(JSON.parse(savedWishlist));
//     }
//   }, []);

//   // Save Wishlist to Local Storage on Update
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Add to Wishlist
//   const addToWishlist = (product: Product) => {
//     setWishlist((prevWishlist) => {
//       if (prevWishlist.find((item) => item.id === product.id)) {
//         return prevWishlist; // Avoid duplicates
//       }
//       return [...prevWishlist, product];
//     });
//   };

//   // Remove from Wishlist
//   const removeFromWishlist = (id: string) => {
//     setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
//   };

//   // Check if Item is in Wishlist
//   const isInWishlist = (id: string) => {
//     return wishlist.some((item) => item.id === id);
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };
