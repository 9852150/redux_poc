import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDecrement, setIncrement } from "../../store/increDec/action";
import { setAddCart } from "../../store/shopping/action";
import { useNavigate } from "react-router-dom";

const IncDecRedux = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state) => state.prep.increDec?.increment || 0);
  console.log(count);

  const decrement = () => {
    if (count > 0) dispatch(setDecrement(1));
  };
  return (
    <div className="h-screen bg-gradient-to-b from-[#8BD245] via-[#4500B6] to-[#9A00A7]">
      <div className="flex gap-5 items-center justify-center h-[90vh]">
        <button
          className="rounded-md text-center bg-slate-500 text-white p-8 py-4"
          onClick={() => dispatch(setIncrement(1))}
        >
          Increment
        </button>
        <div className="rounded-md text-center p-8 py-3 text-[21px] bg-black text-white">
          {count}
        </div>
        <button
          className="rounded-md text-center bg-slate-500 text-white p-8 py-4"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
      <div
        onClick={() => navigate("/")}
        className="flex items-center justify-center"
      >
        <button
          className="text-white cursor-pointer"
          onClick={() => dispatch(setAddCart("hi"))}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default IncDecRedux;
