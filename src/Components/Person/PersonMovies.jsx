import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

function PersonMovies({ personData, imgsData, setLoading }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { base_url, backdrop_sizes } = imgsData;
  const { movie_credits, profile_path } = personData;
  const [moviepage, setMoviePage] = useState(0);
  const [loadingSec, setLoadingSec] = useState(false);
  return (
    <>
      {movie_credits.cast.length > 0 ? (
        <>
          <div className="person-movies text-9xl text-white pt-24 sm:px-5 flex flex-col items-center">
            <h1 className="text-6xl sm:text-7xl font-extrabold pb-11 p-6">
              movies
            </h1>
            <div className="relative w-full h-full flex flex-wrap justify-center gap-2 p-2 overflow-hidden">
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
              {movie_credits.cast
                .slice(moviepage, moviepage + 10)
                .map((movie, indx) => (
                  <Link
                    key={indx}
                    to={`/movie/${movie.id}`}
                    className="w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[350px] flex flex-col items-center  border-2 border-transprent-1/5"
                    onClick={() => {
                      setLoading(true);
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    <div className="img relative w-full h-1/2 p-1 overflow-hidden img-topLayer-black-gradient">
                      <img
                        src={
                          movie["backdrop_path"]
                            ? `${base_url}${backdrop_sizes[3]}${movie["backdrop_path"]}`
                            : movie["poster_path"]
                            ? `${base_url}${backdrop_sizes[3]}${movie["poster_path"]}`
                            : `${base_url}${backdrop_sizes[3]}${profile_path}`
                        }
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-center object-cover scale-110"
                        onLoad={(e) => {
                          setLoading(false);
                        }}
                      />
                    </div>
                    <div className="w-full h-1/2 p-3 text-center">
                      <h3 className="text-2xl break-words font-bold pb-2">
                        {movie["title"].length < 20
                          ? movie["title"]
                          : movie["title"].slice(0, 20) + "..."}
                      </h3>
                      {movie["character"] ? (
                        <>
                          <div className="italic text-lg text-[#9d9d9d]">
                            character
                          </div>
                          <h4 className="text-lg font-bold">
                            {movie["character"].length < 20
                              ? movie["character"]
                              : movie["character"].slice(0, 20) + "..."}
                          </h4>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                ))}
            </div>
            <div className="flex gap-5 my-5">
              {movie_credits.cast.length > 10 ? (
                moviepage + 10 > movie_credits.cast.length - 1 ? (
                  <button
                    className="p-3 rounded-lg border-2 border-white"
                    onClick={(e) => {
                      setMoviePage(moviepage - 10);
                      setLoadingSec(true);
                    }}
                  >
                    <RxDoubleArrowLeft color="white" fontSize={18} />
                  </button>
                ) : moviepage - 10 < 0 ? (
                  <button
                    className="p-3 rounded-lg border-2 border-white"
                    onClick={(e) => {
                      setMoviePage(moviepage + 10);
                      setLoadingSec(true);
                    }}
                  >
                    <RxDoubleArrowRight color="white" fontSize={18} />
                  </button>
                ) : (
                  <>
                    <button
                      className="p-3 rounded-lg border-2 border-white"
                      onClick={(e) => {
                        setMoviePage(moviepage - 10);
                        setLoading(true);
                      }}
                    >
                      <RxDoubleArrowLeft color="white" fontSize={18} />
                    </button>
                    <button
                      className="p-3 rounded-lg border-2 border-white"
                      onClick={(e) => {
                        setMoviePage(moviepage + 10);
                        setLoading(true);
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
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(PersonMovies);
