import React, { useCallback, useContext, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiMiniLanguage } from "react-icons/hi2";
import { VscDebugStart } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PopUp from "../../Components/Trailer/NoTrailerPopUp";
import Trailer from "../../Components/Trailer/Trailer";
import { ConfigrationContext } from "../../ConfigrationContext";

const TvLandingPage = ({ seriesData, setLoading }) => {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, backdrop_sizes } = images;
  let {
    id,
    backdrop_path,
    videos: { results },
    adult,
    genres,
    spoken_languages,
    overview,
    tagline,
    homepage,
    original_name,
    first_air_date,
    status,
    last_air_date,
  } = seriesData;
  const [bol, setBol] = useState(false);
  const showTrailer = useCallback(() => {
    setBol(!bol);
  }, [bol]);
  return (
    <>
      <div className="moviesec sec-bg w-full h-screen overflow-y-hidden relative">
        {bol ? (
          results[0] ? (
            <Trailer
              youtubeKey={results[0].key}
              bol={bol}
              setBol={showTrailer}
            />
          ) : (
            <PopUp text={"no trailer"} bol={bol} setBol={showTrailer} />
          )
        ) : (
          ""
        )}
        <img
          src={`${base_url}${backdrop_sizes[3]}${backdrop_path}`}
          alt="movie img"
          loading="lazy"
          className="min-w-full min-h-full max-h-full absolute inset-0 object-cover object-center -z-50"
        />
        <div className="absolute inset-0 z-20 px-5 lg:p-24">
          <div className="text flex flex-col items-center justify-center h-full text-white">
            <h1 className="titel text-4xl sm:text-5xl text-center lg:text-left font-bold mb-3 mt-6">
              {`${original_name} (${first_air_date?.split("-")[0]})` || " cc"}
            </h1>
            <div className="tagline mb-6 text-[#9d9d9d] italic text-xl text-center">
              <p>{tagline || ""}</p>
            </div>
            <div className="status flex items-center flex-wrap gap-1 mb-5">
              {status ? (
                <>
                  <span>status : </span>
                  <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5">
                    <GoDotFill />
                    {status}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-center justify-center flex-wrap gap-1 mb-6">
              <span className="flex items-center justify-center flex-wrap">
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
            </div>
            <div className="overveiw text-center mb-8 sm:w-3/4 text-xl h-14 overflow-y-auto snap-none touch-pan-y pr-2">
              <p>{overview || ""}</p>
            </div>
            <div className="langs flex items-center flex-wrap gap-1 mb-5">
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
            <div className="status flex items-center flex-wrap gap-1 mb-5">
              {last_air_date ? (
                <>
                  <span>last air date : </span>
                  <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5">
                    <GoDotFill />
                    {last_air_date}
                  </span>
                </>
              ) : (
                ""
              )}
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
                to={homepage ? homepage : `/videonotavailable/tv/${id}`}
                target="_blank"
                className="btn cursor-pointer flex gap-1 sm:gap-2 bg-[#ffffff4a] p-3 pr-5 rounded-full hover:bg-[#ffffff00] hover:border-white hover:border-1"
              >
                <VscDebugStart fontSize={30} color="white" />
                <span className="text-lg sm:text-xl">watch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TvLandingPage);
