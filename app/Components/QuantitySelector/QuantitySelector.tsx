"use client";

import React, { useState } from "react";

const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex items-center border border-[#9F9F9F] rounded">
      <button
        className="px-4 py-4 text-[#000000] hover:bg-[#FFF9E5]"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="px-4 py-4 text-[#000000]">{quantity}</span>
      <button
        className="px-4 py-4 text-[#000000] hover:bg-[#FFF9E5]"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
