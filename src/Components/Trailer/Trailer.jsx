import React from "react";

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
        <button
          className="px-5 py-3 text-white rounded-lg bg-mainColor-100 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
          onClick={(e) => {
            setBol(false);
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
}
export default React.memo(Trailer);
