"use client";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import Image from "next/image";
import { API_PUBLIC_ROUTE } from "@/config/const";
import axios from "axios";

export interface IProductProp {
  image: string;
  name: string;
  slug: string;
  price: number;
  rating: number;
  isSale: boolean;
  salePercent: number;
  className?: string;
}

export default function Product({
  image,
  name,
  slug,
  price,
  rating = 4.5,
  isSale = false,
  salePercent = 0,
  className = "",
}: IProductProp) {
  const salePrice = isSale ? (price * salePercent) / 100 : 0;
  const imageSrc =
    image === "https://placehold.co/600x400"
      ? `${image}`
      : `${API_PUBLIC_ROUTE}${image}`;
  return (
    <article className="flex flex-col h-full">
      <div
        className={`${
          className ? className : "w-full h-[300px]"
        } overflow-hidden rounded-lg relative`}
      >
        <Image
          loader={() => imageSrc}
          src={imageSrc}
          alt={slug}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          crossOrigin="anonymous"
          fill={true}
          unoptimized
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <Link
          href={`/product/${slug}`}
          className="font-bold text-lg sm:text-xl hover:text-gray-600 transition-colors"
        >
          {name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-5 mt-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly={true} />
          <span className="text-sm sm:text-base">{rating}/5</span>
        </div>
        <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap">
          <p className="text-black font-bold text-lg sm:text-xl">${price}</p>
          <p
            className={`line-through text-black opacity-40 font-bold text-lg sm:text-xl ${
              isSale ? "" : "hidden"
            }`}
          >
            ${salePrice}
          </p>
          <p
            className={`text-red-500 bg-red-100 rounded-full px-2 py-1 text-sm ${
              isSale ? "" : "hidden"
            }`}
          >
            -{salePercent * 100}%
          </p>
        </div>
        <button
          className="mt-4 hover:cursor-pointer px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition-colors text-sm sm:text-base"
          // onClick={handleAddToCart}
          // disabled={adding}
        >
          {/* {adding ? "Adding..." : "Add to cart"} */}
          Add to cart
        </button>
      </div>
    </article>
  );
}
