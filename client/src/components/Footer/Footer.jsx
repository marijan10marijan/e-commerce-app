import React from "react";
import payment from "../../assets/payment.jpg";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 pt-20">
      <footer className="w-full">
        {/* LEFT  ********************************************************/}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div className="flex-1">
            <h2 className="font-semibold text-lg mb-2">Categories</h2>
            <p className="text-gray-700 mb-1">Men</p>
            <p className="text-gray-700 mb-1">Woman</p>
            <p className="text-gray-700 mb-1">Shoes</p>
            <p className="text-gray-700 mb-1">Accessories</p>
            <p className="text-gray-700 mb-1">New Arrivals</p>
          </div>
          {/* CENTER  ********************************************************/}
          <div className="sm:w-1/4">
            <h2 className="font-semibold text-lg">About</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, necessitatibus, quis similique quod velit assumenda
              iure, voluptatum reiciendis facere deserunt rem! Maxime eos
              pariatur facere!
            </p>
          </div>
          {/* RIGHT ********************************************************/}
          <div className="sm:w-1/4">
            <h2 className="font-semibold text-lg">Contact</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, necessitatibus, quis similique quod velit assumenda
              iure, voluptatum reiciendis facere deserunt rem! Maxime eos
              pariatur facere!
            </p>
          </div>
        </div>
        {/* COPYRIGHT ********************************************************/}
        <div className="flex flex-col sm:flex-row gap-4  sm:justify-between items-center">
          <div>
            <p className="text-blue-600 font-bold text-2xl italic text-center sm:text-start">
              Hoodie
            </p>
            <p className="text-gray-700 text-sm">
              &copy; Copyright <span>{new Date().getFullYear()}</span>. All
              rights reserved.
            </p>
          </div>
          <div>
            <img
              className="h-8 md:h-12"
              src={payment}
              alt="payment process methods"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
