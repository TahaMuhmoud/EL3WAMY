import React from "react";

import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer w-screen">
      <div className=""></div>
      <div
        className="flex items-center justify-center bg-mainColor-100 max-h-[92px] w-full text-white text-4xl py-5"
        style={{ fontFamily: "'Reenie Beanie', cursive" }}
      >
        <FaRegCopyright className="mr-2" />
        taha mahmoud
      </div>
    </div>
  );
}
