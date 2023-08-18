import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function PersonLandingPage({ personData, imgsData }) {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { base_url, backdrop_sizes, poster_sizes } = imgsData;
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
    <div className="personsec sec-bg w-full h-screen pt-14 overflow-hidden">
      {profiles[profiles.length - 1] ? (
        <img
          src={
            profile_path
              ? `${base_url}${backdrop_sizes[3]}${profile_path}`
              : profiles.length > 0
              ? `${base_url}${backdrop_sizes[3]}${
                  profiles[profiles.length - 1]["file_path"]
                }`
              : "/assets/avatar.svg"
          }
          alt="person img"
          className="min-w-full min-h-full max-h-full absolute inset-0 object-cover object-center -z-50"
          loading="lazy"
        />
      ) : (
        ""
      )}
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
              <div className="biography selection:bg-mainColor-100 mb-8 sm:text-xl max-h-24 md:max-h-40 overflow-y-scroll snap-none touch-pan-y pr-2">
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
                  <GoDotFill color="green" />
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
                  {facebook_id ? (
                    <Link
                      to={`https://www.facebook.com/${facebook_id}`}
                      target="_blank"
                    >
                      <FaFacebook color="red" fontSize={30} />
                    </Link>
                  ) : (
                    ""
                  )}
                  {instagram_id ? (
                    <Link
                      to={`https://www.instagram.com/${instagram_id}`}
                      target="_blank"
                      className=""
                    >
                      <FaInstagram color="red" fontSize={36} />
                    </Link>
                  ) : (
                    ""
                  )}
                  {tiktok_id ? (
                    <Link
                      to={`https://www.tiktok.com/${tiktok_id}`}
                      target="_blank"
                    >
                      <FaTiktok color="red" fontSize={30} />
                    </Link>
                  ) : (
                    ""
                  )}
                  {twitter_id ? (
                    <Link
                      to={`https://twitter.com/${twitter_id}`}
                      target="_blank"
                    >
                      <FaTwitter color="red" fontSize={30} />
                    </Link>
                  ) : (
                    ""
                  )}
                  {youtube_id ? (
                    <Link
                      to={`https://www.youtube.com/${youtube_id}`}
                      target="_blank"
                    >
                      <FaYoutube color="red" fontSize={30} />
                    </Link>
                  ) : (
                    ""
                  )}
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
                className="absolute inset-0 w-full h-full cursor-pointer hover:grayscale transition-all duration-200"
                loading="lazy"
              />
            ) : profiles[0] ? (
              <img
                src={`${base_url}${poster_sizes[4]}${profiles[0]["file_path"]}`}
                alt=""
                className="absolute inset-0 w-full h-full cursor-pointer hover:grayscale transition-all duration-200"
                loading="lazy"
              />
            ) : (
              "/assets/avatar.svg"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PersonLandingPage);
