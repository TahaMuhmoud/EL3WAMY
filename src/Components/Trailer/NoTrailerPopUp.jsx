import React from "react";
import { FaFaceSadTear } from "react-icons/fa6";

export default function PopUp({ text, bol, setBol }) {
  return (
    <div
      className={`w-full h-full fixed inset-0 z-50 bg-[#000000a6]  justify-center items-center ${
        !bol ? "hidden" : "flex"
      }`}
      onClick={(e) => {
        setBol(false);
      }}
    >
      <div className="bg-white w-80 h-52 rounded-lg shadow shadow-white flex flex-col items-center justify-between gap-3 p-3">
        <div className="text h-3/4 w-full flex flex-col items-center justify-center gap-3">
          <FaFaceSadTear fontSize={34} className="text-mainColor-100" />
          <span className="text-lg font-bold">{text}</span>
        </div>
        <div className="btns flex items-center justify-center h-1/4 w-full ">
          <button
            className="px-5 py-3 text-white rounded-lg bg-mainColor-100"
            onClick={(e) => {
              setBol(false);
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
