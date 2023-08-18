import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSeriesDetails } from "../../api";
import { ConfigrationContext } from "../../ConfigrationContext";
import Seasons from "../../Components/Series/Seasons";
import TvCreatedBy from "../../Components/Series/TvCreatedBy";
import Cast from "../../Components/Cast";
import TvLandingPage from "../../Components/Series/TvLandingPage";
import Loading from "../LoadingPage/Loading";

function SeriesDetails() {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;

  // GET THE MOVIE DATA BY LOADER
  let seriesData = useLoaderData();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {images && seriesData.status ? (
        <section className="">
          {loading ? <Loading /> : ""}
          {/*  */}
          {/*  */}

          <TvLandingPage seriesData={seriesData} setLoading={setLoading} />

          {/*  */}

          <TvCreatedBy seriesData={seriesData} setLoading={setLoading} />

          {/*  */}
          {/*  */}

          <Seasons seriesData={seriesData} setLoading={setLoading} />

          {/*  */}
          {/*  */}

          <Cast
            setLoading={setLoading}
            cast={seriesData.credits.cast}
            castType={"actors"}
          />

          {/*  */}
        </section>
      ) : (
        <h1 className="text-4xl text-mainColor-100">...laoding</h1>
      )}
    </>
  );
}
export default React.memo(SeriesDetails);
export async function loader({ params }) {
  let seriesDetails = await getSeriesDetails(params.id);
  return seriesDetails;
}
