import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigrationContext } from "../../ConfigrationContext";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { useDraggable } from "react-use-draggable-scroll";

function Seasons({ seriesData, setLoading }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, backdrop_sizes } = images;

  // ......................

  let { id, backdrop_path, poster_path, seasons, name, original_name } =
    seriesData;

  // REPLACE WHITE SPACE IN LINE TO
  function replaceWS(line) {
    return Array.from(line)
      .map((litter) => {
        if (litter === " ") {
          return "♦";
        } else {
          return litter;
        }
      })
      .join("");
  }
  const navigate = useNavigate();
  const seasonsSec = useRef();
  const seasonsSec_Events = useDraggable(seasonsSec);

  // HANDLE FUNCTION OF CLICK ON [NEXT,PREV] BUTTONS
  const handlePrevORNextBtn = (section, size, sizeInSmall) => {
    if (window.innerWidth > 576) {
      section.scrollBy({ left: size, behavior: "smooth" });
    } else {
      section.scrollBy({ left: sizeInSmall, behavior: "smooth" });
    }
  };

  return (
    <>
      {seasons.length > 0 ? (
        <div className="seasons">
          <div className="container w-full h-full mx-auto mt-12 text-white p-3">
            <h1 className="text-5xl sm:text-7xl text-center font-extrabold text-white mb-10">
              seasons ({seasons.length})
            </h1>

            <div className="flex items-center text-white">
              <button
                className="h-20 bg-mainColor-50 mr-2 animate-pulse"
                onClick={() => {
                  handlePrevORNextBtn(
                    seasonsSec.current,
                    -258,
                    -seasonsSec.current.clientWidth - 8
                  );
                }}
              >
                <TbArrowBadgeLeft fontSize={30} />
              </button>
              <div
                className={`seasons-sec w-full h-[300px] flex flex-nowrap ${
                  seasons.length < 6 ? "lg:justify-center" : ""
                } relative gap-2 overflow-x-auto text-white py-5 home-sec`}
                {...seasonsSec_Events.events}
                ref={seasonsSec}
              >
                {seasons.map((season, indx) => (
                  <div
                    key={indx}
                    onClick={() => {
                      navigate(
                        `/season/${id}-${replaceWS(name)}/${
                          season.season_number
                        }`,
                        {
                          state: {
                            SeriesName: original_name,
                            backdrop_path: backdrop_path,
                            seriesID: id,
                          },
                        }
                      );
                      setLoading(true);
                    }}
                    className="w-full h-full min-w-full sm:max-w-[250px] sm:min-w-[250px] cursor-pointer group"
                  >
                    <div className="img relative w-full h-32 p-1 overflow-hidden rounded-lg">
                      <div className="opacity-0 absolute inset-0 bg-transprent-7/10 z-20 flex items-center justify-center group-hover:opacity-100 transition-all duration-500">
                        <span className="text-mainColor-100 font-extrabold text-5xl">
                          {indx + 1}
                        </span>
                      </div>
                      <img
                        src={
                          season["poster_path"]
                            ? `${base_url}${backdrop_sizes[3]}${season["poster_path"]}`
                            : poster_path
                            ? `${base_url}${backdrop_sizes[3]}${poster_path}`
                            : backdrop_path
                            ? `{backdrop_sizes[3]}${backdrop_path}`
                            : "assets/avatar.svg"
                        }
                        alt="assets/avatar.svg"
                        loading="lazy"
                        className="w-full h-full object-center object-cover scale-110"
                      />
                    </div>
                    <div className="px-2">
                      <h3 className="text-2xl font-bold pb-2">
                        {season["name"].length < 20
                          ? season["name"]
                          : season["name"].slice(0, 20) + "..."}
                      </h3>

                      {season.episode_count ? (
                        <div className="flex gap-2">
                          <div className="italic text-lg text-[#9d9d9d]">
                            episode_count
                          </div>
                          <h4 className="text-lg font-bold bg-mainColor-100 rounded px-3">
                            {season.episode_count}
                          </h4>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="h-20 bg-mainColor-50 ml-2 animate-pulse"
                onClick={() => {
                  handlePrevORNextBtn(
                    seasonsSec.current,
                    208,
                    seasonsSec.current.clientWidth + 8
                  );
                }}
              >
                <TbArrowBadgeRight fontSize={30} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(Seasons);
