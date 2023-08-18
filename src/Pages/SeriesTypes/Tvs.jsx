import React from "react";
import { Outlet } from "react-router-dom";

function Tvs() {
  return (
    <div className="text-9xl text-mainColor-100">
      <Outlet />
    </div>
  );
}

export default Tvs;
