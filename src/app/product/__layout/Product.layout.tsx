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
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Images */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-row lg:flex-col justify-between gap-2 lg:gap-4 order-2 lg:order-1">
          {product.images.map((image: string, index: number) => {
            return (
              <ProductImageItemComponent
                key={index}
                source={
                  image == "https://placehold.co/600x400"
                    ? "images/products/fff.png"
                    : `${API_PUBLIC_ROUTE}${image}`
                }
              />
            );
          })}
        </div>
        <div className="relative w-full h-64 lg:h-96 lg:max-w-sm order-1 lg:order-2">
          <Image
            src={`${API_PUBLIC_ROUTE}${product.images[0]}`}
            alt={product.name}
            fill={true}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl">
          {product.name}
        </h1>
        <div className="flex items-center gap-4">
          <Rating
            style={{ maxWidth: 120 }}
            value={product.rating}
            readOnly={true}
          />
          <span className="text-sm sm:text-base">{product.rating}/5</span>
        </div>
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <p className="text-black font-bold text-2xl sm:text-3xl">
            ${product.price}
          </p>
          <p
            className={`line-through text-black opacity-40 font-bold text-2xl sm:text-3xl ${
              product.isSale ? "" : "hidden"
            }`}
          >
            $290
          </p>
          <p
            className={`text-red-500 bg-red-100 rounded-full px-2 py-1 text-sm ${
              product.isSale ? "" : "hidden"
            }`}
          >
            -{product.salePercent * 100}%
          </p>
        </div>
        <p className="text-sm sm:text-base text-gray-600">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <hr />
        <div className="">
          <p className="text-sm mb-2 font-medium">Choose Color</p>
          <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
            {product.colors.map((color: string, index: number) => (
              <ColorComponent color={color} key={index} />
            ))}
          </div>
        </div>
        <hr />
        <div className="">
          <p className="text-sm mb-2 font-medium">Choose Size</p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            {product.sizes.map((size: string, index: number) => {
              return (
                <SizeComponent size={size} key={index} isActive={index == 0} />
              );
            })}
          </div>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <QuantityComponent></QuantityComponent>
          <button
            className="px-6 sm:px-10 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
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
