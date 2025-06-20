import React, { useState } from "react";
import Button from "../../shared/Button";
import { useDispatch } from "react-redux";
import {
  setAddCart,
  setIncreaseQuantity,
} from "../../../store/shopping/action";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import { toast } from "react-toastify";

const Shopping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const availableSizes = ["XS", "S", "M"];
  const [selectedSizes, setSelectedSizes] = useState({});
  console.log(selectedSizes);

  const [err, setErr] = useState({
    status: false,
    message: "",
    itemID: 0,
  });

  const data = [
    {
      itemID: 1,
      img: "https://zuriador.com/cdn/shop/files/zuria-dor-dusty-beige-bridal-dress-2.jpg?v=1724221215&width=400",
      title: "Classic Collection",
      price: 42000,
      discountPrice: 82000,
      quantity: 1,
    },
    {
      itemID: 2,
      img: "https://zuriador.com/cdn/shop/products/Photo26-09-2021_162754_1.jpg?v=1670844405&width=400",
      title: "Bohemian Rhapsody Attire",
      price: 22200,
      discountPrice: 42000,
      quantity: 1,
    },
    {
      itemID: 3,
      img: "https://zuriador.com/cdn/shop/products/Photo26-09-2021_162754_1.jpg?v=1670844405&width=400",
      title: "Midnight Gala Maxi Dress",
      price: 51200,
      discountPrice: 120000,
      quantity: 1,
    },
    {
      itemID: 4,
      img: "https://zuriador.com/cdn/shop/files/zuria-dor-ice-blue-bridal-gown-1.jpg?v=1720185129&width=400",
      title: "Power Suit Ensemble",
      price: 52100,
      discountPrice: 82000,
      quantity: 1,
    },
  ];
  const handleSizeChange = (itemID, size) => {
    setSelectedSizes((prevSizes) => ({
      // ...prevSizes,
      [itemID]: size,
    }));
  };

  const addToCart = ({
    itemID,
    img,
    title,
    price,
    discountPrice,
    size,
    quantity,
  }) => {
    if ((itemID, size)) {
      dispatch(
        setAddCart({
          itemID,
          img,
          title,
          price,
          discountPrice,
          size: selectedSizes[itemID],
          quantity,
        })
      );
      toast.success("Successfully added to cart");
      setSelectedSizes({});
    } else
      setErr((prev) => ({
        ...prev,
        status: true,
        message: "Please select size",
        itemID,
      }));

    setTimeout(() => {
      setErr((prev) => ({
        ...prev,
        status: false,
        message: "",
        itemID,
      }));
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-tl from-violet-900 via-cyan-600 to-sky-900 min-h-screen text-white">
      <div className=" flex justify-between py-2 px-10 cursor-pointer font-bold">
        <div onClick={() => navigate("/")}>Back to home</div>
        <p onClick={() => navigate("/cart")}>cart</p>
      </div>
      <p className="bg-gradient-to-br from-blue-700 via-sky-900 to-red-700 bg-clip-text text-transparent font-bold uppercase text-[68px] text-center">
        Shopping
      </p>

      {/* <div className="!bg-[white]" id="popular"> */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 w-[90%] mx-auto gap-8">
          {data.map(
            ({ itemID, img, title, price, discountPrice, quantity }) => (
              <div key={itemID} className="flex flex-col text-center">
                <img
                  className="rounded-lg cursor-pointer object-contain "
                  src={img}
                />
                <p className="text-xs">{title}</p>
                <div className="flex items-center justify-center gap-6">
                  <p className="text-[11px] text-sm font-bold text-[#202048]">
                    Rs. {price}
                  </p>
                  <p className="text-[11px] text-sm font-semibold text-[#9898a5] line-through">
                    Rs. {discountPrice}
                  </p>
                </div>
                <div className="flex justify-center my-3 gap-2">
                  {availableSizes.map((sizeOption) => (
                    <span
                      onClick={() => handleSizeChange(itemID, sizeOption)}
                      key={sizeOption}
                      className={cx(
                        "hover:bg-[black] border cursor-pointer bg-gray-500 text-white p-1 min-w-[33px] text-center",
                        {
                          "!bg-[black]": selectedSizes[itemID] === sizeOption,
                        }
                      )}
                    >
                      {sizeOption}
                    </span>
                  ))}
                </div>
                {/* <div
                  onClick={() =>
                    addUpdateQuantity(itemID, selectedSizes[itemID])
                  }
                >
                  Quantity +:{quantity}
                </div> */}
                {err.status && err.itemID == itemID && (
                  <span style={{ color: "#ffffff" }}>{err.message}</span>
                )}
                <div>
                  <Button
                    onClick={() =>
                      addToCart({
                        itemID,
                        img,
                        title,
                        price,
                        discountPrice,
                        size: selectedSizes[itemID],
                        quantity,
                      })
                    }
                    label="Add to cart "
                    className="!bg-blue-900 px-6 py-2"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Shopping;
