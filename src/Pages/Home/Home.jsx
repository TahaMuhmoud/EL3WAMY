import React, { useContext, useEffect, useState } from "react";
import LandingPage from "../../Components/Home/LandingPage";
import { useLoaderData } from "react-router-dom";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTopRatedTv,
  getTrending,
  getTrendingTv,
} from "../../api";
import { ConfigrationContext } from "../../ConfigrationContext";
import Loading from "../LoadingPage/Loading";
import HomeMovieSection from "../../Components/Home/HomeMovieSection";

export const Home = () => {
  // GET BY LOADER FROM API
  let loaderData = useLoaderData();
  const {
    trending_movies,
    popular_movies,
    topRated_movies,
    trending_tv,
    toprated_tv,
  } = loaderData;
  // CONFIGRATION DATA FOR BASE_URL IMAGES
  let { configData } = useContext(ConfigrationContext)

  // HANDLE SHOWING THE LODING SCREEN WHEN CLICK ON MOVIE CARD
  const [loading, setLoading] = useState(true);


  
  return (
    <>
      {configData.images && loaderData ? (
        <div
          className={`home w-full h-full ${
            loading ? "h-[calc(100vh-92px)] overflow-hidden" : ""
          }`}
        >
          <div className="h-full text-9xl mx-auto flex flex-col items-center">
            {loading===true ? <Loading /> : ""}
            <LandingPage results={trending_movies} />
            {/*  */}
            {/*  */}
            {/*  */}
            <HomeMovieSection
              type={"tv"}
              text={"trending tvs"}
              data={trending_tv}
              setLoading={setLoading}
              loading={loading}
            />
            {/*  */}
            <HomeMovieSection
              sec={"toprated"}
              type={"tv"}
              text={"top rated tvs"}
              data={toprated_tv}
              setLoading={setLoading}
            />
            {/*  */}
            <HomeMovieSection
              sec={"popular"}
              type={"movie"}
              text={"popular movies"}
              data={popular_movies}
              setLoading={setLoading}
            />
            {/*  */}
            {/*  */}
            <HomeMovieSection
              sec={"toprated"}
              type={"movie"}
              text={"top rated movies"}
              data={topRated_movies}
              setLoading={setLoading}
            />
            {/*  */}
            {/*  */}
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </>
  );
};

export async function loader(params) {
  let trending = await getTrending(),
    popularMovies = await getPopularMovies(1),
    topRatedMovies = await getTopRatedMovies(1),
    trendingTv = await getTrendingTv(),
    topratedTv = await getTopRatedTv();
  let all = {
    trending_movies: [...trending.results],
    popular_movies: [...popularMovies.results],
    topRated_movies: [...topRatedMovies.results],
    trending_tv: [...trendingTv.results],
    toprated_tv: [...topratedTv.results],
  };
  return all;
}
