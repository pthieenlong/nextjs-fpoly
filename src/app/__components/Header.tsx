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
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="uppercase font-roboto font-extrabold text-lg sm:text-xl"
          >
            SHOP.CO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div
              className="flex gap-2 hover:cursor-pointer items-center"
              onClick={() => {
                setBoxOpen(!isBoxOpen);
              }}
            >
              Shop
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            <Link href="/" className="hover:text-gray-600">
              On Sale
            </Link>
            <Link href="/" className="hover:text-gray-600">
              New Arrivals
            </Link>
            <Link href="/" className="hover:text-gray-600">
              Brands
            </Link>
          </nav>

          {/* Desktop Search */}
          <form
            className="hidden md:flex bg-neutral rounded-full px-4 py-2 gap-3 max-w-md flex-1 mx-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (search.trim()) {
                router.push(`/search?query=${encodeURIComponent(search)}`);
              }
            }}
          >
            <button type="submit">
              <MagnifyingGlassIcon className="text-black w-5 h-5 opacity-40" />
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
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="hover:text-gray-600">
              <ShoppingCartIcon className="w-6 h-6" />
            </Link>
            <Link href="/auth" className="hover:text-gray-600">
              <UserCircleIcon className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="hover:text-gray-600">
              <ShoppingCartIcon className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-gray-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form
            className="flex bg-neutral rounded-full px-4 py-2 gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (search.trim()) {
                router.push(`/search?query=${encodeURIComponent(search)}`);
              }
            }}
          >
            <button type="submit">
              <MagnifyingGlassIcon className="text-black w-5 h-5 opacity-40" />
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => {
                  setBoxOpen(!isBoxOpen);
                }}
              >
                <span>Shop</span>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
              <Link href="/" className="hover:text-gray-600">
                On Sale
              </Link>
              <Link href="/" className="hover:text-gray-600">
                New Arrivals
              </Link>
              <Link href="/" className="hover:text-gray-600">
                Brands
              </Link>
              <Link href="/auth" className="hover:text-gray-600">
                <UserCircleIcon className="w-6 h-6 inline mr-2" />
              </Link>
            </nav>
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
          <div className="relative top-16 bg-white rounded-lg shadow-lg p-4 sm:p-8 z-10 max-w-7xl w-full mx-4 max-h-[350px] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-xl hover:text-gray-600"
              onClick={() => setBoxOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <Link className="font-semibold hover:text-gray-600" href="/">
                    Categories
                  </Link>
                  <Link href="/" className="hover:text-gray-600">
                    Shirt
                  </Link>
                  <Link href="/" className="hover:text-gray-600">
                    Jeans
                  </Link>
                </div>
              </div>
              <hr className="h-20 w-0 border-l-[0.1px] opacity-20 place-self-center hidden lg:block" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex flex-col gap-2">
                    <Link href="" className="font-semibold hover:text-gray-600">
                      {cat.name}
                    </Link>
                    <Link href="">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-24 h-24 sm:w-36 sm:h-36 object-cover rounded-lg mb-2 shadow-lg"
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
