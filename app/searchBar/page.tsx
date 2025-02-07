"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

// Product Interface
interface Product {
  id: string;
  name: string;
  price: number;
  imagePath: string;
}

type SearchDropdownProps = {
  onClose: () => void; // ✅ Explicitly define the type
};

// Function to Fetch Products from Sanity
const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] {
    id,
    name,
    price,
    "imagePath": image.asset->url
  }`;
  return await client.fetch(query);
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Load products when dropdown opens
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredProducts([]);
      return;
    }

    // Filter products
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="absolute top-12 right-0 w-72 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <AiOutlineSearch size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-2 focus:outline-none"
          value={searchQuery}
          onChange={handleSearch}
          autoFocus
        />
        <button onClick={onClose} className="text-gray-500">
          <AiOutlineClose size={20} />
        </button>
      </div>

      {/* Search Results */}
      <div className="mt-4 max-h-60 overflow-y-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/Product/${product.id}`} onClick={onClose}>
              <div className="flex items-center p-2 border-b hover:bg-gray-100 cursor-pointer">
                <Image
                  src={product.imagePath || "/placeholder.png"}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="ml-3">
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">Rs. {product.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : searchQuery ? (
          <p className="text-gray-600 text-center">No products found</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchDropdown;
