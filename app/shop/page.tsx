"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";

interface Product {
  category: string;
  id: string;
  type: "product";
  imagePath: string;
  price: number;
  description: string;
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const query = `
    *[_type == "product"] {
      category,
      id,
      price,
      description,
      stockLevel,
      "imagePath": image.asset->url, // Resolve the image URL
      discountPercentage,
      isFeaturedProduct,
      name
    }
  `;
  return await client.fetch(query);
};

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);

      // Extract unique categories
      const uniqueCategories = Array.from(new Set(data.map((p) => p.category)));
      setCategories(uniqueCategories);
    };

    loadProducts();
  }, []);

  // Apply Filters and Sorting
  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by Category
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by Price
    if (sortOption === "price-asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); // Reset to first page after filtering/sorting
  }, [selectedCategory, sortOption, products]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative w-full h-32 sm:h-64">
        <Image src="/Group 78.png" alt="Shop Banner" layout="fill" objectFit="cover" />
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-[#FAF4F4] px-4 py-6 sm:px-12 lg:px-28 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-lg flex items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            Filter
            <select
              className="border px-2 py-1 text-[#9F9F9F]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </h2>
          <div className="flex items-center gap-4 text-lg">
            <BsFillGridFill />
            <MdOutlineViewDay />
            <div className="hidden sm:block border-l-2 border-[#9F9F9F] pl-4">
              <p>Showing {filteredProducts.length} results</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Category Filter */}

          {/* Items Per Page */}
          <div className="flex items-center gap-2">
            <span>Show:</span>
            <select
              className="border px-2 py-1 text-[#9F9F9F]"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <select
              className="border px-2 py-1 text-[#9F9F9F]"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Link key={product.id} href={`/Product/${product.id}`}>
              <div className="bg-white p-4 text-center hover:shadow-lg">
                <Image
                  src={product.imagePath || "/placeholder.png"}
                  alt={product.name}
                  width={600}
                  height={1200}
                  className="w-full h-80 object-cover rounded-md"
                />
                <h3 className="text-sm font-medium text-[#9F9F9F] mt-2">{product.name}</h3>
                <p className="text-lg font-bold text-[#000000]">
                  Rs. {product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-4 py-4 text-gray-600">No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center py-6 gap-2">
        <button
          className="px-4 py-2 border rounded-md hover:bg-[#FAF4F4]"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md hover:bg-[#FAF4F4] ${
              currentPage === index + 1 ? "hover:bg-[#FAF4F4]" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1} 
          </button>
        ))}

        <button
          className="px-4 py-2 border rounded-md hover:bg-[#FAF4F4]"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
