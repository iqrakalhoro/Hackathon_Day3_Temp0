"use client";

import Link from "next/link";

const ShippingDetails = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">🚚 Shipping & Delivery</h1>

      <p className="text-gray-700">
        Find details about shipping options, costs, and estimated delivery times.
      </p>

      <h2 className="text-xl font-semibold mt-6">🕒 Estimated Delivery Time</h2>
      <p>• Standard Shipping: 5-7 business days</p>
      <p>• Express Shipping: 2-3 business days</p>
      <p>• International Shipping: 10-15 business days</p>

      <h2 className="text-xl font-semibold mt-6">📍 How to Change Your Shipping Address</h2>
      <p>Contact our support team before your order ships to request changes.</p>

      <h2 className="text-xl font-semibold mt-6">💰 Shipping Costs</h2>
      <p>Shipping fees are calculated at checkout based on your location.</p>

      <Link href="/help" className="mt-6 inline-block text-[#B88E2F] underline">← Back to Help Center</Link>
    </div>
  );
};

export default ShippingDetails;
