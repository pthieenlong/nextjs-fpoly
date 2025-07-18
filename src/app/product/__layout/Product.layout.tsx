import React from "react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import {
  ColorComponent,
  SizeComponent,
  QuantityComponent,
  ProductImageItemComponent,
} from "../__component";
import { API_PUBLIC_ROUTE } from "@/__const/const";
function ProductLayout({ product }: { product: any }) {
  return (
    <article className="flex">
      <div className="flex gap-4 w-[75%] max-w-3xl">
        <div className="flex flex-col justify-between">
          {product.images.map((image: string) => {
            return (
              <ProductImageItemComponent
                source={image == 'https://placehold.co/600x400' ? 'images/products/fff.png' :`${API_PUBLIC_ROUTE}${image}`}
              />
            );
          })}
        </div>
        <div className="relative w-full max-w-sm ml-4">
          <Image
            src={`${API_PUBLIC_ROUTE}${product.images[0]}`}
            alt={product.name}
            fill={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-extrabold text-4xl">{product.name}</h1>
        <div className="flex items-center gap-4">
          <Rating
            style={{ maxWidth: 120 }}
            value={product.rating}
            readOnly={true}
          />
          <span>{product.rating}/5</span>
        </div>
        <div className="flex gap-6">
          <p className="text-black font-bold text-3xl">${product.price}</p>
          <p
            className={`line-through text-black opacity-40 font-bold text-3xl ${
              product.isSale ? "" : "hidden"
            }`}
          >
            $290
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
        <hr />
        <div className="">
          <p className="text-sm mb-2">Choose Color</p>
          <div className="flex gap-4 items-center">
            {product.colors.map((color: string, index: number) => (
              <ColorComponent color={color} key={index} />
            ))}
          </div>
        </div>
        <hr />
        <div className="">
          <p className="text-sm mb-2">Choose Size</p>
          <div className="flex gap-4">
            {product.sizes.map((size: string, index: number) => {
              return (
                <SizeComponent size={size} key={index} isActive={index == 0} />
              );
            })}
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-4">
          <QuantityComponent></QuantityComponent>
          <button
            className="px-10 py-2 bg-black text-white rounded-full"
            // onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductLayout;
