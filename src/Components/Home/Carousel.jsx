import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConfigrationContext } from "../../ConfigrationContext";
import { VscDebugStart } from "react-icons/vsc";

export default function MainCarousel({ results }) {
  let slides = useRef();

  function handleCarouselOutoPlay() {
    const offset = 1;

    if (slides.current.children) {
      let arr = [...slides.current.children];
      const [activeSlide] = arr.filter((el) => {
        return el.classList.contains("active");
      });

      let nextIndex = arr.indexOf(activeSlide) + offset;
      if (nextIndex > arr.length - 1) nextIndex = 0;

      arr[nextIndex].classList.add("active");
      activeSlide.classList.remove("active");
    } else {
      return;
    }
  }
  useEffect(() => {
    let x = setInterval(() => {
      handleCarouselOutoPlay();
    }, 5000);
    return () => {
      clearInterval(x);
    };
  }, []);

  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { base_url, backdrop_sizes } = configData.images;
  // GET THE TRENDING MOVIES DATA BY LOADER
  let navigate = useNavigate();
  // HANDLE WATCH ICON IN CLICK
  function handleWatchIcon(movie) {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <section className="carousel sec-bg mx-auto w-full h-full text-white absolute inset-0 ">
      <img
        src={`${base_url}${backdrop_sizes[3]}${results[0]["backdrop_path"]}`}
        alt=""
        className="min-w-full min-h-full max-w-full max-h-full inset-0 xl:object-cover object-center absolute"
      />
      <ul className="slides w-full relative h-full" ref={slides}>
        {results.length > 0 && configData
          ? results.map((movie, indx) =>
              indx === 0 ? (
                <li
                  key={indx}
                  className="w-full h-full absolute top-0  opacity-0 transition-all duration-300 active"
                >
                  <img
                    src={`${base_url}${backdrop_sizes[3]}${movie["backdrop_path"]}`}
                    alt=""
                    className="min-w-full min-h-full max-w-full max-h-full inset-0 sm:object-none object-center"
                  />
                  <Link
                    to={`/movie/${movie.id}`}
                    className="absolute bottom-0 left-0 w-full sm:w-[200px] h-[200px]  flex items-center justify-center sm:justify-end gap-3 z-50"
                  >
                    <VscDebugStart
                      fontSize={70}
                      className="cursor-pointer border-8 border-[#ffffff76] rounded-full "
                    />
                    <span className="text-lg cursor-pointer">watch</span>
                  </Link>
                </li>
              ) : (
                <li
                  key={indx}
                  className="w-full h-full absolute top-0  opacity-0 transition-all duration-300"
                >
                  <img
                    src={`${base_url}${backdrop_sizes[3]}${movie["backdrop_path"]}`}
                    alt=""
                    className="min-w-full min-h-full max-h-full absolute inset-0 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full sm:w-[200px] h-[200px] flex items-center justify-center sm:justify-end gap-3 z-50">
                    <VscDebugStart
                      fontSize={70}
                      className="cursor-pointer border-8 border-[#ffffff76] rounded-full "
                      onClick={(e) => {
                        handleWatchIcon(movie);
                      }}
                    />
                    <span className="text-lg">watch</span>
                  </div>
                </li>
              )
            )
          : ".......loading"}
      </ul>
    </section>
  );
}
