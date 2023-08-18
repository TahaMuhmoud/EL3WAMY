import React, { useContext, useState } from "react";
import { ConfigrationContext } from "../../ConfigrationContext";
import Cast from "../../Components/Cast";
import { getSeasonDeatils} from "../../api";
import { useLoaderData, useLocation } from "react-router-dom";
import SeasonLandingPage from "../../Components/Season/SeasonLandingPage";
import Eposides from "../../Components/Season/Eposides";
import Loading from "../LoadingPage/Loading";

function SeasonPage() {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;
  // LOAD DATA USING LOADER
  const seasonDetails = useLoaderData();
  const locationData = useLocation();
  const [loading, setLoading] = useState(false);
  return (
    <>
      {images !== undefined && seasonDetails ? (
        <section className="">
          {loading ? <Loading /> : ""}
          {/*  */}
          {/*  */}
          <SeasonLandingPage
            seasonDetails={{ ...seasonDetails, ...locationData.state }}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
          <Eposides
            seasonDetails={{ ...seasonDetails, ...locationData.state }}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
          <Cast
            backdrop_path={seasonDetails.backdrop_path}
            poster_path={seasonDetails.poster_path}
            cast={seasonDetails.credits.cast}
            castType={"actors"}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
        </section>
      ) : (
        <h1 className="text-4xl text-mainColor-100">...laoding</h1>
      )}
    </>
  );
}

export default React.memo(SeasonPage);

export async function loader({ params }) {
  return await getSeasonDeatils(params.Sid.split("-")[0], params.Snum);
}
