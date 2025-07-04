"use client";
import React, { useState } from "react";
const QuantityComponent = ({ initQuantity = 0 }: { initQuantity?: number }) => {
  const [quantity, setQuantity] = useState(initQuantity);
  return (
    <div className="">
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
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
