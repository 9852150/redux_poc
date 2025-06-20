import React from "react";
import { Route, Routes } from "react-router-dom";
import Incdec from "../components/redux/Incdec";
import IncDecRedux from "../components/redux/IncDecRedux";
import Shopping from "../components/redux/shopping/Shopping";
import Cart from "../components/redux/shopping/Cart";
import Home from "../components/home/home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incDec" element={<Incdec />} />
        <Route path="/count" element={<IncDecRedux />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
