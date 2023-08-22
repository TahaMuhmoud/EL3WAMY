import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { ConfigrationContext } from "../../ConfigrationContext";
import { useDraggable } from "react-use-draggable-scroll";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";

function HomeMovieSection({ data, text, type, sec, setLoading, loading }) {
  let { configData } = useContext(ConfigrationContext);
  let { base_url, backdrop_sizes } = configData.images;

  // draggable by useDraggable from react-use-draggable-scroll
  const sec_El = useRef();
  const sec_Events = useDraggable(sec_El);
  // HANDLE SHOWING THE LODING SCREEN WHEN CLICK ON MOVIE CARD

  function handleClickOnMovie() {
    setLoading(true);
    window.scrollTo({ top: 0 });
  }

  // HANDLE FUNCTION OF CLICK ON [NEXT,PREV] BUTTONS
  function handlePrevORNextBtn(section, size, sizeInSmall) {
    if (window.innerWidth > 576) {
      section.scrollBy({ left: size, behavior: "smooth" });
    } else {
      section.scrollBy({ left: sizeInSmall, behavior: "smooth" });
    }
  }

  return (
    <section className="container w-full h-full mx-auto mt-5 md:mt-10 text-white p-3">
      <span className="bg-[#ffffff2c] w-1/2 h-[1px] mb-10"></span>
      <h1
        className="w-fit text-3xl sm:text-5xl font-extrabold pb-5 bg-gradient-to-r from-mainColor-100 to-[#1b002f]"
        style={{
          WebkitTextStroke: "5px transparent",
          WebkitTextFillColor: "black",
          WebkitBackgroundClip: "text",
        }}
      >
        {text}
      </h1>
      <span className="block w-1/4 h-2 bg-gradient-to-r from-mainColor-100 to-black"></span>
      <div className="flex items-center text-white">
        <button
          className="h-20 bg-mainColor-50 mr-2 animate-pulse"
          onClick={() => {
            handlePrevORNextBtn(
              sec_El.current,
              -308,
              -sec_El.current.clientWidth - 8
            );
          }}
        >
          <TbArrowBadgeLeft fontSize={30} />
        </button>
        <div
          className="home-sec w-full h-[300px] flex flex-nowrap relative gap-2 overflow-x-auto overflow-y-hidden text-white py-5"
          {...sec_Events.events}
          ref={sec_El}
        >
          {data.map((movie, indx) => (
            <Link
              key={indx}
              to={`/${type}/${movie.id}`}
              className="w-full h-full min-w-full sm:min-w-[300px]"
              onClick={(e) => {
                handleClickOnMovie();
              }}
            >
              <div className="img relative w-full h-44 p-1 overflow-hidden rounded-lg">
                <img
                  src={`${base_url}${backdrop_sizes[3]}${movie["poster_path"]}`}
                  alt=""
                  className="w-full h-full object-center object-cover scale-110"
                  loading="lazy"
                  width={300}
                  height={128}
                />
              </div>

              <div className="px-2">
                <h3 className="text-lg font-bold pb-2">
                  {type === "tv"
                    ? movie["name"].length < 20
                      ? movie["name"]
                      : movie["name"].slice(0, 20) + "..."
                    : movie["title"].length < 20
                    ? movie["title"]
                    : movie["title"].slice(0, 20) + "..."}
                </h3>
                <div className="italic text-sm text-[#9d9d9d]">
                  {type === "tv" ? "first air date" : "release date"}
                </div>
                <h4 className="text-sm font-bold">
                  {type === "tv"
                    ? movie["first_air_date"]
                    : movie["release_date"]}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="h-20 bg-mainColor-50 ml-2 animate-pulse"
          onClick={() => {
            handlePrevORNextBtn(
              sec_El.current,
              308,
              sec_El.current.clientWidth + 8
            );
          }}
        >
          <TbArrowBadgeRight fontSize={30} />
        </button>
      </div>
      {text === "trending tvs" ? (
        ""
      ) : (
        <div className="flex justify-center mt-3 text-white">
          <Link
            to={`/${type}s/${sec}`}
            className="relative block w-fit border-1 border-mainColor-100 !text-mainColor-100 overflow-hidden after:content-['show_all'] after:text-white after:transition-all after:duration-500 after:absolute after:top-0 after:bottom-0 after:-left-full hover:after:inset-0 after:bg-mainColor-100 after:flex after:items-center after:justify-center z-0 text-xl p-2 rounded-lg"
          >
            <span>show all</span>
          </Link>
        </div>
      )}
    </section>
  );
}

export default HomeMovieSection;
