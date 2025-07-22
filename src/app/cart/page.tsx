"use client";

import { Breadcrumbs, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItemComponent from "./__component/CartItem.component";
import { TagIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

// Giả sử bạn dùng sessionId cho user chưa đăng nhập
const SESSION_ID = "demo-session-id"; // Thực tế nên lấy từ cookie hoặc localStorage

export default function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/cart?sessionId=${SESSION_ID}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="my-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Homepage
          </Link>
          <Typography>Cart</Typography>
        </Breadcrumbs>
      </header>
      <section>
        <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold">
          your cart
        </h1>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 py-8">
          {/* Cart Items */}
          <section className="lg:col-span-2 flex flex-col px-4 sm:px-8 py-4 pb-6 rounded-xl border border-gray-300">
            {cart && cart.items && cart.items.length > 0 ? (
              cart.items.map((item: any) => (
                <CartItemComponent
                  key={item.productId + (item.size || "") + (item.color || "")}
                  image={item.image}
                  title={item.name}
                  slug={item.productId}
                  size={item.size}
                  color={item.color}
                  defaultPrice={item.price}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                Your cart is empty.
              </div>
            )}
          </section>

          {/* Order Summary */}
          <section className="flex flex-col gap-4 rounded-xl border-gray-300 px-4 sm:px-6 py-4 border h-fit">
            <h2 className="w-full text-xl sm:text-2xl mb-4 font-semibold">
              Order Summary
            </h2>
            <article className="flex flex-col gap-4 sm:gap-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm sm:text-base">Subtotal</p>
                <p className="text-lg sm:text-xl font-bold">
                  $
                  {cart
                    ? cart.items.reduce(
                        (sum: number, i: any) => sum + i.price * i.quantity,
                        0
                      )
                    : 0}
                </p>
              </div>
              {/* Discount, Delivery Fee, ... có thể tính thêm nếu muốn */}
            </article>
            <hr className="my-3 border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg">Total</p>
              <p className="text-lg sm:text-xl font-bold">
                $
                {cart
                  ? cart.items.reduce(
                      (sum: number, i: any) => sum + i.price * i.quantity,
                      0
                    )
                  : 0}
              </p>
            </div>
            <article className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex gap-2 sm:gap-4 border border-gray-300 rounded-full pl-3 pr-1 py-2 items-center flex-1">
                <label htmlFor="coupon">
                  <TagIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </label>
                <input
                  type="text"
                  id="coupon"
                  name="coupon"
                  className="focus:outline-none flex-1 text-sm sm:text-base"
                  placeholder="Coupon code"
                />
              </div>
              <button className="px-4 sm:px-5 py-2 bg-black text-white rounded-full text-sm sm:text-base hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </article>
            <button className="flex justify-center items-center gap-3 sm:gap-5 bg-black text-white py-3 rounded-full hover:cursor-pointer hover:bg-gray-800 transition-colors text-sm sm:text-base">
              <span>Go to Checkout</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}
