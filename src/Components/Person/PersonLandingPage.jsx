import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import avatar from "../../assets/avatar.svg";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function PersonLandingPage({ personData, imgsData }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { base_url, backdrop_sizes, poster_sizes, still_sizes } = imgsData;
  // .............................
  const {
    images: { profiles },
    name,
    known_for_department,
    place_of_birth,
    biography,
    birthday,
    deathday,
    gender,
    also_known_as,
    external_ids,
    profile_path,
  } = personData;

  const { facebook_id, instagram_id, tiktok_id, twitter_id, youtube_id } =
    external_ids;

  function age(date) {
    let dateNow = new Date(),
      birthDate = new Date(date),
      newDate = new Date(dateNow - birthDate);
    const years = newDate.getFullYear() - 1970;
    return years;
  }
  function ageAtDeath(date, deathDate) {
    let deathAt = new Date(deathDate),
      birthDate = new Date(date),
      newDate = new Date(deathAt - birthDate);
    const years = newDate.getFullYear() - 1970;
    return years;
  }

  return (
    <div className="relative personsec sec-bg w-full h-screen pt-14 overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover sm:bg-auto bg-center"
        style={{
          backgroundImage: `url('${
            profile_path
              ? `${base_url}${still_sizes[2]}${profile_path}`
              : profiles.length > 0
              ? `${base_url}${still_sizes[2]}${
                  profiles[profiles.length - 1]["file_path"]
                }`
              : `${avatar}`
          }')`,
        }}
      >
        {deathday ? (
          <div className="bg-black sm:w-96 w-52 h-10 sm:h-20 -rotate-45 absolute -left-16 top-10"></div>
        ) : (
          ""
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center absolute inset-0 z-10">
        <div className="details text-white py-20 px-5 sm:p-20 ">
          <div className="text flex flex-col items-center lg:block">
            <h1 className="titel text-4xl sm:text-5xl text-center lg:text-left font-bold mb-3 mt-6">
              {`${name} (${known_for_department ? known_for_department : ""})`}
            </h1>

            <div className="place_of_birth mb-4 text-[#9d9d9d] italic text-xl">
              <p>
                {!deathday
                  ? age(birthday) > 21
                    ? gender === 2
                      ? `man, ${age(birthday)} years`
                      : `weman, ${age(birthday)} years`
                    : gender === 2
                    ? `boy, ${age(birthday)} years`
                    : `girl, ${age(birthday)} years`
                  : age(birthday) > 21
                  ? gender === 2
                    ? `man, died, aged ${ageAtDeath(birthday, deathday)} `
                    : `weman, died, aged ${ageAtDeath(birthday, deathday)} `
                  : gender === 2
                  ? `boy, died, aged ${ageAtDeath(birthday, deathday)} `
                  : `girl, died, aged ${ageAtDeath(birthday, deathday)} `}
              </p>
            </div>

            <div className="dates flex items-center flex-wrap gap-1 mb-2">
              {birthday ? (
                <>
                  <span>{"birthdate : "}</span>
                  <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5">
                    <GoDotFill />
                    {birthday}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="place_of_birth mb-6 text-center sm:text-left text-[#9d9d9d] italic text-xl">
              {place_of_birth ? <p>{`in ` + place_of_birth}</p> : ""}
            </div>

            {biography ? (
              <div className="biography h-20 selection:bg-mainColor-100 mb-8 sm:text-xl max-h-24 md:max-h-40 overflow-y-scroll snap-none touch-pan-y pr-2">
                <p>{biography}</p>
              </div>
            ) : (
              ""
            )}

            {also_known_as.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-1 items-center mb-4">
                  <span>known as : </span>
                  {also_known_as.map((name, indx) => (
                    <span
                      key={indx}
                      className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}

            <div className="dates flex items-center flex-wrap gap-1 mb-6">
              <span>{"deathdate : "}</span>
              {deathday ? (
                <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5">
                  <GoDotFill color="black" />
                  {deathday}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium ring-1 ring-inset ring-mainColor-100 mr-1.5">
                  <GoDotFill color="green" className="animate-pulse" />
                  alive
                </span>
              )}
            </div>

            {facebook_id ||
            instagram_id ||
            tiktok_id ||
            twitter_id ||
            youtube_id !== null ? (
              <>
                <div className="accounts flex items-center gap-5 sm:gap-3">
                  <span>accounts : </span>
                  <div className="flex items-center gap-2 ">
                    {facebook_id ? (
                      <Link
                        to={`https://www.facebook.com/${facebook_id}`}
                        target="_blank"
                        className="bg-gradient-to-tr from-blue-800 to-blue-300 p-1 rounded-full hover:scale-125 transition-all duration-300"
                      >
                        <FaFacebookF className="" fontSize={24} />
                      </Link>
                    ) : (
                      ""
                    )}
                    {instagram_id ? (
                      <Link
                        to={`https://www.instagram.com/${instagram_id}`}
                        target="_blank"
                        className="bg-instaGradient p-1 rounded-full hover:scale-125 transition-all duration-300"
                      >
                        <FaInstagram className="" fontSize={24} />
                      </Link>
                    ) : (
                      ""
                    )}
                    {tiktok_id ? (
                      <Link
                        to={`https://www.tiktok.com/${tiktok_id}`}
                        target="_blank"
                        className="bg-gradient-to-tr from-amber-950 to-amber-300 p-1 rounded-full hover:scale-125 transition-all duration-300"
                      >
                        <FaTiktok className=" text-black" fontSize={24} />
                      </Link>
                    ) : (
                      ""
                    )}
                    {twitter_id ? (
                      <Link
                        to={`https://twitter.com/${twitter_id}`}
                        target="_blank"
                        className="bg-blue-400 p-1 rounded-full hover:scale-125 transition-all duration-300"
                      >
                        <FaTwitter className="" fontSize={24} />
                      </Link>
                    ) : (
                      ""
                    )}
                    {youtube_id ? (
                      <Link
                        to={`https://www.youtube.com/${youtube_id}`}
                        target="_blank"
                        className="bg-gradient-to-tr from-red-700 to-red-300 p-1 rounded-full hover:scale-125 transition-all duration-300"
                      >
                        <FaYoutube className="" fontSize={24} />
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="px-20 py-28 xl:px-32 2xl:px-44 w-full h-full hidden lg:block">
          <div className="relative w-full h-full shadow-2xl shadow-[#000000]">
            {profiles[2] ? (
              <img
                src={`${base_url}${poster_sizes[4]}${profiles[2]["file_path"]}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:grayscale transition-all duration-200"
                loading="lazy"
              />
            ) : profiles[0] ? (
              <img
                src={`${base_url}${poster_sizes[4]}${profiles[0]["file_path"]}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:grayscale transition-all duration-200"
                loading="lazy"
              />
            ) : (
              `${avatar}`
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PersonLandingPage);
