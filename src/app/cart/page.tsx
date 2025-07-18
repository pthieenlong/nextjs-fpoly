import { Breadcrumbs, Typography, Link } from "@mui/material";
import React from "react";
import CartItemComponent from "./__component/CartItem.component";
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
        <section className="flex py-8">
          <section className="w-[70%] flex flex-col gap-4">
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
          <section></section>
          {/* Sumary */}
        </section>
      </section>
    </section>
  );
}

export default CartPage;
