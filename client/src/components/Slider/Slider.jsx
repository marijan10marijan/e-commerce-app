import React, { useState } from "react";
import pullover from "../../assets/pullover.jpg";
import womanShirt from "../../assets/woman_t-shirt.jpg";
import shoes from "../../assets/shoes.jpg";

const sliderImages = [pullover, womanShirt, shoes];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const increaseImageIndex = () => {
    setIndex(index === sliderImages.length - 1 ? 0 : (prev) => prev + 1);
  };
  const decreaseImageIndex = () => {
    setIndex(index === 0 ? sliderImages.length - 1 : (prev) => prev - 1);
  };

  return (
    <div className="h-[calc(100vh-70px)] w-full flex relative  overflow-hidden ">
      <div
        className="flex transition duration-1000 ease-in"
        style={{
          minWidth: `${100 * sliderImages.length}vw`,
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        <img
          src={sliderImages[0]}
          alt=""
          className={`w-[100vw]  h-full object-cover object-center`}
        />
        <img
          src={sliderImages[1]}
          alt=""
          className={`w-[100vw]   h-full object-cover object-center`}
        />
        <img
          src={sliderImages[2]}
          alt=""
          className={`w-[100vw]   h-full object-cover object-center`}
        />
      </div>
      <button
        className="absolute bottom-16 left-[calc(50%-45px)] md:left-[calc(50%-55px)]"
        onClick={decreaseImageIndex}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <button
        className="absolute bottom-16 right-[calc(50%-45px)] md:right-[calc(50%-55px)]"
        onClick={increaseImageIndex}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
