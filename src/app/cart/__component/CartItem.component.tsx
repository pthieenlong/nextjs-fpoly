"use client";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { API_PUBLIC_ROUTE } from "@/config/const";
export interface CartItemProps {
  title: string;
  slug: string;
  image: string;
  size: string;
  color: string;
  defaultPrice: number;
  quantity: number;
}
function CartItemComponent(props: CartItemProps) {
  const [price, setPrice] = useState(props.defaultPrice ?? 1);
  const [quantity, setQuantity] = useState(props.quantity ?? 1);

  const imageSrc =
    props.image === "https://placehold.co/600x400"
      ? `${props.image}`
      : `${API_PUBLIC_ROUTE}${props.image}`;
  return (
    <article className="relative py-6 flex w-full gap-4 border-b border-gray-300">
      <button className="absolute z-10  right-0">
        <TrashIcon className="w-6 h-6 text-red-500" />
      </button>
      <div className="relative w-48 overflow-hidden rounded-xl">
        <Image fill={true} src={imageSrc} alt={props.slug}></Image>
      </div>
      <div className="w-full">
        <Link href={`/product/${props.slug}`} className="text-xl font-semibold">
          {props.title}
        </Link>
        <div className="">
          <p>
            Size: <span className="capitalize text-gray-500">{props.size}</span>
          </p>
          <p>
            Color:{" "}
            <span className="capitalize text-gray-500">{props.color}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="">${price * quantity}</p>
          <div className="flex">
            <button className="w-8 h-8 flex items-center justify-center rounded-bl-xl rounded-tl-xl bg-gray-200">
              <MinusIcon className="w-4 h-4" />
            </button>
            <p className="w-8 flex items-center justify-center text-lg bg-gray-200">
              {quantity}
            </p>
            <button className="w-8 h-8 flex items-center justify-center rounded-br-xl rounded-tr-xl bg-gray-200">
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItemComponent;
