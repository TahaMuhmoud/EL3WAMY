import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
function Director({ movieData, imagesPathData, setLoading }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { base_url, profile_sizes } = imagesPathData;
  const {
    credits: { crew },
  } = movieData;
  // .....................................
  useEffect(() => {
    return () => {
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  });
  let dirctors = crew.filter((el, indx) => {
    return el?.job === "Director";
  });
  return (
    <>
      {dirctors.length > 0 ? (
        <div className="director-sec container w-full m-auto">
          <div className="w-full flex flex-col items-center">
            <Link
              to={`/person/${dirctors[0]["id"]}`}
              className="director flex flex-col items-center"
              onClick={() => {
                setLoading(true);
                window.scrollTo({ top: 0 });
              }}
            >
              <span className="bg-[#ffffff2c] w-1/2 h-[1px] mb-10"></span>
              <h1 className="text-7xl font-extrabold text-white pb-11">
                Director
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="w-52 aspect-square rounded-full  overflow-hidden relative border-2 border-white">
                  <img
                    src={
                      dirctors[0]["profile_path"] !== null
                        ? `${base_url}${profile_sizes[3]}${dirctors[0]["profile_path"]}`
                        : `${avatar}`
                    }
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="title">
                  <div className="name text-white text-3xl text-center sm:text-left sm:text-6xl pb-5 sm:tracking-wider">
                    {dirctors[0].name}
                  </div>
                  <div className="job italic text-center sm:text-left text-[#949494] text-2xl ">
                    {dirctors[0].job}
                  </div>
                </div>
              </div>
              <span className="bg-[#ffffff2c] w-1/2 h-[1px] my-10"></span>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(Director);
