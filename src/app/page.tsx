"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductLayout } from "./__layout/Product.layout";
import { API_ROUTE } from "@/__const/const";
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
    <div className="">
      <img src={url} alt={alt} />
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
        className="py-16 px-6 bg-position-center"
        style={{ backgroundImage: "url('thumbnail/hero2.png')" }}
      >
        {/* Hero section */}
        <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 mt-4">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
              Shop Now
            </button>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="text-xl font-bold text-gray-900">200+</p>
                <p className="text-gray-600">International Brands</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">2,000+</p>
                <p className="text-gray-600">High-Quality Products</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">30,000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Brands section */}
      <div className="bg-black w-full py-6">
        <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-black">
          {brands.map((brand) => {
            return <Brand url={brand.url} alt={brand.alt} key={brand.id} />;
          })}
        </section>
      </div>
      {/* Products section */}
      <ProductLayout
        title="new arrivals"
        href="/products"
        products={newProducts}
      />
      <hr className="my-4 w-[1280px] m-auto opacity-20" />
      <ProductLayout
        title="top selling"
        href="/products"
        products={bestProducts}
      />
      {/* Category section */}
      <div className="bg-gray-200 my-10 mx-auto w-[1280px] rounded-3xl">
        <h1 className="text-[48px] uppercase font-extrabold text-center ">
          browse by dress style
        </h1>
        <div className="[&_div]:h-[250px] [&_div]:w-full m-auto w-[1280px] grid grid-cols-3 grid-rows-2 gap-4 [&_div]:bg-no-repeat [&_div]:bg-center [&_div]:bg-cover px-16 py-8">
          <div
            className="w-full rounded-3xl px-5 py-10 text-black font-bold text-4xl"
            style={{
              backgroundImage: "url('/category/casual.png')",
            }}
          >
            Casual
          </div>
          <div
            className=" w-full col-span-2 rounded-3xl px-5 py-10 text-black font-bold text-4xl"
            style={{
              backgroundImage: "url('/category/formal.png')",
            }}
          >
            Formal
          </div>
          <div
            className=" col-span-2 row-start-2 rounded-3xl px-5 py-10 text-black font-bold text-4xl"
            style={{
              backgroundImage: "url('/category/party.png')",
            }}
          >
            Party
          </div>
          <div
            className=" col-start-3 row-start-2 rounded-3xl px-5 py-10 text-black font-bold text-4xl"
            style={{
              backgroundImage: "url('/category/gym.png')",
            }}
          >
            Gym
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
