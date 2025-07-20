import { API_ROUTE } from "@/__const/const";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import {
  AdjustmentsVerticalIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Product from "../__components/Product";
import { useState } from "react";

async function SearchLayout({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = (await searchParams).query;
  const productsFetched = await fetch(`${API_ROUTE}/product?search=${query}`);
  const categoriesFetched = await fetch(`${API_ROUTE}/category`);
  const products = await productsFetched.json();
  const categories = await categoriesFetched.json();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
          <AdjustmentsVerticalIcon className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 my-4">
        {/* Filters Sidebar */}
        <section className="hidden lg:block lg:col-span-1">
          <div className="bg-white border border-gray-300 px-4 sm:px-6 py-4 rounded-2xl h-fit">
            <article className="flex justify-between items-center mb-4">
              <p className="font-bold text-lg sm:text-xl">Filters</p>
              <AdjustmentsVerticalIcon className="w-5 h-5" />
            </article>
            <hr className="border-gray-300 mb-4" />
            <article className="mb-4">
              {categories.data.map((category: any) => {
                return (
                  <div
                    key={category.slug}
                    className="flex justify-between items-center py-2"
                  >
                    <Link
                      href=""
                      underline="none"
                      color="gray"
                      className="hover:text-black"
                    >
                      {category.name}
                    </Link>
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                );
              })}
            </article>
            <hr className="border-gray-300 mb-4" />
            <article className="mb-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base sm:text-lg">Price</p>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
              <div className="mt-2">{/* Slider */}</div>
            </article>
            <hr className="border-gray-300 mb-4" />
            <div className="flex items-center justify-center">
              <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                Apply Filter
              </button>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="lg:col-span-3">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold">
              Search Results
            </h2>
            <p className="font-light text-sm sm:text-base">
              Showing 1 - 10 of {products.success ? products.data.length : 0}{" "}
              Products
            </p>
          </header>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {!products.success ? (
              <p className="col-span-full text-center text-gray-500 py-8">
                No products found
              </p>
            ) : (
              products.data.map((product: any) => {
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
                    className="w-full h-[275px]"
                  ></Product>
                );
              })
            )}
          </section>

          {/* Pagination */}
          <section className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div>
              <button
                className="flex gap-2 px-4 py-2 border border-gray-400 rounded-xl items-center hover:bg-gray-50 transition-colors"
                type="button"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span className="text-sm sm:text-base">Previous</span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <button
                type="button"
                className="px-3 py-1 rounded text-sm sm:text-base bg-black text-white"
              >
                1
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded text-sm sm:text-base border border-gray-400 hover:bg-gray-100 transition-colors"
              >
                2
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded text-sm sm:text-base border border-gray-400 hover:bg-gray-100 transition-colors"
              >
                3
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded text-sm sm:text-base border border-gray-400 hover:bg-gray-100 transition-colors"
              >
                4
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded text-sm sm:text-base border border-gray-400 hover:bg-gray-100 transition-colors"
              >
                5
              </button>
            </div>
            <div>
              <button
                className="flex gap-2 px-4 py-2 border border-gray-400 rounded-xl items-center hover:bg-gray-50 transition-colors"
                type="button"
              >
                <span className="text-sm sm:text-base">Next</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SearchLayout;
