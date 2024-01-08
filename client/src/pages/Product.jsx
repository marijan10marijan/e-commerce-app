import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const Product = () => {
  const dispatch = useDispatch();

  const catId = useParams().id;
  const { data, loading, error } = useFetch(`/products/${catId}?populate=*`);
  const img1 =
    import.meta.env.VITE_IMG_URL + data?.attributes?.img?.data?.attributes?.url;
  const img2 =
    import.meta.env.VITE_IMG_URL +
    data?.attributes?.img2?.data?.attributes?.url;

  const images = [img1, img2];

  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    quantity > 0 ? setQuantity((prev) => prev - 1) : null;
  };

  const increaseQuantity = () => {
    quantity < 20 ? setQuantity((prev) => prev + 1) : null;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col sm:flex-row gap-6">
      {loading ? (
        <p className="font-bold text-center text-xl">Loading...</p>
      ) : (
        <>
          <div className="w-full sm:w-1/2 flex gap-2">
            <div className="w-1/4 flex flex-col gap-2">
              <img
                src={images[0]}
                alt=""
                className="w-full h-1/4 object-cover cursor-pointer"
                onClick={() => setActiveImg(0)}
              />
              {img2.data != null ? (
                <img
                  src={images[1]}
                  alt=""
                  className="w-full h-1/4 object-cover cursor-pointer bg-gray-700"
                  onClick={() => setActiveImg(1)}
                />
              ) : null}
            </div>
            <div className="w-3/4">
              <img
                src={images[activeImg]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6">
              {data?.attributes?.title[0].toUpperCase() +
                data?.attributes?.title.slice(1)}
            </h1>
            <p className="text-lg sm:text-xl text-blue-400 mb-2 sm:mb-4">
              ${data?.attributes?.price}
            </p>
            <p className="text-sm text-gray-700 mb-2 sm:mb-4">
              {data?.attributes?.desc}
            </p>
            <div className="flex gap-2 items-center mb-8">
              <button
                className="py-2 px-4 border-none bg-gray-100"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="py-2 px-4 border-none bg-gray-100"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            {quantity === 20 ? (
              <p className="mb-4 text-sm text-red-600">
                Max limit for one product is 20.
              </p>
            ) : null}
            <button
              className="bg-blue-500 py-1 px-8 text-white mb-4"
              onClick={() =>
                quantity > 0
                  ? dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: img1,
                        quantity,
                      })
                    )
                  : null
              }
            >
              Add to cart
            </button>
            <div className="flex gap-8 items-center mb-8 sm:mb-16">
              <div className="uppercase flex gap-1 text-blue-500 text-xs font-semibold items-center">
                <span>
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
                </span>
                Add to whish list
              </div>
              <div className="uppercase flex gap-1 text-blue-500 text-xs font-semibold items-center">
                <span>
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
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                    />
                  </svg>
                </span>
                Add to compare
              </div>
            </div>
            <div className="flex flex-col gap-2 text-gray-400 mb-8 text-sm font-semibold">
              <p>Vendor: Polo</p>
              <p>
                Product type:{" "}
                {data?.attributes?.title[0].toUpperCase() +
                  data?.attributes?.title.slice(1)}
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-300 mb-8"></div>
            <div className="flex flex-col gap-2  text-gray-400 text-sm font-semibold">
              <p>DESCRIPTION</p>
              <p>ADITIONAL INFORMATION</p>
              <p>Faq</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
