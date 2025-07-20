"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductLayout } from "./__layout/Product.layout";
import { API_ROUTE } from "@/config/const";
import { useEffect, useState } from "react";
const brands = [
  {
    id: "versace",
    url: "brands/versace.png",
    alt: "versace",
  },
  {
    id: "gucci",
    url: "brands/gucci.png",
    alt: "gucci",
  },
  {
    id: "prada",
    url: "brands/prada.png",
    alt: "prada",
  },
  {
    id: "ck",
    url: "brands/ck.png",
    alt: "ck",
  },
  {
    id: "zara",
    url: "brands/zara.png",
    alt: "zara",
  },
];

function Brand({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="flex items-center justify-center p-4">
      <img
        src={url}
        alt={alt}
        className="max-h-12 sm:max-h-16 object-contain"
      />
    </div>
  );
}
function Home() {
  const [bestProducts, setBestProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_ROUTE}/product/best`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) setBestProducts(data.data);
        return data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(`${API_ROUTE}/product/new`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) setNewProducts(data.data);
        return data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <div
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-position-center bg-cover bg-center"
        style={{ backgroundImage: "url('thumbnail/hero2.png')" }}
      >
        {/* Hero section */}
        <section className="max-w-7xl mx-auto">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
              Shop Now
            </button>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center lg:text-left">
              <div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">
                  200+
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  International Brands
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">
                  2,000+
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  High-Quality Products
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">
                  30,000+
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Brands section */}
      <div className="bg-black w-full py-6">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            {brands.map((brand) => {
              return <Brand url={brand.url} alt={brand.alt} key={brand.id} />;
            })}
          </div>
        </section>
      </div>
      {/* Products section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <ProductLayout
          title="new arrivals"
          href="/products"
          products={newProducts}
        />
      </div>
      <hr className="my-4 max-w-7xl mx-auto opacity-20" />
      <div className="px-4 sm:px-6 lg:px-8">
        <ProductLayout
          title="top selling"
          href="/products"
          products={bestProducts}
        />
      </div>
      {/* Category section */}
      <div className="bg-gray-200 my-8 sm:my-10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl sm:rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] uppercase font-extrabold text-center mb-6 sm:mb-8">
            browse by dress style
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div
              className="h-48 sm:h-64 lg:h-[250px] rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-6 sm:py-10 text-black font-bold text-2xl sm:text-3xl lg:text-4xl flex items-center justify-center bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/category/casual.png')",
              }}
            >
              Casual
            </div>
            <div
              className="h-48 sm:h-64 lg:h-[250px] sm:col-span-2 lg:col-span-1 rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-6 sm:py-10 text-black font-bold text-2xl sm:text-3xl lg:text-4xl flex items-center justify-center bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/category/formal.png')",
              }}
            >
              Formal
            </div>
            <div
              className="h-48 sm:h-64 lg:h-[250px] sm:col-span-2 lg:col-span-1 rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-6 sm:py-10 text-black font-bold text-2xl sm:text-3xl lg:text-4xl flex items-center justify-center bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/category/party.png')",
              }}
            >
              Party
            </div>
            <div
              className="h-48 sm:h-64 lg:h-[250px] rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-6 sm:py-10 text-black font-bold text-2xl sm:text-3xl lg:text-4xl flex items-center justify-center bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/category/gym.png')",
              }}
            >
              Gym
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
