import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Ripple, initTE } from "tw-elements";
import { ConfigrationContext } from "../../ConfigrationContext";
import { Link } from "react-router-dom";

initTE({ Ripple });
function SearchBar({ showInLarge, setMobileMenuOpen }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, profile_sizes } = images;
  const searchInp = useRef();

  const [inputFocus, setInputFocus] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    searchInp.current.onfocus = (e) => {
      setInputFocus(true);
    };
    searchInp.current.oninput = (e) => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/multi?api_key=1bc194bb8b9d3e088665a80f59f49955",
        params: {
          query: searchInp.current.value,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setSearchedData(response.data.results);
          console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);
  return (
    <div
      className={`${
        showInLarge ? "lg:flex hidden" : "flex lg:hidden"
      } relative container w-full lg:w-1/4 flex-wrap items-stretch`}
    >
      <input
        name="search_inp"
        ref={searchInp}
        type="search"
        className="relative text-red-50 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
      />

      <button
        className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium text-white transition duration-150 ease-in-out bg-mainColor-100 border-2 border-transprent-2/5"
        type="button"
        id="button-addon1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {inputFocus ? (
        searchedData.length > 0 ? (
          <div
            className={`searched-sec w-full  lg:w-[700px] max-h-[398px] lg:h-fit bg-transprent-7/10 overflow-y-scroll  absolute top-[calc(100%+10px)] right-0 z-50 p-2 px-5 flex flex-col gap-2 text-white text-lg rounded-2xl`}
          >
            {searchedData.map((movie, indx) => (
              <Link
                to={`/${movie.media_type}/${movie.id}`}
                key={indx}
                className="h-[70px] min-h-[70px] w-full bg-black hover:bg-slate-900 grid grid-cols-5 overflow-hidden"
                onClick={() => {
                  setInputFocus(false);
                  setMobileMenuOpen(false);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="img h-full w-full col-span-1  overflow-hidden">
                  <img
                    src={
                      movie.media_type === "movie"
                        ? movie.poster_path
                          ? `${base_url}${profile_sizes[3]}${movie.poster_path}`
                          : `${base_url}${profile_sizes[3]}${movie.backdrop_path}`
                        : movie.media_type === "tv"
                        ? movie.poster_path
                          ? `${base_url}${profile_sizes[3]}${movie.poster_path}`
                          : `${base_url}${profile_sizes[3]}${movie.backdrop_path}`
                        : movie.media_type === "person"
                        ? `${base_url}${profile_sizes[3]}${movie.profile_path}`
                        : ""
                    }
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div
                  className={`text w-full h-full col-span-4  flex justify-between items-center px-3 ${
                    movie.original_language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <h2
                    className={`hidden lg:block`}
                    style={{
                      direction: `${
                        movie.original_language === "ar" ? "rtl" : ""
                      }`,
                    }}
                  >
                    {movie.media_type === "movie"
                      ? movie.original_title
                      : movie.original_name}
                  </h2>
                  <h2
                    className={`lg:hidden`}
                    style={{
                      direction: `${
                        movie.original_language === "ar" ? "rtl" : ""
                      }`,
                    }}
                  >
                    {movie.media_type === "movie"
                      ? movie.original_title.length < 20
                        ? movie.original_title
                        : movie.original_title.slice(0, 20) + "..."
                      : movie.original_name.length < 20
                      ? movie.original_name
                      : movie.original_name.slice(0, 20) + "..."}
                  </h2>
                  <p className="type">{movie.media_type}</p>
                </div>
                {/* <div className="btn">
                  <Link className="bg-red-500">{movie.id}</Link>
                </div> */}
              </Link>
            ))}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default React.memo(SearchBar);
