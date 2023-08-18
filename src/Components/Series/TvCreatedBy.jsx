import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ConfigrationContext } from "../../ConfigrationContext";

function TvCreatedBy({ seriesData,setLoading }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url , profile_sizes } = images;
  // ................................

  let { created_by } = seriesData;
  return (
    <>
      {created_by[0] ? (
        <>
          <div className="director-sec container w-full m-auto">
            <Link
              to={`/person/${created_by[0]["id"]}`}
              className="director flex flex-col items-center"
              onClick={() => {
                setLoading(true);
              }}
            >
              <span className="bg-[#ffffff2c] w-1/2 h-[1px] mb-10"></span>
              <h1 className="text-5xl sm:text-7xl text-center font-extrabold text-white pb-5">
                created by
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                <div className="w-52 aspect-square rounded-full  overflow-hidden relative border-2 border-white">
                  <img
                    src={
                      created_by[0]["profile_path"] !== null
                        ? `${base_url}${profile_sizes[3]}${created_by[0]["profile_path"]}`
                        : "/assets/avatar.svg"
                    }
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                <div className="title">
                  <div className="name text-white text-3xl text-center sm:text-left sm:text-6xl pb-5 sm:tracking-wider">
                    {created_by[0].name}
                  </div>
                  <div className="job italic text-center sm:text-left text-[#949494] text-2xl ">
                    creator
                  </div>
                </div>
              </div>
              <span className="bg-[#ffffff2c] w-1/2 h-[1px] mt-10"></span>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default React.memo(TvCreatedBy);
