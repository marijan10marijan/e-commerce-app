import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
import { resetCart } from "../../redux/cartReducer";

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.forEach((product) => {
      total = total + product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="py-4 px-6 bg-white z-[1000] max-w-[350px] w-[95%]  absolute right-2 sm:right-6 top-14 shadow-md">
      <h2 className="text-lg text-gray-500 mb-4 font-semibold">
        Products in your cart
      </h2>
      {products?.map((item) => (
        <div key={item.id} className="flex gap-4 items-center mb-4">
          <div className="w-1/6">
            <img
              src={item.img}
              alt=""
              className="w-full object-cover h-[80px]"
            />
          </div>
          <div className="w-4/6 flex flex-col text-gray-500">
            <p className="mb-2 font-semibold">
              {item.title[0].toUpperCase() + item.title.slice(1)}
            </p>
            <p className="text-xs mb-2">{item.desc?.substring(0, 100)}</p>
            <p className="text-blue-500 font-semibold text-sm">
              {item.quantity} x ${item.price}
            </p>
          </div>
          <div
            className="w-1/6 text-red-500 cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          >
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      ))}

      {/** ************************** */}
      <div className="flex justify-between items-center mt-6 font-semibold text-sm">
        <p>SUBTOTAL</p>
        <p>${total()}</p>
      </div>

      {/** *************************** */}
      <button className="uppercase py-1 px-4 bg-blue-500 text-white font-semibold mt-4 text-xs">
        Proceed to checkout
      </button>
      <p
        className="text-red-500 text-xs my-2 font-bold cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset cart
      </p>
    </div>
  );
};

export default ShoppingCart;
