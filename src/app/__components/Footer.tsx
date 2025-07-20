import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-white relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Contact */}
      <section className="bg-black flex flex-col lg:flex-row items-center py-8 sm:py-12 px-4 sm:px-8 lg:px-16 justify-between rounded-2xl sm:rounded-3xl gap-6 lg:gap-8">
        <div className="text-white text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-center lg:text-left">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </div>
        <form className="flex flex-col w-full lg:w-auto gap-3 sm:gap-4">
          <div className="flex gap-2 items-center px-4 py-3 bg-white rounded-xl sm:rounded-2xl">
            <label htmlFor="subscribe">
              <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black opacity-40" />
            </label>
            <input
              type="text"
              name="subscribe"
              id="subscribe"
              placeholder="Enter your email address"
              className="text-black opacity-40 flex-1 text-sm sm:text-base focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="bg-white text-black rounded-xl sm:rounded-2xl px-4 py-3 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </section>

      {/* Footer Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mt-8 sm:mt-12">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="font-extrabold text-xl sm:text-2xl lg:text-[2.25rem]"
          >
            SHOP.CO
          </Link>
          <p className="text-sm sm:text-base text-gray-600">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </Link>
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </Link>
            <Link href="" className="hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5">
          <h4 className="text-black tracking-[2px] sm:tracking-[3px] font-medium text-sm sm:text-base">
            COMPANY
          </h4>
          <ul className="flex flex-col text-sm sm:text-base gap-2 sm:gap-2.5">
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              About
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Features
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Works
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Career
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5">
          <h4 className="text-black tracking-[2px] sm:tracking-[3px] font-medium text-sm sm:text-base">
            HELP
          </h4>
          <ul className="flex flex-col text-sm sm:text-base gap-2 sm:gap-2.5">
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Customer Support
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Delivery Details
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Term & Conditions
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5">
          <h4 className="text-black tracking-[2px] sm:tracking-[3px] font-medium text-sm sm:text-base">
            FAQ
          </h4>
          <ul className="flex flex-col text-sm sm:text-base gap-2 sm:gap-2.5">
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Account
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Manage Deliveries
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Orders
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Payments
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5">
          <h4 className="text-black tracking-[2px] sm:tracking-[3px] font-medium text-sm sm:text-base">
            RESOURCES
          </h4>
          <ul className="flex flex-col text-sm sm:text-base gap-2 sm:gap-2.5">
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Free eBooks
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Development Tutorial
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              How to - Blog
            </Link>
            <Link
              href=""
              className="text-black opacity-60 leading-[1.25rem] hover:opacity-80 transition-opacity"
            >
              Youtube Playlist
            </Link>
          </ul>
        </div>
      </section>
      <hr className="border-gray-200 mt-8 sm:mt-12 mb-4 sm:mb-6" />
      <section className="pb-6">
        <p className="text-black opacity-60 text-sm sm:text-base text-center sm:text-left">
          pthieenlong &copy; 2000 - 2025, All Rights Reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
