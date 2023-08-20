import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function ImgLayout({ imgSrc, imgShow, setImgShow }) {
  return (
    <div
      className={`w-full h-full fixed inset-0 z-50 bg-[#000000e3]  justify-center items-center ${
        !imgShow ? "hidden" : "flex"
      }`}
      onClick={(e) => {
        setImgShow(false);
      }}
    >
      <div className="img container h-[400px] w-fit xl:h-[500px] relative">
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          className="w-full h-full object-contain object-center"
        />
        <AiFillCloseCircle
          fontSize={38}
          className="absolute right-10 sm:right-0 top-0 translate-x-1/2 -translate-y-1/2 text-mainColor-100 bg-black rounded-full cursor-pointer"
          onClick={(e) => {
            setImgShow(false);
          }}
        />
        
      </div>
    </div>
  );
}
export default React.memo(ImgLayout);
