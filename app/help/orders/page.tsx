"use client";

import Link from "next/link";

const OrdersAndTracking = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">📦 Orders & Tracking</h1>

      <p className="text-gray-700">
        Learn how to manage your orders and track shipments.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔍 How to Track Your Order</h2>
      <p>1. Go to your <Link href="/myaccount" className="text-[#B88E2F] underline">My account Page</Link>.</p>
      <p>2. Find your order and click "Track Order".</p>
      <p>3. You will see the current status and expected delivery date.</p>

      <h2 className="text-xl font-semibold mt-6">❓ Missing an Order?</h2>
      <p>If your order is delayed or missing, please <Link href="/contact" className="text-[#B88E2F] underline">contact support</Link>.</p>

      <Link href="/help" className="mt-6 inline-block text-[#B88E2F] underline">← Back to Help Center</Link>
    </div>
  );
};

export default OrdersAndTracking;
