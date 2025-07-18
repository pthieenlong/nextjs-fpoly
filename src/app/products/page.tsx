"use client";
import { API_ROUTE } from "@/__const/const";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import {
  AdjustmentsVerticalIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Product from "../__components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

function ProductPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") as string)
  );
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${API_ROUTE}/product?page=${currentPage}`)
      .then((result) => result.data)
      .then((data: any) => {
        if (data.success) {
          setProducts(data.data);
          setTotalPage(data.pagination.totalPage);
        }
      });
    axios
      .get(`${API_ROUTE}/category`)
      .then((result) => result.data)
      .then((data: any) => {
        if (data.success) {
          setCategories(data.data);
        }
      });
  }, [currentPage]);

  return (
    <section className="max-w-[1280px] m-auto">
      <header className="my-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Homepage
          </Link>
          <Link underline="hover" color="inherit" href="/product">
            All products
          </Link>
          <Typography>Searching</Typography>
        </Breadcrumbs>
      </header>
      <section className=" flex gap-5 justify-between my-4">
        <section className="w-[calc(1280px-75%)] flex flex-col gap-4 [&_hr]:border-gray-400 border border-gray-400 px-6 py-3 rounded-2xl h-fit">
          <article className="flex justify-between items-center">
            <p className="font-bold text-xl">Filters</p>
            <p className="w-6 h-6">
              <AdjustmentsVerticalIcon className="w-full h-auto" />
            </p>
          </article>
          <hr />
          <article>
            {categories.map((category: any) => {
              return (
                <div
                  key={category.slug}
                  className="flex justify-between items-center"
                >
                  <Link href="" underline="none" color="gray">
                    {category.name}
                  </Link>
                  <p className="w-4 h-4">
                    <ChevronRightIcon className="w-full h-auto" />
                  </p>
                </div>
              );
            })}
          </article>
          <hr />
          <article>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Price</p>
              <p className="w-4 h-4">
                <ChevronDownIcon className="w-full h-auto" />
              </p>
            </div>
            <div className="">{/* Slider */}</div>
          </article>
          <hr />
          <div className="flex items-center justify-center">
            <button className="px-6 py-3 bg-black text-white rounded-2xl">
              Apply Filter
            </button>
          </div>
        </section>
        <section className="max-w-[calc(1280px-25%)]">
          <header className="flex justify-between items-center">
            <h2 className="text-2xl font-extrabold">Casual</h2>
            <p className="font-light">
              Showing 1 - 10 of {products.length ? products.length : 0} Products
            </p>
          </header>
          <section className="flex flex-wrap gap-x-14 my-4 gap-y-4">
            {products.map((product: any) => {
              return (
                <Product
                  image={product.images[0]}
                  name={product.name}
                  slug={product.slug}
                  price={product.price}
                  rating={product.rating}
                  isSale={product.isSale}
                  salePercent={product.salePercent}
                  key={product.slug}
                  className="w-[275px] h-[275px]"
                ></Product>
              );
            })}
          </section>
          <section className="flex items-center gap-8">
            <div className="">
              <button
                className="flex gap-2 px-4 py-2 border border-gray-400 rounded-xl items-center "
                type="button"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Previous</span>
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-3 [&_button]:w-10 [&_button]:rounded-xl [&_button]:border-gray-400 [&_button]:border [&_button]:p-2 [&_button]:hover:cursor-pointer">
              {Array.from({ length: totalPage }, (_, i) => (
                <Link
                  type="button"
                  key={i + 1}
                  href={`?page=${i + 1}`}
                  className={`px-3 py-1 rounded ${
                    currentPage == i + 1 ? "bg-black" : ""
                  }`}
                  color={currentPage == i + 1 ? "#fff" : "#000"}
                  underline="none"
                >
                  {i + 1}
                </Link>
              ))}
            </div>
            <div className="">
              <button
                className="flex gap-2 px-4 py-2 border border-gray-400 rounded-xl items-center "
                type="button"
              >
                <span>Next</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductPage;
