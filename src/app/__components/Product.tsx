'use client'
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'
import { useState } from "react";

interface IProductProp {
  image: string,
  title: string,
  slug: string,
  price: number,
  rating: number,
  isSale: boolean,
  salePercent: number
}
export default function Product( { image, title, slug, price, rating = 4.5, isSale = false, salePercent = 0 } : IProductProp) {
  return (
    <article className="">
      <div className="flex items-center justify-center">
        <img src={image} alt={slug} className="w-full" />
      </div>
      <div className="">
        <Link href={`/product/${slug}`}>{title}</Link>
        <Rating style={{ maxWidth: 250 }} value={rating} readOnly={true} />
      </div>
    </article>
  );
}