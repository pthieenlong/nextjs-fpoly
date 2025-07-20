"use client";
import { API_ROUTE } from "@/config/const";
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
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
        <button
          onClick={() => setIsFiltersOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white"
        >
          <AdjustmentsVerticalIcon className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 my-4">
        {/* Filters Sidebar */}
        <section
          className={`lg:col-span-1 ${
            isFiltersOpen
              ? "fixed inset-0 z-50 lg:relative lg:inset-auto"
              : "hidden lg:block"
          }`}
        >
          {isFiltersOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsFiltersOpen(false)}
            />
          )}
          <div className="bg-white border border-gray-300 px-4 sm:px-6 py-4 rounded-2xl h-fit lg:relative lg:z-auto z-50 max-h-[90vh] lg:max-h-none overflow-y-auto">
            <article className="flex justify-between items-center mb-4">
              <p className="font-bold text-lg sm:text-xl">Filters</p>
              <div className="flex items-center gap-2">
                <AdjustmentsVerticalIcon className="w-5 h-5 lg:hidden" />
                <button
                  onClick={() => setIsFiltersOpen(false)}
                  className="lg:hidden hover:text-gray-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </article>
            <hr className="border-gray-300 mb-4" />
            <article className="mb-4">
              {categories.map((category: any) => {
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

        {/* Products Grid */}
        <section className="lg:col-span-3">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold">Casual</h2>
            <p className="font-light text-sm sm:text-base">
              Showing 1 - 10 of {products.length ? products.length : 0} Products
            </p>
          </header>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
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
                  className="w-full h-[275px]"
                ></Product>
              );
            })}
          </section>

          {/* Pagination */}
          <section className="flex justify-center sm:flex-row items-center gap-4 sm:gap-8">
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
              {Array.from({ length: totalPage }, (_, i) => (
                <Link
                  type="button"
                  key={i + 1}
                  href={`?page=${i + 1}`}
                  className={`px-3 py-1 rounded text-sm sm:text-base hover:bg-gray-100 transition-colors ${
                    currentPage == i + 1
                      ? "bg-black text-white"
                      : "border border-gray-400"
                  }`}
                  underline="none"
                  color={`${currentPage == i + 1 ? "white" : "black"}`}
                >
                  {i + 1}
                </Link>
              ))}
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

export default ProductPage;
