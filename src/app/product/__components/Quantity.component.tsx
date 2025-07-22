"use client";
import React, { useState } from "react";
const QuantityComponent = ({ initQuantity = 0 }: { initQuantity?: number }) => {
  const [quantity, setQuantity] = useState(initQuantity);
  return (
    <div className="flex items-center">
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
        className="rounded-l-3xl bg-gray-400 px-4 py-2"
      >
        -
      </button>
      <p className="bg-gray-400 px-4 py-2">{quantity}</p>
      <button
      className="rounded-r-3xl bg-gray-400 px-5 py-2"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityComponent;
