"use client";

import Link from "next/link";
import FAQ from "../Components/FAQ/FAQ"; 

const HelpCenter = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Help Center</h1>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Link href="/help/orders" className="p-6 bg-gray-100 rounded-lg hover:bg-gray-200">
          <h3 className="text-xl font-semibold">📦 Orders & Tracking</h3>
          <p className="text-gray-600">Learn how to track and manage your orders.</p>
        </Link>
        <Link href="/help/shipping" className="p-6 bg-gray-100 rounded-lg hover:bg-gray-200">
          <h3 className="text-xl font-semibold">🚚 Shipping & Delivery</h3>
          <p className="text-gray-600">Find information on shipping times and costs.</p>
        </Link>
        <Link href="/help/refunds" className="p-6 bg-gray-100 rounded-lg hover:bg-gray-200">
          <h3 className="text-xl font-semibold">🔄 Returns & Refunds</h3>
          <p className="text-gray-600">Understand our return and refund policy.</p>
        </Link>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default HelpCenter;
