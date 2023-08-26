import React, { useCallback, useState } from "react";
import Trailer from "../../Components/Trailer/Trailer";
import PopUp from "../../Components/Trailer/NoTrailerPopUp";
import { GoDotFill } from "react-icons/go";
import { HiMiniLanguage } from "react-icons/hi2";
import { VscDebugStart } from "react-icons/vsc";
import { Link } from "react-router-dom";

function MovieLandingPage({ movieData, imagesPathData, setLoading }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { base_url, backdrop_sizes, poster_sizes } = imagesPathData;
  // ...............................
  const [bol, setBol] = useState(false);
  const showTrailer = useCallback(() => {
    setBol(!bol);
  }, [bol]);

  // /..............
  const {
    id,
    videos,
    backdrop_path,
    release_date,
    original_title,
    tagline,
    genres,
    adult,
    runtime,
    overview,
    spoken_languages,
    homepage,
    poster_path,
    vote_average,
  } = movieData;
  return (
    <>
      <div className="moviesec sec-bg w-full h-screen pt-14 overflow-hidden relative">
        {bol ? (
          videos.results[0] ? (
            <Trailer
              youtubeKey={videos.results[0].key}
              bol={bol}
              setBol={setBol}
            />
          ) : (
            <PopUp text={"no trailer"} bol={bol} setBol={setBol} />
          )
        ) : (
          ""
        )}
        <img
          src={
            backdrop_path && window.innerWidth>576
              ? `${base_url}${backdrop_sizes[3]}${backdrop_path}`
              : `${base_url}${backdrop_sizes[3]}${poster_path}`
          }
          alt="movie img"
          className="min-w-full min-h-full max-h-full absolute inset-0 object-cover object-center -z-50"
          loading="lazy"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center absolute inset-0 z-10 ">
          <div className="details text-white p-5 sm:p-20">
            <div className="text flex flex-col items-center lg:block">
              <h1 className="titel text-4xl sm:text-5xl text-center lg:text-left font-bold mb-3 mt-6">
                {`${original_title} (${release_date?.split("-")[0]})` || " cc"}
              </h1>
              <div className="tagline mb-6 text-[#9d9d9d] italic text-xl">
                <p>{tagline || ""}</p>
              </div>
              <div className="flex items-center flex-wrap gap-1 mb-6">
                <span>
                  {genres
                    ? genres.map((gener, indx) => (
                        <span
                          key={indx}
                          className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5"
                        >
                          <GoDotFill />
                          {gener.name}
                        </span>
                      ))
                    : ""}
                </span>
                <GoDotFill />
                <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100">
                  {adult === "true" ? "+7" : "+18"}
                </span>
                <GoDotFill />
                <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100">
                  {(runtime / 60).toFixed(0) + "h " + (runtime % 60) + "m"}
                </span>
              </div>
              <div className="overveiw mb-8 text-xl h-20 overflow-y-scroll snap-none touch-pan-y pr-2">
                <p>{overview || ""}</p>
              </div>
              <div className="langs flex items-center flex-wrap gap-1 mb-14">
                <span>{spoken_languages.length > 0 ? "languages : " : ""}</span>
                {spoken_languages?.map((lang, indx) => (
                  <span
                    key={indx}
                    className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5"
                  >
                    <HiMiniLanguage fontSize={18} />
                    {lang.english_name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="btn cursor-pointer flex gap-1 sm:gap-2 bg-[#ffffff4a] p-3 sm:pr-5 rounded-full hover:bg-[#ffffff00] hover:border-white hover:border-1"
                  onClick={(e) => {
                    showTrailer();
                  }}
                >
                  <VscDebugStart fontSize={30} color="white" />
                  <span className="text-lg sm:text-xl">play trailer</span>
                </div>
                <Link
                  to={homepage ? homepage : `/videonotavailable/movie/${id}`}
                  className="btn cursor-pointer flex gap-1 sm:gap-2 bg-[#ffffff4a] p-3 pr-5 rounded-full hover:bg-[#ffffff00] hover:border-white hover:border-1"
                >
                  <VscDebugStart fontSize={30} color="white" />
                  <span className="text-lg sm:text-xl">watch</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-20 py-28 xl:px-32 2xl:px-44 w-full h-full hidden lg:block">
            <div className="relative w-full h-full shadow-2xl shadow-[#000000]">
              <img
                src={`${base_url}${poster_sizes[4]}${poster_path}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                loading="lazy"
              />
              <div className="w-16 h-16  bg-[#ffffff4a] border border-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-xl text-white font-bold">
                {vote_average.toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(MovieLandingPage);
