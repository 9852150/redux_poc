import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" uppercase font-semibold text-white text-[22px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[60vh]">
      <div className="text-center pt-20  text-[56px] underline">REDUX</div>
      <div className="flex items-center justify-center gap-5 h-full">
        <div
          onClick={() => navigate("/count")}
          className="shadow-2xl rounded-xl p-20 cursor-pointer bg-violet-900 hover:scale-150 duration-300"
        >
          Increment/Decrement
        </div>
        <div
          onClick={() => navigate("/shopping")}
          className="shadow-2xl rounded-xl p-20 cursor-pointer bg-violet-950 hover:scale-150 duration-300"
        >
          Shopping Cart
        </div>
      </div>
    </div>
  );
};

export default Home;
