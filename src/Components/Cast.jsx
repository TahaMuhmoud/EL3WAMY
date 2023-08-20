import React, { useContext, useState } from "react";
import { ConfigrationContext } from "../ConfigrationContext";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
function Cast({ backdrop_path, poster_path, cast, castType, setLoading }) {
  const [actorsPage, setActorsPage] = useState(0);
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, profile_sizes } = images;
  return (
    <>
      {cast.length > 0 ? (
        <div className="cast">
          <div className="flex flex-col items-center h-full sm:p-5 p-2">
            <h1 className="text-5xl sm:text-7xl text-center font-extrabold text-white mb-10">
              {castType}
            </h1>
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-center items-center h-full overflow-hidden container`}
            >
              {cast.slice(actorsPage, actorsPage + 6).map((actor, indx) => (
                <Link
                  key={indx}
                  to={`/person/${actor.id}`}
                  className=" w-full h-[350px] border-2 border-transprent-1/5"
                  onClick={() => {
                    setLoading(true);
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <div className="img relative w-full h-1/2 p-1 overflow-hidden img-topLayer-black-gradient">
                    <img
                      src={
                        actor["profile_path"]
                          ? `${base_url}${profile_sizes[3]}${actor["profile_path"]}`
                          : `${avatar}`
                      }
                      alt="assets/avatar.svg"
                      loading="lazy"
                      className=" w-full h-full object-center object-cover scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="h-1/2 text-white p-2">
                    <h3 className="text-2xl font-bold pb-2">
                      {actor["original_name"].length < 18
                        ? actor["original_name"]
                        : actor["original_name"].slice(0, 18) + "..."}
                    </h3>
                    {actor.character ? (
                      <>
                        <div className="italic text-lg text-[#9d9d9d]">
                          character
                        </div>
                        <h4 className="text-lg font-bold">
                          {actor["character"].length < 20
                            ? actor["character"]
                            : actor["character"].slice(0, 20) + "..."}
                        </h4>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex gap-5 my-10">
              {cast.length > 6 ? (
                actorsPage + 6 > cast.length - 1 ? (
                  <button
                    className="p-3 rounded-lg border-2 border-white"
                    onClick={(e) => {
                      setActorsPage(actorsPage - 6);
                    }}
                    name="prevBtn"
                  >
                    <RxDoubleArrowLeft color="white" fontSize={18} />
                  </button>
                ) : actorsPage - 6 < 0 ? (
                  <button
                    name="prevBtn"
                    className="p-3 rounded-lg border-2 border-white"
                    onClick={(e) => {
                      setActorsPage(actorsPage + 6);
                    }}
                  >
                    <RxDoubleArrowRight color="white" fontSize={18} />
                  </button>
                ) : (
                  <>
                    <button
                      name="nextBtn"
                      className="p-3 rounded-lg border-2 border-white"
                      onClick={(e) => {
                        setActorsPage(actorsPage - 6);
                      }}
                    >
                      <RxDoubleArrowLeft color="white" fontSize={18} />
                    </button>
                    <button
                      name="nextBtn"
                      className="p-3 rounded-lg border-2 border-white"
                      onClick={(e) => {
                        setActorsPage(actorsPage + 6);
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
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Cast;
