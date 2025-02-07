"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Swal from "sweetalert2";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { Product } from "@/types/Product";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, quantity: number) => void;
}
interface Cart{
  [x:string]:any
}

export const CartContext = createContext({} as Cart);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]); 

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartItems();
      setCart(items);
    };
    fetchCart();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const removeItem = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
    });

    if (result.isConfirmed) {
      await removeFromCart(id);
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      Swal.fire("Removed!", "", "success");
    }
  };

  const changeQuantity = async (id: string, quantity: number) => {
    if (quantity < 1) return;
    await updateCartQuantity(id, quantity);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
