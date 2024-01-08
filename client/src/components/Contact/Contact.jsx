import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-full bg-blue-700 text-white mt-16">
      <div className="max-w-3xl mx-auto px-2 flex flex-col sm:flex-row gap-4 items-center justify-between py-6">
        <p className="uppercase">Be in touch with us:</p>
        <div className="flex rounded-md overflow-hidden">
          <input
            className="py-1 px-2 text-gray-800"
            type="text"
            placeholder="Enter your email"
          />
          <button className="py-1 px-2 bg-gray-700 text-white uppercase">
            Join us
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <AiFillFacebook className="w-6 h-6" />
          <AiOutlineInstagram className="w-6 h-6" />
          <AiOutlineTwitter className="w-6 h-6" />
          <FaPinterest className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
