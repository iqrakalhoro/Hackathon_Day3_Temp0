"use client";

import Link from "next/link";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types/Product";
import { urlFor } from "@/sanity/lib/image";

const Cart = () => {
  const { cart, removeItem, changeQuantity } = useCart()
  console.log(Cart)


//   const handleProceed = () => {
//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success!", "Your order has been successfully processed!", "success");
//       }
//     });
//   };

  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image src="/cart.png" alt="Shop Banner" height={400} width={1500} />
      </div>

      <div>
       
      {/* Cart Totals */}
      <div className="py-3 flex flex-col items-center">
        <div className="bg-[#FFF9E5] space-y-5 border-2 border-[#FFF9E5] lg:w-[360px] sm:w-[260px]">
          <h2 className="text-lg font-semibold my-4 text-center">Cart Totals</h2>
          {cart.length === 0 ? (
          <p className="text-center py-10">Your cart is empty.</p>
        ) : (
          cart && cart.map((item: Product) => (
             
            <div key={item.id} className="grid grid-cols-4 mt-6 text-xs lg:text-base items-center">
              <div className="flex items-center space-x-2">
                {/* <Image
                  className="bg-[#FBEBB5] rounded-lg max-w-[100px] w-10 h-10 md:w-16 md:h-16 lg:w-28 lg:h-16"
                  src={urlFor(item.image).url()}
                  alt="Product Image"
                  width={100}
                  height={70}
                /> */}
                <h2 className="text-[#000000] pl-4">{item.name}</h2>
              </div>
              <p className="text-center text-[#000000] pl-11">Rs. {item.price}</p>
              <input
                type="number"
                className="w-8 h-8 border border-[#9F9F9F] rounded-md m-auto text-center cursor-pointer"
                min="1"
                value={item.stockLevel}
                onChange={(e) => changeQuantity(item.id, parseInt(e.target.value))}
              />
              <div className="flex gap-2">
                <p>Rs. {item.price * item.stockLevel}</p>
                <AiFillDelete
                  className="text-[#000000] flex text-right text-2xl cursor-pointer"
                  onClick={() => removeItem(item.id)}
                  
                />
                
              </div>
              
            </div>
            
          ))
        )}
      </div>
          <div className="flex justify-between px-10">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm text-[#9F9F9F]">
  Rs. {cart?.reduce((total: number, item: Product) => total + (item.price * (item.stockLevel || 1)), 0)}
  
</p>

          </div>
          <div className="m-auto w-fit">
            <Link href="/checkout">
              <button className="border-[#000000] border-[1px] text-[#000000] py-3 px-16 text-lg rounded-md">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
