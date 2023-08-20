import React, { useContext, useEffect, useState } from "react";
import { ConfigrationContext } from "../ConfigrationContext";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { BsFilterRight } from "react-icons/bs";
import Loading from "../Pages/LoadingPage/Loading";
import { SortedDataContext } from "../SortedDataContext";
import { GenersContext } from "../GenersContext";
import SortMenu from "./SortMenu";
import avatar from "../assets/avatar.svg";


function GridMovies({ text, type, data, setPage, page }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, profile_sizes, logo_sizes, still_sizes } = images;
  let arr = [...new Array(50)];
  const { results, total_pages } = data;
  const [loading, setLoading] = useState(false);
  const [loadingSec, setLoadingSec] = useState(false);
  function handleNextPrevBtns() {
    setLoadingSec(true);
    window.scrollTo({
      top: 0,behavior:"smooth"
    });
  }
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  let sdC = useContext(SortedDataContext);
  let { sortedData, sortedPage, setSortedPage } = sdC;

  const [isSorted, setIsSorted] = useState(false);

  const { setTypeMovieOrTv } = useContext(GenersContext);

  useEffect(() => {
    setTypeMovieOrTv(type);
  });

  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <>
      {images && results ? (
        <>
          {loading ? <Loading /> : ""}

          {isSorted === false ? (
            <div className="text-9xl text-mainColor-100 py-24 sm:px-5  flex flex-col items-center p-3">
              <SortMenu
                type={type}
                sortedDataC={sdC}
                showSortMenu={showSortMenu}
                setShowSortMenu={setShowSortMenu}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
              />
              <h1
                className="text-6xl pb-10 sm:text-7xl font-extrabold  text-center bg-gradient-to-b sm:bg-gradient-to-r from-mainColor-100 to-black"
                style={{
                  WebkitTextStroke: "5px transparent",
                  WebkitTextFillColor: "black",
                  WebkitBackgroundClip: "text",
                }}
              >
                {text} {type}s
              </h1>

              <div className="w-full h-fit mb-10 text-lg text-white flex justify-between items-end container">
                <div>
                  <label className="mr-5" htmlFor="pages_num">
                    page:
                  </label>
                  <select
                    className="h-10 w-20 bg-transparent border-1 border-white"
                    name="pages_num"
                    id="pages_num"
                    onChange={(e) => {
                      setPage(e.target.value);
                      handleNextPrevBtns();
                    }}
                  >
                    {arr.map((el, i) => {
                      return (
                        <option key={i} className="text-black">
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="">
                  <button
                    className=" px-3 py-1 flex items-center gap-2 border-2 border-white"
                    onClick={() => setShowSortMenu(!showSortMenu)}
                  >
                    filter
                    <BsFilterRight fontSize={22} />
                  </button>
                </div>
              </div>
              <div className="relative flex flex-wrap justify-center gap-2 p-2 w-full h-full overflow-hidden">
                {loadingSec ? (
                  <div className="bg-gray-800 absolute inset-0 z-10 flex items-center justify-center animate-pulse">
                    <div
                      className="m-12 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {results.map((movie, indx) => (
                  <Link
                    key={indx}
                    to={`/${type}/${movie.id}`}
                    className="w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[400px] flex flex-col items-center border-2 border-transprent-1/5"
                    onClick={() => {
                      setLoading(true);
                    }}
                  >
                    <div className="img relative w-full h-3/5 p-1 overflow-hidden img-topLayer-black-gradient">
                      <img
                        src={
                          movie["poster_path"]
                            ? `${base_url}${still_sizes[3]}${movie["poster_path"]}`
                            : movie["_path"]
                            ? `${base_url}${still_sizes[3]}${movie["_path"]}`
                            : `${avatar}`
                        }
                        alt=""
                        className="w-full h-full object-center object-cover  scale-110 transition-all duration-300"
                        loading="lazy"
                        onLoad={(e) => {
                          setLoadingSec(false);
                        }}
                      />
                    </div>
                    <div className="w-full h-2/5 p-3 text-white">
                      <h3 className="text-2xl font-bold pb-2 break-words">
                        {movie["title"]
                          ? movie["title"].length < 12
                            ? movie["title"]
                            : movie["title"].slice(0, 12) + "..."
                          : movie["original_name"].length < 12
                          ? movie["original_name"]
                          : movie["original_name"].slice(0, 12) + "..."}
                      </h3>
                      <div className="italic text-lg text-[#9d9d9d]">
                        release date
                      </div>
                      <h4 className="text-lg font-bold">
                        {movie["release_date"]
                          ? movie["release_date"]
                          : movie["first_air_date"]}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex gap-5 pt-10">
                {total_pages > 1 ? (
                  page === total_pages ? (
                    <>
                      <div className="text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100">
                        {page}
                      </div>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setPage(page - 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowLeft color="white" fontSize={18} />
                      </button>
                    </>
                  ) : page === 1 ? (
                    <>
                      <div className="text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100">
                        {page}
                      </div>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setPage(page + 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowRight color="white" fontSize={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setPage(page - 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowLeft color="white" fontSize={18} />
                      </button>
                      <div className="text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100">
                        {page}
                      </div>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setPage(page + 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowRight color="white" fontSize={18} />
                      </button>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div className="text-9xl text-mainColor-100 py-24 sm:px-5  flex flex-col items-center p-3">
              <SortMenu
                type={type}
                sortedDataC={sdC}
                showSortMenu={showSortMenu}
                setShowSortMenu={setShowSortMenu}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
              />

              <h1
                className="text-6xl pb-10 sm:text-7xl font-extrabold  text-center bg-gradient-to-b sm:bg-gradient-to-r from-mainColor-100 to-transparent"
                style={{
                  WebkitTextStroke: "5px transparent",
                  WebkitTextFillColor: "black",
                  WebkitBackgroundClip: "text",
                }}
              >
                sorted {type + "s"}
              </h1>
              <div className="w-full mb-10 text-lg text-white flex justify-between items-end container">
                <div>
                  <label className="mr-5" htmlFor="pages_num">
                    sorted page:
                  </label>
                  <select
                    className="h-10 w-20 bg-transparent border-1 border-white"
                    name="pages_num"
                    id="pages_num"
                    onChange={(e) => {
                      setSortedPage(e.target.value);
                      handleNextPrevBtns();
                    }}
                  >
                    {arr.map((el, i) => {
                      return (
                        <option key={i} className="text-black">
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <BiArrowToRight fontSize={22} className="animate-pulse" />
                  <button
                    className="text-gray-500 underline hover:text-white capitalize"
                    onClick={(e) => {
                      setIsSorted(false);
                    }}
                  >{`go back To ${text + " " + type}s`}</button>
                  <BiArrowToLeft fontSize={22} className="animate-pulse" />
                </div>

                <div className="">
                  <div className="">
                    <button
                      className=" px-3 py-1 flex items-center gap-2 border-2 border-white"
                      onClick={() => setShowSortMenu(!showSortMenu)}
                    >
                      filter
                      <BsFilterRight fontSize={22} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 p-2 w-full h-full overflow-hidden">
                {sortedData.results.map((movie, indx) => (
                  <Link
                    key={indx}
                    to={`/${type}/${movie.id}`}
                    className="w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[400px] flex flex-col items-center border-2 border-transprent-1/5"
                    data-te-toggle="tooltip"
                    data-te-placement="center"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    title={
                      movie["title"] ? movie["title"] : movie["original_name"]
                    }
                    onClick={() => {
                      setLoading(true);
                    }}
                  >
                    <div className="img relative w-full h-3/5 p-1 overflow-hidden img-topLayer-black-gradient">
                      <img
                        src={
                          movie["poster_path"]
                            ? `${base_url}${still_sizes[3]}${movie["poster_path"]}`
                            : movie["_path"]
                            ? `${base_url}${still_sizes[3]}${movie["_path"]}`
                            : "/assets/EL3WAMY.svg"
                        }
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-center object-cover scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="w-full h-2/5 p-3 text-white">
                      <h3 className="text-2xl font-bold pb-2 break-words">
                        {movie["title"]
                          ? movie["title"].length < 12
                            ? movie["title"]
                            : movie["title"].slice(0, 12) + "..."
                          : movie["original_name"].length < 12
                          ? movie["original_name"]
                          : movie["original_name"].slice(0, 12) + "..."}
                      </h3>
                      <div className="italic text-lg text-[#9d9d9d]">
                        release date
                      </div>
                      <h4 className="text-lg font-bold">
                        {movie["release_date"]
                          ? movie["release_date"]
                          : movie["first_air_date"]}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex gap-5 pt-10">
                {sortedData.total_pages > 1 ? (
                  sortedPage === sortedData.total_pages ? (
                    <>
                      <div className="text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100">
                        {sortedPage}
                      </div>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setSortedPage(sortedPage - 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowLeft color="white" fontSize={18} />
                      </button>
                    </>
                  ) : sortedPage === 1 ? (
                    <>
                      <div className="text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100">
                        {sortedPage}
                      </div>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setSortedPage(sortedPage + 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowRight color="white" fontSize={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setSortedPage(sortedPage - 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowLeft color="white" fontSize={18} />
                      </button>
                      <div className="text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100">
                        {sortedPage}
                      </div>
                      <button
                        className="p-3 rounded-lg border-2 border-white"
                        onClick={(e) => {
                          setSortedPage(sortedPage + 1);
                          handleNextPrevBtns();
                        }}
                      >
                        <RxDoubleArrowRight color="white" fontSize={18} />
                      </button>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(GridMovies);
