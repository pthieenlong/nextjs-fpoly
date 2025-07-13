"use client";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Header() {
  const categories = [
    { name: "Casual", image: "/category/casual.png" },
    { name: "Formal", image: "/category/formal.png" },
    { name: "Party", image: "/category/party.png" },
    { name: "Gym", image: "/category/gym.png" },
  ];
  const [isBoxOpen, setBoxOpen] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();
  return (
    <div className="sticky z-1 flex max-w-[1280px] flex-row items-center justify-between gap-5 py-5 m-auto">
      <Link
        href="/"
        className="uppercase font-roboto font-extrabold text-[1.25rem]"
      >
        SHOP.CO
      </Link>
      <ul className="flex gap-[1rem] justify-between items-center">
        <div
          className="flex gap-2 hover:cursor-pointer"
          onClick={() => {
            setBoxOpen(!isBoxOpen);
          }}
        >
          Shop
          <ChevronDownIcon className="w-[1rem]" />
        </div>
        <Link href="/">On Sale</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Brands</Link>
      </ul>
      <form
        className="flex bg-neutral rounded-4xl px-[1rem] py-[.5rem] gap-3 w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          if (search.trim()) {
            router.push(`/search?query=${encodeURIComponent(search)}`);
          }
        }}
      >
        <button>
          <MagnifyingGlassIcon className="text-black w-[1.25rem] opacity-40" />
        </button>
        <input
          type="text"
          id="search"
          name="search"
          className="bg-transparent w-full focus:outline-none"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="flex justify-center items-center gap-3">
        <Link href="/">
          <ShoppingCartIcon className="w-[1.5rem]" />
        </Link>
        <Link href="/">
          <UserCircleIcon className="w-[1.5rem]" />
        </Link>
      </div>
      {isBoxOpen && (
        <div className="fixed inset-0 z-50 flex justify-center">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setBoxOpen(false)}
          />
          <div className="relative top-25 bg-white rounded-lg shadow-lg p-8 z-10  max-w-[1280px] w-full h-[350px]">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setBoxOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex gap-5">
              <div className="flex flex-col gap-3">
                {/* <div className="flex flex-col gap-1">
                  <Link className="font-semibold" href="/">
                    All new products
                  </Link>
                  <Link href="/">Pants</Link>
                  <Link href="/">T-shirt</Link>
                </div> */}
                <div className="flex flex-col gap-1">
                  <Link className="font-semibold" href="/">
                    Categories
                  </Link>
                  <Link href="/">Shirt</Link>
                  <Link href="/">Jeans</Link>
                </div>
              </div>
              <hr className="h-20 w-0 border-l-[0.1px] opacity-20 place-self-center" />
              <div className="flex items-start gap-5">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex flex-col gap-2">
                    <Link href="" className="font-semibold">
                      {cat.name}
                    </Link>
                    <Link href="">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-36 h-36 object-cover rounded-lg mb-2 shadow-2xl"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
