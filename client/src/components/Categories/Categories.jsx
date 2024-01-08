import React from "react";
import womanShirt from "../../assets/woman_t-shirt.jpg";
import coat from "../../assets/coat.jpg";
import pullover from "../../assets/pullover.jpg";
import scarf from "../../assets/scarf.jpg";
import shoes from "../../assets/shoes.jpg";
import skirt from "../../assets/skirt.jpg";
import sunglasses from "../../assets/sunglasses.jpg";

const Categories = () => {
  return (
    <div className="w-full px-2  sm:h-screen flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 my-20 overflow-hidden">
      <div className="w-full  sm:w-1/4 h-full flex sm:flex-col gap-2 overflow-hidden relative">
        <img
          src={skirt}
          alt=""
          className="w-1/2 sm:w-full h-[250px] sm:h-1/2 object-cover"
        />
        <p className="absolute top-[50%] sm:top-[25%] left-[25%] sm:left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-fit py-1 px-2 bg-white text-gray-700">
          Sale
        </p>
        <img
          src={scarf}
          alt=""
          className="w-1/2 sm:w-full h-[250px] sm:h-1/2 object-cover"
        />
        <p className="absolute top-[50%] sm:top-[75%] left-[75%] sm:left-[50%]  transform translate-x-[-50%] translate-y-[-50%] w-fit py-1 px-2 bg-white text-gray-700">
          Woman
        </p>
      </div>
      <div className="w-full sm:w-1/4 h-full relative">
        <img
          src={coat}
          alt=""
          className="w-full h-[320px] sm:h-full object-cover"
        />
        <p className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-fit py-1 px-2 bg-white text-gray-700">
          New Season
        </p>
      </div>

      {/*  +++++++++++++++++++++++++++++++++++++++++ */}
      <div className="w-full sm:w-1/2 h-full flex flex-col gap-2 overflow-hidden">
        <div className="h-1/2 w-full flex gap-2 relative">
          <img
            src={sunglasses}
            alt=""
            className="w-1/2 h-[250px] sm:h-full object-cover"
          />
          <p className="absolute top-[50%] left-[25%] transform translate-x-[-50%] translate-y-[-50%] w-fit py-1 px-2 bg-white text-gray-700">
            Men
          </p>
          <img
            src={pullover}
            alt=""
            className="w-1/2 h-[250px] sm:h-full object-cover "
          />
          <p className="absolute top-[50%] left-[75%] transform translate-x-[-50%] translate-y-[-50%] w-fit py-1 px-2 bg-white text-gray-700">
            Accessories
          </p>
        </div>
        <div className="h-1/2 w-full relative">
          <img src={shoes} alt="" className="w-full h-full object-cover" />
          <p className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-fit py-1 px-2 bg-white text-gray-700">
            Shoes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
