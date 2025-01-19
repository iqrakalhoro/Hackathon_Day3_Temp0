import React from "react";
import Image from "next/image";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";
import Link from "next/link";

const Shop = () => {

  return (
    <div className="bg-white min-h-screen">

    
      <div className="relative w-full h-32 sm:h-64">
        <Image
          src="/Group 78.png"
          alt="Shop Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

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
          </h2>
          <div className="flex items-center gap-4 text-lg">
            <BsFillGridFill />
            <MdOutlineViewDay />
            <div className="hidden sm:block border-l-2 border-[#9F9F9F] pl-4">
              <p>Showing 1-16 of 32 results</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Show:</span>
            <select className="border px-2 py-1 text-[#9F9F9F]">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <select className="border px-2 py-1 text-[#9F9F9F]">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

     
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <Link href="/singleproduct/1">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic1.png"
        alt="Trenton modular sofa_3"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Trenton modular sofa_3
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>

  <Link href="/singleproduct/2">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic2.png"
        alt="Granite dining table with dining chair"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
        Granite dining table with dining chair
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>

  <Link href="/singleproduct/3">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic3.png"
        alt="Outdoor bar table and stool"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
        Outdoor bar table and stool
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>

  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic4.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
        Plain console with teak mirror
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic5.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Grain coffee table
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic6.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Kent coffee table
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic7.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Round coffee table_color 2
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic8.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Reclaimed teak coffee table
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic9.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Plain console_
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic10.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Reclaimed teak Sideboard
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic11.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      SJP_0825 
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic12.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Bella chair and table
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic13.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Granite square side table
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic14.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Asgaard sofa
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic15.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Maya sofa three seater
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>
  <Link href="/singleproduct/4">
    <div className="bg-white p-4 text-center hover:shadow-lg">
      <Image
        src="/Pic16.png"
        alt="Plain console with teak mirror"
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-700 mt-2">
      Outdoor sofa set
      </h3>
      <p className="text-lg font-bold text-gray-900">Rs. 25,000.00</p>
    </div>
  </Link>

</div>

      <div className="flex flex-wrap justify-center items-center gap-4 py-6">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="px-4 py-2 bg-[#FFF9E5] text-[#000000] rounded hover:bg-[#FBEBB5]"
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 bg-[#FFF9E5] text-[#000000] rounded hover:bg-[#FBEBB5]">
          Next
        </button>
      </div>

      {/* Delivery Section */}
      <div className="bg-[#FAF4F4] px-4 py-12 sm:px-12 lg:px-24 lg:h-72 lg:p-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-start">
            <h3 className="text-xl lg:text-2xl mb-2">Free Delivery</h3>
            <p className="text-sm text-[#9F9F9F]">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-start">
            <h3 className="text-xl lg:text-2xl mb-2">90 Days Return</h3>
            <p className="text-sm text-[#9F9F9F]">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-start">
            <h3 className="text-xl lg:text-2xl mb-2">Secure Payment</h3>
            <p className="text-sm text-[#9F9F9F]">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
