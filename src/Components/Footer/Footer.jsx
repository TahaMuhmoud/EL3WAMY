import React from "react";

import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer w-screen mt-5">
      <div
        className="flex items-center justify-center bg-mainColor-100 max-h-[80px] w-full text-white text-xl py-2"
      >
        <FaRegCopyright className="mr-2" />
        taha mahmoud
      </div>
    </div>
  );
}
