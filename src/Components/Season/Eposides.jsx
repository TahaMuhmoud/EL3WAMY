import React, {
  useContext,
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import { ConfigrationContext } from "../../ConfigrationContext";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { useDraggable } from "react-use-draggable-scroll";
import avatar from "../../assets/avatar.svg";

function Eposides({ seasonDetails, setLoading }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  let { base_url, backdrop_sizes } = images;

  // ......................
  let {
    episodes,
    poster_path,
    backdrop_path,
    SeriesName,
    season_number,
    seriesID,
  } = seasonDetails;

  useEffect(() => {
    return () => {
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  });
  const episodesSe = useRef();
  const episodesSec_Events = useDraggable(episodesSe);

  // HANDLE FUNCTION OF CLICK ON [NEXT,PREV] BUTTONS
  const handlePrevORNextBtn = (section, size, sizeInSmall) => {
    if (window.innerWidth > 576) {
      section.scrollBy({ left: size, behavior: "smooth" });
    } else {
      section.scrollBy({ left: sizeInSmall, behavior: "smooth" });
    }
  };
  // REPLACE WHITE SPACE IN LINE TO
  function replaceWS(line) {
    return Array.from(line)
      .map((litter) => {
        if (litter === " " || litter === "/") {
          return "♦";
        } else {
          return litter;
        }
      })
      .join("");
  }
  return (
    <>
      {episodes.length > 0 ? (
        <div className="seposide">
          <div className="container w-full h-full mx-auto mt-12 text-white p-3">
            <h1 className="text-7xl font-extrabold text-white text-center mb-10">
              eposides ( {episodes.length} )
            </h1>
            <div className="flex items-center text-white">
              <button
                className="h-20 bg-mainColor-50 mr-2 animate-pulse"
                onClick={() => {
                  handlePrevORNextBtn(
                    episodesSe.current,
                    -258,
                    -episodesSe.current.clientWidth - 8
                  );
                }}
              >
                <TbArrowBadgeLeft fontSize={30} />
              </button>
              <div
                className={`seasons-sec w-full h-[300px] flex flex-nowrap ${
                  episodes.length < 6 ? "justify-center" : ""
                } relative gap-2 overflow-x-auto text-white py-5 home-sec`}
                {...episodesSec_Events.events}
                ref={episodesSe}
              >
                {episodes.map((eposide, indx) => (
                  <Link
                    key={indx}
                    to={`/eposide/${replaceWS(SeriesName)}-${seriesID}/season-${season_number}/eposide-${eposide.episode_number}`}
                    className="w-full h-full min-w-full sm:max-w-[250px] sm:min-w-[250px] cursor-pointer group"
                    onClick={() => {
                      setLoading(true);
                    }}
                  >
                    <div className="img relative w-full h-32 p-1 overflow-hidden  rounded-lg">
                      <div className="opacity-0 absolute inset-0 bg-transprent-7/10 z-20 flex items-center justify-center group-hover:opacity-100 transition-all duration-500">
                        <span className="text-mainColor-100 font-extrabold text-5xl">
                          {indx + 1}
                        </span>
                      </div>
                      <img
                        src={
                          eposide["still_path"]
                            ? `${base_url}${backdrop_sizes[3]}${eposide["still_path"]}`
                            : poster_path
                            ? `${base_url}${backdrop_sizes[3]}${poster_path}`
                            : backdrop_path
                            ? `${base_url}${backdrop_sizes[3]}${backdrop_path}`
                            : `${avatar}`
                        }
                        alt="assets/avatar.svg"
                        loading="lazy"
                        className="w-full h-full object-center object-cover scale-110"
                      />
                    </div>
                    <div className="px-2">
                      <h3 className="text-2xl font-bold pb-2">
                        {eposide["name"].length < 20
                          ? eposide["name"]
                          : eposide["name"].slice(0, 20) + "..."}
                      </h3>
                      {eposide.air_date ? (
                        <>
                          <div className="italic text-lg text-[#9d9d9d]">
                            air date
                          </div>
                          <h4 className="text-lg font-bold">
                            {eposide.air_date}
                          </h4>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <button
                className="h-20 bg-mainColor-50 mr-2 animate-pulse"
                onClick={() => {
                  handlePrevORNextBtn(
                    episodesSe.current,
                    258,
                    episodesSe.current.clientWidth + 8
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

export default React.memo(Eposides);
