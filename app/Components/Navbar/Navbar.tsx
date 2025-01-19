"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbUserExclamation } from "react-icons/tb";
import Link from "next/link";
import { BsBagX } from "react-icons/bs";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className={`${pathName === "/" ? "bg-[#FBEBB5]" : "bg-white"} text-[#000000] lg:p-4`}>
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center lg:justify-center">
     
        <div className="flex lg:pr-[300px]"></div>

    
        <div className="hidden lg:flex flex-row space-x-8 text-lg font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/blog" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        
        <div className="flex space-x-6 lg:items-end lg:pl-[80px]">
          <Link href="/myaccount">
            <TbUserExclamation className="text-2xl hover:text-[#9F9F9F] cursor-pointer" />
          </Link>
          <CiSearch className="text-2xl hover:text-[#9F9F9F] cursor-pointer" />
          <IoMdHeartEmpty className="text-2xl hover:text-[#9F9F9F] cursor-pointer" />
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center px-2 py-[1px]"
          >
            <HiOutlineShoppingCart className="text-2xl hover:text-[#9F9F9F]" />
          </button>
        </div>

        
        <button
          className="lg:hidden text-2xl ml-4 hover:text-[#9F9F9F] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

   
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="absolute top-0 right-0 w-64 bg-[#FBEBB5]  h-[60%] flex flex-col space-y-4 items-center text-lg font-medium py-6">
            <button
              className="absolute top-4 right-4 text-3xl text-[#000000] hover:text-[#9F9F9F]"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/blog" className="hover:underline" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}

      
      <div
        className={`fixed top-0 right-0 lg:h-[746px] lg:w-[417px] bg-white shadow-lg transform z-30 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="outline-none text-[24px] hover:text-[#FBEBB5]"
          >
            <BsBagX />
          </button>
        </div>
        <div className="p-4 flex flex-col h-[70%]">
     
          <div className="flex-grow overflow-y-auto">
            <div className="flex items-center justify-between pb-2 mb-2">
              <div className="flex items-center">
                <Image
                  className="bg-[#FBEBB5] rounded-lg"
                  src="/Asgaard sofa 1.png"
                  alt="Asgaard sofa"
                  height={90}
                  width={111}
                />
                <div className="p-8">
                  <p className="font-medium">Asgaard Sofa</p>
                  <p className="text-lg text-[#000000]">
                    1 <span className="ml-4"> X </span>
                    <span className="font-medium text-[#B88E2F] ml-4">Rs. 250,000.00</span>
                  </p>
                </div>
              </div>
              <IoIosCloseCircle className="text-[#9F9F9F] h-6 w-6 cursor-pointer" />
            </div>
          </div>


          <div className="pt-4">
            <div className="flex justify-between items-center mb-4 border-b p-4">
              <p className="font-medium text-lg">Subtotal</p>
              <p className="font-bold text-lg text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
            <div className="flex flex-cols-2 gap-2 items-center">
              <Link
                href="/Cart"
                className="h-10 w-40 text-center border border-[#000000] rounded-full text-[#000000] py-2 hover:bg-[#FBEBB5]"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                className="h-10 w-40 text-center border border-[#000000] rounded-full text-[#000000] py-2 hover:bg-[#FBEBB5]"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
