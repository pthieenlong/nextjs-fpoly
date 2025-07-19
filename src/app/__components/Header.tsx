"use client";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between gap-5 py-5">
          <Link
            href="/"
            className="uppercase font-roboto font-extrabold text-lg sm:text-xl"
          >
            SHOP.CO
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 justify-between items-center">
            <div
              className="flex gap-2 hover:cursor-pointer"
              onClick={() => {
                setBoxOpen(!isBoxOpen);
              }}
            >
              Shop
              <ChevronDownIcon className="w-4" />
            </div>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              On Sale
            </Link>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              New Arrivals
            </Link>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Brands
            </Link>
          </ul>

          {/* Desktop Search */}
          <form
            className="hidden sm:flex bg-neutral rounded-full px-4 py-2 gap-3 w-64 lg:w-80"
            onSubmit={(e) => {
              e.preventDefault();
              if (search.trim()) {
                router.push(`/search?query=${encodeURIComponent(search)}`);
              }
            }}
          >
            <button>
              <MagnifyingGlassIcon className="text-black w-5 opacity-40" />
            </button>
            <input
              type="text"
              id="search"
              name="search"
              className="bg-transparent w-full focus:outline-none text-sm"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* Desktop Icons */}
          <div className="hidden sm:flex justify-center items-center gap-3">
            <Link
              href="/cart"
              className="hover:text-gray-600 transition-colors"
            >
              <ShoppingCartIcon className="w-6" />
            </Link>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              <UserCircleIcon className="w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden pb-4">
          <form
            className="flex bg-neutral rounded-full px-4 py-2 gap-3 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              if (search.trim()) {
                router.push(`/search?query=${encodeURIComponent(search)}`);
              }
            }}
          >
            <button>
              <MagnifyingGlassIcon className="text-black w-5 opacity-40" />
            </button>
            <input
              type="text"
              id="search-mobile"
              name="search"
              className="bg-transparent w-full focus:outline-none text-sm"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <div
                  className="flex gap-2 hover:cursor-pointer items-center"
                  onClick={() => {
                    setBoxOpen(!isBoxOpen);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Shop
                  <ChevronDownIcon className="w-4" />
                </div>
              </li>
              <li>
                <Link
                  href="/"
                  className="block hover:text-gray-600 transition-colors"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block hover:text-gray-600 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block hover:text-gray-600 transition-colors"
                >
                  Brands
                </Link>
              </li>
              <li className="flex gap-4 pt-2">
                <Link
                  href="/cart"
                  className="hover:text-gray-600 transition-colors"
                >
                  <ShoppingCartIcon className="w-6" />
                </Link>
                <Link
                  href="/"
                  className="hover:text-gray-600 transition-colors"
                >
                  <UserCircleIcon className="w-6" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Categories Dropdown */}
      {isBoxOpen && (
        <div className="fixed inset-0 z-50 flex justify-center">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setBoxOpen(false)}
          />
          <div className="relative top-20 bg-white rounded-lg shadow-lg p-6 sm:p-8 z-10 max-w-[1280px] w-full mx-4 h-auto max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setBoxOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <Link className="font-semibold" href="/">
                    Categories
                  </Link>
                  <Link href="/">Shirt</Link>
                  <Link href="/">Jeans</Link>
                </div>
              </div>
              <hr className="h-20 w-0 border-l-[0.1px] opacity-20 place-self-center hidden lg:block" />
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex flex-col gap-2">
                    <Link href="" className="font-semibold">
                      {cat.name}
                    </Link>
                    <Link href="">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-24 h-24 sm:w-36 sm:h-36 object-cover rounded-lg mb-2 shadow-2xl"
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
