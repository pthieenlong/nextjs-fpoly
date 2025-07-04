"use client";
import React from "react";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import ColorComponent from "../__component/Color.component";
import SizeComponent from "../__component/Size.component";
import QuantityComponent from "../__component/Quantity.component";

function ProductLayout({ product }: { product: any }) {
  const handleAddToCart = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res);
  };
  return (
    <article className="">
      <div className="">
        <div className="">
          <img
            src="http://localhost:8000/product/tshirt.png"
            alt={product.name}
          />
          <img
            src="http://localhost:8000/product/tshirt.png"
            alt={product.name}
          />
          <img
            src="http://localhost:8000/product/tshirt.png"
            alt={product.name}
          />
        </div>
        <div className="">
          <img
            src="http://localhost:8000/product/tshirt.png"
            alt={product.name}
          />
        </div>
      </div>
      <div className="">
        <h1>{product.name}</h1>
        <div className="">
          <Rating
            style={{ maxWidth: 120 }}
            value={product.rating}
            readOnly={true}
          />
          <span>{product.rating}/5</span>
        </div>
        <div className="">
          <p className="text-black font-bold text-xl">${product.price}</p>
          <p
            className={`line-through text-black opacity-40 font-bold text-xl ${
              product.isSale ? "" : "hidden"
            }`}
          >
            ${product.salePrice}
          </p>
          <p
            className={`text-red-500 bg-red-300 rounded-4xl px-2 py-1 ${
              product.isSale ? "" : "hidden"
            }`}
          >
            -{product.salePercent * 100}%
          </p>
        </div>
        <p className="">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="">
          <p className="">Select Colors</p>
          <div className="">
            {product.colors.map((color: string, index: number) => (
              <ColorComponent color={color} key={index} />
            ))}
          </div>
        </div>
        <div className="">
          <p className="">Choose Size</p>
          <div className="">
            {product.sizes.map((size: string, index: number) => {
              <SizeComponent size={size} key={index} />;
            })}
          </div>
        </div>
        <div className="">
          <QuantityComponent></QuantityComponent>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}

export default ProductLayout;
