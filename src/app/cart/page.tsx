import { Breadcrumbs, Typography, Link } from "@mui/material";
import React from "react";
import CartItemComponent from "./__component/CartItem.component";
import { TagIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

async function CartPage() {
  return (
    <section className="max-w-[1280px] m-auto">
      <header className="my-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Homepage
          </Link>
          <Typography>Cart</Typography>
        </Breadcrumbs>
      </header>
      <section className="">
        <h1 className="text-4xl uppercase font-bold">your cart</h1>
        <section className="flex py-8 gap-4">
          <section className="w-[70%] flex flex-col px-8 py-4 pb-6 rounded-xl border border-gray-300 first:pt-0">
            <CartItemComponent
              image="http://localhost:3000/images/products/sleeve-striped-t-shirt.png"
              title="Gradient Graphic T-shirt"
              slug="gradient-graphic-t-shirt"
              size="large"
              color="white"
              defaultPrice={145}
              quantity={1}
            ></CartItemComponent>
            <CartItemComponent
              image="http://localhost:3000/images/products/sleeve-striped-t-shirt.png"
              title="Gradient Graphic T-shirt"
              slug="gradient-graphic-t-shirt"
              size="large"
              color="white"
              defaultPrice={145}
              quantity={1}
            ></CartItemComponent>
            <CartItemComponent
              image="http://localhost:3000/images/products/sleeve-striped-t-shirt.png"
              title="Gradient Graphic T-shirt"
              slug="gradient-graphic-t-shirt"
              size="large"
              color="white"
              defaultPrice={145}
              quantity={1}
            ></CartItemComponent>
          </section>
          <section className="flex flex-col gap-4 rounded-xl border-gray-300 w-[30%] px-6 py-4 border">
            <h2 className="w-full text-2xl mb-4 font-semibold">Order Sumary</h2>
            <article className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Subtotal</p>
                <p className="text-xl font-bold">$565</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Discount</p>
                <p className="text-xl text-red-500 font-bold">-$113</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Delivery Fee</p>
                <p className="text-xl font-bold">$15</p>
              </div>
            </article>
            <hr className="my-3 border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg">Total</p>
              <p className="text-xl font-bold">$467</p>
            </div>
            <article className="flex justify-between items-center">
              <div className="flex gap-4 border border-gray-300 rounded-full pl-3 pr-1 py-2 items-center">
                <label htmlFor="coupon">
                  <TagIcon className="w-6 h-6" />
                </label>
                <input
                  type="text"
                  id="coupon"
                  name="coupon"
                  className="focus:outline-none"
                />
              </div>
              <button className="px-5 py-2 bg-black text-white rounded-full">
                Apply
              </button>
            </article>
            <button className="flex justify-center items-center gap-5 bg-black text-white py-3 rounded-full hover:cursor-pointer">
              <span>Go to Checkout</span>
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CartPage;
