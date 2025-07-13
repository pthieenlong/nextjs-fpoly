"use client";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import Image from "next/image";
import { API_PUBLIC_ROUTE } from "@/__const/const";

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
export interface IProduct {
  name: string;
  price: number;
  slug: string;
  images: string[];
  categories: string[];
  rating: number;
  isSale: boolean;
  salePercent: number;
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
  const imageSrc = `${API_PUBLIC_ROUTE}${image}`;
  return (
    <article className={`max-w-[275px] max-h-[500px]`}>
      <div
        className={`${
          className ? className : "w-[250px] h-[300px]"
        } overflow-hidden inline-block rounded-lg relative`}
      >
        <Image
          loader={() => imageSrc}
          src={imageSrc}
          alt={slug}
          className="w-full hover:scale-125 transition-all"
          crossOrigin="anonymous"
          fill={true}
          // width={100}
          // height={100}
          unoptimized
        />
      </div>
      <div className="">
        <Link href={`/product/${slug}`} className="font-bold text-xl">
          {name}
        </Link>
        <div className="flex items-center gap-5">
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly={true} />
          <span>{rating}/5</span>
        </div>
        <div className="flex gap-3">
          <p className="text-black font-bold text-xl">${price}</p>
          <p
            className={`line-through text-black opacity-40 font-bold text-xl ${
              isSale ? "" : "hidden"
            }`}
          >
            ${salePrice}
          </p>
          <p
            className={`text-red-500 bg-red-300 rounded-4xl px-2 py-1 ${
              isSale ? "" : "hidden"
            }`}
          >
            -{salePercent * 100}%
          </p>
        </div>
      </div>
    </article>
  );
}
