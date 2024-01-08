import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const product = item.attributes;
  const imgUrl1 = `${import.meta.env.VITE_IMG_URL}${
    item.attributes?.img?.data?.attributes?.url
  }`;
  const imgUrl2 = `${import.meta.env.VITE_IMG_URL}${
    item.attributes?.img2?.data?.attributes?.url
  }`;

  return (
    <Link to={`/product/${item.id}`} key={item.id} className="relative">
      <div className="relative w-full h-[300px] transition duration-300 ease-in group overflow-hidden">
        <img
          loading="lazy"
          src={imgUrl1}
          alt=""
          className="object-cover w-full h-full absolute top-0 left-0 z-10 bg-gray-700"
        />
        {product.img2.data !== null ? (
          <img
            loading="lazy"
            src={imgUrl2}
            alt=""
            className="object-cover w-full h-full absolute  group-hover:z-20 top-0 left-0 bg-gray-700"
          />
        ) : null}
      </div>
      <p className="mt-2">{product.title}</p>
      <div className="flex items-center gap-6">
        <p className="line-through text-gray-600">${product.price + 20}</p>
        <p className="font-semibold">${product.price}</p>
      </div>
      {product.isNew ? (
        <p className="absolute top-1 left-1 py-1 px-1 bg-white text-xs font-semibold text-gray-800 z-50">
          New Season
        </p>
      ) : null}
    </Link>
  );
};

export default Card;
