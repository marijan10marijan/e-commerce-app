import React, { useState } from "react";
import { Link } from "react-router-dom";
import usaFlag from "../../assets/flagUsa.jpg";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const showCart = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 h-[70px] relative ">
      {cartOpen ? <ShoppingCart /> : null}
      <nav className="w-full h-full  items-center justify-between flex">
        {/* Left side ********************************************************/}
        <div className=" items-center gap-3 hidden lg:flex">
          <p className="flex items-center gap-1 font-semibold">
            <img src={usaFlag} alt="usa flag" className="w-7 h-4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
          <p className="flex items-center gap-1 font-semibold">
            USD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
          <Link to="/products/2">
            <p className="font-semibold">Men</p>
          </Link>
          <Link to={"/products/1"}>
            <p className="font-semibold">Woman</p>
          </Link>
          <Link to={"/products/3"}>
            <p className="font-semibold">Children</p>
          </Link>
        </div>

        {/* Center ************************************************************/}
        <div>
          <Link to={"/"} onClick={() => setIsOpen(false)}>
            <h1 className="font-bold text-2xl">HOODIE</h1>
          </Link>
        </div>

        {/* Right side ********************************************************/}
        <div className="gap-12 items-center hidden lg:flex">
          <div className="flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <div className="relative cursor-pointer" onClick={showCart}>
              <p className="absolute top-[-9px] right-[-16px] w-1 h-1 bg-blue-600 text-white font-bold p-3 rounded-full flex items-center justify-center">
                {products.length}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*** CART VISIBLE ON MOBILE NOT ON DESKTOP */}
        <div
          className={"absolute top-8 right-4 cursor-pointer lg:hidden "}
          onClick={showCart}
        >
          <p className="absolute top-[-9px] right-[-16px] w-1 h-1 bg-blue-600 text-white font-bold p-3 rounded-full flex items-center justify-center">
            {products.length}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>

        {/* Hamburger Menu ****************************************************/}
        <div
          className={
            isOpen
              ? "block fixed top-8 right-12 lg:hidden z-[999]"
              : "block absolute top-8 right-12 lg:hidden z-[999]"
          }
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </div>

        {/* Mobile Menu ****************************************************/}
        {isOpen ? (
          <div className="fixed top-0 left-0 w-full h-screen z-[998]  bg-white flex items-center justify-center">
            <div className="flex gap-4 flex-col items-center">
              <Link
                className="text-gray-800 font-semibold"
                to={"/"}
                onClick={() => setIsOpen(false)}
              >
                Homepage
              </Link>
              <Link
                className="text-gray-800 font-semibold"
                to={"/products/1"}
                onClick={() => setIsOpen(false)}
              >
                Woman
              </Link>
              <Link
                className="text-gray-800 font-semibold"
                to={"/products/2"}
                onClick={() => setIsOpen(false)}
              >
                Men
              </Link>
              <Link
                className="text-gray-800 font-semibold"
                to={"/products/3"}
                onClick={() => setIsOpen(false)}
              >
                Children
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
