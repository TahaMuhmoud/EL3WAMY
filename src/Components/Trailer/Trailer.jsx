import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function Trailer({ youtubeKey, bol, setBol }) {
  return (
    <div
      className={`w-full h-full fixed inset-0 z-50 bg-[#000000ca] justify-center items-center ${
        !bol ? "hidden" : "flex"
      }`}
      onClick={(e) => {
        setBol(false);
      }}
    >
      <div className="vid container h-[400px] lg:w-[700px] xl:w-[900px] xl:h-[500px] relative">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <AiFillCloseCircle
          fontSize={38}
          className="absolute right-10 sm:right-0 top-0 translate-x-1/2 -translate-y-1/2 text-mainColor-100 bg-black rounded-full cursor-pointer"
          onClick={(e) => {
            setBol(false);
          }}
        />
      </div>
    </div>
  );
}
export default React.memo(Trailer);
