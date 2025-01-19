"use client"
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbUserExclamation } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-[#000000] lg:p-6">
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center lg:justify-center">
        <div className="flex lg:pr-[300px]"></div>
      

       
        <div className="flex space-x-6 lg:items-end lg:pl-[80px]">
          <TbUserExclamation className="text-2xl hover:text-[#9F9F9F] cursor-pointer"></TbUserExclamation>
          <CiSearch className="text-2xl hover:text-[#9F9F9F] cursor-pointer" />
          <IoMdHeartEmpty className="text-2xl hover:text-[#9F9F9F] cursor-pointer" />
          <HiOutlineShoppingCart className="text-2xl hover:text-[#9F9F9F] cursor-pointer">
          </HiOutlineShoppingCart>
        </div>

        <button
          className="lg:hidden text-2xl ml-4 hover:text-[#9F9F9F] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>


      {menuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 items-center bg-[#FBEBB5] text-lg font-medium py-4">
        <Link href="#" className="hover:underline">Home</Link>
          <Link href="/Shop" className="hover:underline">Shop</Link>
          <Link href="#" className="hover:underline">About</Link>
          <Link href="/Contact" className="hover:underline">Contact</Link></div>
      )}
    </nav>
  );
};

export default Navbar;
