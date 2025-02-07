"use client";

import Link from "next/link";

const ReturnsAndRefunds = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">🔄 Returns & Refunds</h1>

      <p className="text-gray-700">
        Learn about our return and refund policies.
      </p>

      <h2 className="text-xl font-semibold mt-6">📅 Return Policy</h2>
      <p>• You can return items within 30 days of purchase.</p>
      <p>• Products must be unused and in their original packaging.</p>

      <h2 className="text-xl font-semibold mt-6">💰 How to Request a Refund</h2>
      <p>1. Go to your <Link href="/myaccount" className="text-[#B88E2F] underline">My account Page</Link>.</p>
      <p>2. Select the order and click "Request Return".</p>
      <p>3. Our team will review your request within 2-3 business days.</p>

      <h2 className="text-xl font-semibold mt-6">⏳ When Will I Get My Refund?</h2>
      <p>Refunds are processed within 5-10 business days after approval.</p>

      <Link href="/help" className="mt-6 inline-block text-[#B88E2F] underline">← Back to Help Center</Link>
    </div>
  );
};

export default ReturnsAndRefunds;
