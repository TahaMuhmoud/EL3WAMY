import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cast from "../../Components/Cast";
import { getMovieDetails } from "../../api";
import { ConfigrationContext } from "../../ConfigrationContext";
import MovieLandingPage from "../../Components/Movie/MovieLandingPage";
import Director from "../../Components/Movie/Director";
import Loading from "../LoadingPage/Loading";
export default function MovieDetails() {
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext);
  let { images } = configData;

  // GET THE MOVIE DATA BY LOADER
  let movieData = useLoaderData();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {images && movieData ? (
        <section className="">
          {loading ? <Loading /> : ""}
          <MovieLandingPage
            movieData={movieData}
            imagesPathData={images}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
          <Director
            movieData={movieData}
            imagesPathData={images}
            setLoading={setLoading}
          />
          {/*  */}
          {/*  */}
          <Cast
            backdrop_path={movieData.backdrop_path}
            poster_path={movieData.poster_path}
            cast={movieData.credits.cast}
            castType={"actors"}
            setLoading={setLoading}
          />
        </section>
      ) : (
        <h1 className="text-4xl text-mainColor-100">...laoding</h1>
      )}
    </>
  );
}
export async function loader({ params }) {
  let movieImagesAndDetails = await getMovieDetails(params.id);
  return movieImagesAndDetails;
}
