import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getEposideData, getSeriesDetails } from "../../api";
import { ConfigrationContext } from "../../ConfigrationContext";
import Trailer from "../../Components/Trailer/Trailer";
import PopUp from "../../Components/Trailer/NoTrailerPopUp";
import { VscDebugStart } from "react-icons/vsc";
import ImgLayout from "../../Components/ImgLayout";
import Cast from "../../Components/Cast";
import { TbArrowsTransferUp } from "react-icons/tb";
import Loading from "../LoadingPage/Loading";

function EposideDetails() {
  const eposideData = useLoaderData();
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, backdrop_sizes, poster_sizes } = images;
  // ............
  const {
    name,
    still_path,
    air_date,
    videos,
    vote_average,
    seriesHomePaage,
    episode_number,
    seriesID,
    season_number,
    seriesName,
    runtime,
    guest_stars,
    credits,
  } = eposideData;
  // .................................
  // ...............................
  const [bol, setBol] = useState(false);
  const showTrailer = useCallback(() => {
    setBol(!bol);
  }, [bol]);
  // ...................................
  const [imgShow, setImgShow] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const showImg = useCallback(
    (src) => {
      setImgSrc(src);
      setImgShow(!imgShow);
    },
    [imgShow]
  );
  const [showActorsSec, setShowActorsSec] = useState(true);
  const showAllSec = useCallback(() => {
    setShowActorsSec(!showActorsSec);
  }, [showActorsSec]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <section className="">
      {images && eposideData ? (
        <>
          <div className="relative eposidesec sec-bg w-full h-screen overflow-y-hidden">
            {loading ? <Loading /> : ""}
            {imgShow ? (
              eposideData.images.stills[0] ? (
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
              src={`${base_url}${backdrop_sizes[3]}${still_path}`}
              alt="movie img"
              loading="lazy"
              className="min-w-full min-h-full max-h-full absolute inset-0 object-cover object-center -z-50"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center absolute inset-0 z-10 ">
              <div className="details h-full text-white p-10 sm:p-20 sm:pr-10">
                <div className="text h-full relative flex flex-col items-center justify-center">
                  <div
                    className="hidden sm:flex items-center h-14 italic text-gray-400 w-full gap-1 rounded-full border-1
                border-gray-400 p-2 pl-16 absolute top-0 left-0"
                  >
                    <div
                      className="rounded-full absolute top-1/2 -translate-y-1/2 left-1 h-12 aspect-square flex justify-center items-center border-1
                border-gray-400"
                    >
                      <span className="text-white">path :</span>
                    </div>
                    <Link to={`/tv/${seriesID}`}>
                      <span className="underline text-sm sm:text-lg truncate hover:text-gray-100 transition-all duration-300">
                        {seriesName}
                      </span>
                    </Link>
                    <span>/</span>
                    <Link to={`/season/${seriesID}/${season_number}`}>
                      <span className="underline text-sm sm:text-lg hover:text-gray-100 transition-all duration-300">{`season - ${season_number}`}</span>
                    </Link>
                    <span>/</span>
                    <Link to={``}>
                      <span className="underline text-sm sm:text-lg text-gray-50">{`episode - ${episode_number}`}</span>
                    </Link>
                  </div>
                  <h1 className="titel text-4xl sm:text-5xl text-center lg:text-left font-bold mb-3 mt-6">
                    {`${name} (${air_date?.split("-")[0]})` || " cc"}
                    <span className="inline-flex items-center rounded-md  px-3 py-1 text-lg font-b ring-1 ring-inset ring-mainColor-100">
                      <span>
                        {(runtime / 60).toFixed(0) +
                          "h " +
                          (runtime % 60) +
                          "m"}
                      </span>
                    </span>
                  </h1>
                  {videos.results.length > 0 ? (
                    <>
                      <div className="tagline mb-2 text-[#ffffff] italic text-xl text-center">
                        <p>videos</p>
                      </div>
                      <div className="posters-imgs w-full flex flex-wrap justify-center gap-2 max-h-[180px] ">
                        {videos.results.map((video, indx) => (
                          <>
                            <div
                              key={indx}
                              className="img w-20 h-20 relative rounded-lg border-2 border-[#fff0] outline outline-1 outline-white overflow-hidden hover:scale-110 transition-all duration-500"
                            >
                              <img
                                src={`${base_url}${poster_sizes[6]}${
                                  eposideData.images.stills[indx]
                                    ? eposideData.images.stills[indx].file_path
                                    : still_path
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
                  ) : eposideData.images.stills.length > 0 ? (
                    <>
                      <div className="tagline mb-2 text-[#ffffff] italic text-xl text-center">
                        <p>images</p>
                      </div>
                      <div className="posters-imgs w-full flex flex-wrap justify-center gap-2 p-2 max-h-[180px]  mb-3 overflow-y-scroll">
                        {eposideData.images.stills.map((poster, indx) => (
                          <>
                            <div
                              key={indx}
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
                  <div className="flex items-center gap-3 mt-5">
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
                      to={seriesHomePaage ? seriesHomePaage : "/notfound"}
                      target="_blank"
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
                    src={`${base_url}${backdrop_sizes[3]}${
                      eposideData.images.stills[1]
                        ? eposideData.images.stills[1]["file_path"]
                        : eposideData.images.stills[0]
                        ? eposideData.images.stills[0]["file_path"]
                        : still_path
                    }`}
                    style={{
                      aspectRatio: eposideData.images.stills[1]
                        ? eposideData.images.stills[1]["aspect_ratio"]
                        : eposideData.images.stills[0]
                        ? eposideData.images.stills[0]["aspect_ratio"]
                        : "1/1",
                    }}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer hover:grayscale transition-all duration-200"
                  />
                  <div className="w-16 h-16  bg-mainColor-100 border border-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-xl text-white font-bold">
                    {vote_average.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="toggle-icon text-gray-400 flex flex-col items-center absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
              onClick={(e) => {
                showAllSec();
              }}
            >
              <span className="text-[20px]">show actors</span>
              <TbArrowsTransferUp fontSize={40} className=" animate-bounce" />
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {!showActorsSec ? (
            <>
              <Cast
                setLoading={setLoading}
                castType={"guest stars"}
                poster_path={still_path}
                cast={guest_stars}
              />
              {/*  */}
              {/*  */}
              {/*  */}
              <Cast
                setLoading={setLoading}
                castType={"actors"}
                cast={credits.cast}
              />
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <h1 className="text-4xl text-mainColor-100">...laoding</h1>
      )}
    </section>
  );
}

export default React.memo(EposideDetails);

export async function loader({ params }) {
  let x = await getEposideData(
    params.Sname.split("-")[1],
    params.Snum.split("-")[1],
    params.Enum.split("-")[1]
  );
  let y = await getSeriesDetails(params.Sname.split("-")[1]);
  let eposideData = {
    ...x,
    seriesName: y["name"],
    seriesID: y["id"],
    seriesHomePaage: y["homepage"],
  };
  return eposideData;
}
