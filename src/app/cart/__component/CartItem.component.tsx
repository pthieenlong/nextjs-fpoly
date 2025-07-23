"use client";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { API_PUBLIC_ROUTE } from "@/config/const";
import { useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "@/lib/slice/cartSlice";
import { CartItem } from "../__types/cart.type";
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
  const [quantity, setQuantity] = useState(props.quantity ?? 1);

  const dispatch = useDispatch();
  const imageSrc =
    props.image === "https://placehold.co/600x400"
      ? `${props.image}`
      : `${API_PUBLIC_ROUTE}${props.image}`;
  const cartItem = {
    image: props.image,
    slug: props.slug,
    name: props.title,
    price: props.defaultPrice,
    quantity: props.quantity,
  } as CartItem;

  return (
    <article className="relative py-6 flex w-full gap-4 border-b border-gray-300">
      <button
        className="absolute z-10  right-0"
        onClick={() => {
          dispatch(removeItem({ slug: props.slug }));
        }}
      >
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
          <p className="">${props.defaultPrice}</p>
          <div className="flex">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-bl-xl rounded-tl-xl bg-gray-200"
              onClick={() => {
                dispatch(
                  updateQuantity({
                    ...cartItem,
                    quantity: cartItem.quantity - 1,
                  })
                );
                setQuantity(quantity - 1);
              }}
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <p className="w-8 flex items-center justify-center text-lg bg-gray-200">
              {quantity}
            </p>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-br-xl rounded-tr-xl bg-gray-200"
              onClick={() => {
                dispatch(addItem({ ...cartItem, quantity: 1 }));
                setQuantity(quantity + 1);
              }}
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItemComponent;
