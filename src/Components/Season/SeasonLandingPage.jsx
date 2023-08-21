import React, { useCallback, useContext, useState } from "react";
import { ConfigrationContext } from "../../ConfigrationContext";
import Trailer from "../Trailer/Trailer";
import PopUp from "../Trailer/NoTrailerPopUp";
import { Link } from "react-router-dom";
import ImgLayout from "../ImgLayout";

function SeasonLandingPage({ seasonDetails, setLoading }) {
  const [bol, setBol] = useState(false);
  const [vidKey, setVidKey] = useState("");
  const showTrailer = useCallback(
    (x) => {
      setVidKey(x);
      setBol(!bol);
    },
    [bol]
  );
  const [imgShow, setImgShow] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const showImg = useCallback(
    (src) => {
      setImgSrc(src);
      setImgShow(!imgShow);
    },
    [imgShow]
  );
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, backdrop_sizes, poster_sizes } = images;
  // DISTRUCT THE SEASONDATA OBJECT
  const {
    backdrop_path,
    SeriesName,
    overview,
    air_date,
    poster_path,
    vote_average,
    name,
    season_number,
    images: { posters },
    videos: { results },
    seriesID,
  } = seasonDetails;
  return (
    <>
      {seasonDetails ? (
        <div className="relative seriessec sec-bg w-full h-screen overflow-y-hidden">
          {imgShow ? (
            posters[0] ? (
              <ImgLayout
                imgSrc={imgSrc}
                imgShow={imgShow}
                setImgShow={setImgShow}
              />
            ) : (
              <PopUp
                text={"no img"}
                imgShow={imgShow}
                setImgShow={setImgShow}
              />
            )
          ) : (
            ""
          )}
          {bol ? (
            results[0] ? (
              <Trailer youtubeKey={vidKey} bol={bol} setBol={showTrailer} />
            ) : (
              <PopUp text={"no trailer"} bol={bol} setBol={showTrailer} />
            )
          ) : (
            ""
          )}
          <img
            src={
              backdrop_path
                ? `${base_url}${backdrop_sizes[3]}${backdrop_path}`
                : `${base_url}${backdrop_sizes[3]}${poster_path}`
            }
            alt="movie img"
            loading="lazy"
            className="min-w-full min-h-full max-h-full absolute inset-0 object-cover object-center -z-50"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center absolute inset-0 z-10 ">
            <div className="details text-white p-5 sm:p-20">
              <div className="text flex flex-col items-center">
                <h1 className="titel break-all text-3xl sm:text-5xl text-center lg:text-left font-bold mb-3 sm:mb-6 mt-6">
                  {`${SeriesName} ( ${season_number} ) `}
                </h1>
                <h1 className="titel text-3xl sm:text-5xl text-center lg:text-left font-bold mb-3 sm:mb-10">
                  {`${name} ${
                    air_date ? "(" + air_date.split("-")[0] + ")" : ""
                  }`}
                </h1>

                {overview ? (
                  <div className="overveiw mb-3 sm:mb-6 text-xl text-center sm:text-left h-20 overflow-y-scroll snap-none touch-pan-y pr-2">
                    <p>{overview || ""}</p>
                  </div>
                ) : (
                  ""
                )}
                {results.length > 0 ? (
                  <>
                    <div className="tagline mb-2 text-[#ffffff] italic text-xl text-center">
                      <p>videos</p>
                    </div>
                    <div className="posters-imgs w-full flex flex-wrap justify-center gap-2 max-h-[180px] mb-3 overflow-y-scroll">
                      {results.map((video, indx) => (
                        <>
                          <div
                            key={indx}
                            className="img w-20 h-20 relative rounded-lg border-2 border-[#fff0] outline outline-1 outline-white overflow-hidden hover:scale-110 transition-all duration-500"
                          >
                            <img
                              src={`${base_url}${poster_sizes[6]}${
                                posters[indx]
                                  ? posters[indx].file_path
                                  : poster_path
                              }`}
                              alt=""
                              loading="lazy"
                              className="w-full h-full hover:scale-90 transition-all duration-500 object-center object-cover cursor-pointer"
                              onClick={(e) => {
                                showTrailer(video.key);
                              }}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : posters.length > 0 ? (
                  <>
                    <div className="tagline mb-2 text-[#ffffff] italic text-xl text-center">
                      <p>images</p>
                    </div>
                    <div className="posters-imgs w-full flex flex-wrap justify-center gap-2 p-2 max-h-[180px] overflow-y-scroll">
                      {posters.map((poster, i) => (
                        <>
                          <div
                            key={i}
                            className="img w-20 h-20 relative rounded-lg border-2 border-[#fff0] outline outline-1 outline-white overflow-hidden hover:scale-110 transition-all duration-500"
                          >
                            <img
                              src={`${base_url}${poster_sizes[6]}${poster.file_path}`}
                              alt=""
                              loading="lazy"
                              className="w-full h-full hover:scale-90 transition-all duration-500 object-center object-cover cursor-pointer"
                              onClick={(e) => {
                                showImg(e.target.src);
                              }}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="flex items-center justify-center mt-6">
                  <Link
                    to={`/tv/${seriesID}`}
                    className="btn m-auto cursor-pointer w-fit bg-[#ffffff4a] p-3 rounded-full hover:bg-[#ffffff00] hover:border-white hover:border-1 "
                    onClick={() => {
                      setLoading(true);
                    }}
                  >
                    <span className="text-lg sm:text-xl">
                      return to series page
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-20 py-28 xl:px-32 2xl:px-44 w-full h-full hidden lg:block">
              <div className="relative w-full h-full shadow-2xl shadow-[#000000]">
                <img
                  src={
                    poster_path
                      ? `${base_url}${poster_sizes[4]}${poster_path}`
                      : `${base_url}${poster_sizes[4]}${backdrop_path}`
                  }
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full cursor-pointer hover:grayscale transition-all duration-200"
                />
                <div className="w-16 h-16  bg-[#ffffff4a] border border-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-xl text-white font-bold">
                  {vote_average.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-4xl text-mainColor-100">...laoding</h1>
      )}
    </>
  );
}

export default React.memo(SeasonLandingPage);
