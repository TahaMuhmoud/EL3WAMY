import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ConfigrationContext } from "../../ConfigrationContext";
import { getPersonDetails } from "../../api";
import PersolnLandingPage from "../../Components/Person/PersonLandingPage";
import PersonMovies from "../../Components/Person/PersonMovies";
import PersonTvs from "../../Components/Person/PersonTvs";
import { useEffect } from "react";
import Loading from "../LoadingPage/Loading";
export default function Person() {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  const imgsData = configData.images;
  let personData = useLoaderData();
  const [personDitails, setPersonDitails] = useState(personData);
  useEffect(() => {
    setPersonDitails(personData);
  }, [personData]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {configData && personDitails ? (
        <section className="">
          {loading?<Loading/>:''}
          <PersolnLandingPage personData={personDitails} imgsData={imgsData} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <PersonMovies
            personData={personDitails}
            imgsData={imgsData}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
          {/*  */}
          <PersonTvs
            personData={personDitails}
            imgsData={imgsData}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
          {/*  */}
        </section>
      ) : (
        <h1 className="text-4xl text-mainColor-100">...laoding</h1>
      )}
    </>
  );
}
export function loader({ params }) {
  return getPersonDetails(params.id);
}
