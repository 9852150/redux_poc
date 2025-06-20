import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDecreaseQuantity,
  setIncreaseQuantity,
  setRemoveItem,
} from "../../../store/shopping/action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.prep?.shopping?.cartData || []);
  console.log(items);

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-tl from-cyan-900 via-teal-900 to-slate-900 text-white">
      <div
        className="pl-8 font-bold cursor-pointer"
        onClick={() => navigate(-1)}
      >
        BACK
      </div>
      <div className="flex flex-col gap-3 justify-between p-4">
        {items?.map(
          ({
            id,
            itemID,
            price,
            size,
            quantity,
            img,
            title,
            discountPrice,
          }) => (
            <div key={id} className="flex pt-2">
              <div className="flex items-center gap-5">
                <img className="w-[100px] rounded-md" src={img} alt={title} />
                <div>
                  <p>{title}</p>
                  <div className="flex items-center gap-10 mt-2">
                    <div className="text-xs">Size: {size}</div>
                    <div className="text-xs">Qty: {quantity}</div>
                    <div className="flex text-xs items-center">
                      <button
                        disabled={quantity <= 1}
                        onClick={() =>
                          dispatch(setDecreaseQuantity({ itemID, size }))
                        }
                        className="border border-black px-2 py-1 cursor-pointer"
                      >
                        -
                      </button>
                      <div className=" border-y border-black font-semibold px-2 py-1">
                        {quantity}
                      </div>
                      <div
                        onClick={() =>
                          dispatch(
                            setIncreaseQuantity({
                              itemID,
                              size,
                            })
                          )
                        }
                        // onClick={() => increaseItem(id, size, title)}
                        className=" border border-black px-2 py-1 cursor-pointer"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 mt-2">
                    <p className=" font-semibold text-xs">
                      Rs. {discountPrice * quantity}
                    </p>
                    <p className=" opacity-55 font-normal text-xs">
                      Rs. {price * quantity}
                    </p>
                  </div>
                  <p className="text-xs mt-2">
                    <span className=" font-semibold text-xs">14 days</span>
                    <span className=" opacity-55 font-normal text-xs pl-1">
                      return available
                    </span>
                  </p>
                </div>
              </div>
              <div
                onClick={() => dispatch(setRemoveItem(id))}
                className="text-[red] text-lg mt-2 cursor-pointer"
              >
                X
              </div>
            </div>
          )
        )}

        {items?.length !== 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase">
              Price Details{" "}
              {`(${items?.length} item${items?.length > 1 ? "s" : ""})`}
            </p>
            <div className="border-black border-b-2 opacity-5 w-full" />
            {/* Render price details */}
            {/* {priceDetails.map(({ title, price, class_Name }, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 gap-2 mt-4 text-xs ${
                  class_Name || ""
                }`}
              >
                <div className="text-xs">{title}</div>
                <div className="text-xs text-end">{price}</div>
              </div>
            ))} */}
          </div>
        ) : (
          <div>
            <div className="text-[22px] text-center font-bold">
              No items in the cart.
            </div>
            <button
              onClick={() => navigate("/shopping")}
              className="bg-[#d0cece] px-6 py-2 rounded-lg w-full hover:bg-gray-400"
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
