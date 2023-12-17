import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createHashRouter,
} from "react-router-dom";

import RootLauout from "./Pages/RootLayOut/RootLayout";
import { loader as trendingLoader } from "./Pages/Home/Home";
import { loader as movieDetailsLoader } from "./Pages/MoviePage/MovieDetails";
import { loader as personDetailsLoader } from "./Pages/PersonPage/Person";
import { loader as seriesDetailsLoader } from "./Pages/SeriesPage/SeriesDetails";
import { loader as seasonDetailsLoader } from "./Pages/Season/SeasonPage";
import { loader as eposideDataLoader } from "./Pages/Episode/EposideDetails";
import { Home } from "./Pages/Home/Home";
// import MovieDetails from "./Pages/MovieDetails";
import NotFound from "./Pages/NotFoundPage/NotFound";
import Person from "./Pages/PersonPage/Person";
import Error from "./Pages/Error/Error";

import SeasonPage from "./Pages/Season/SeasonPage";

import EposideDetails from "./Pages/Episode/EposideDetails";
import React from "react";
import Loading from "./Pages/LoadingPage/Loading";
import Movies from "./Pages/MoviesTypes/Movies";
import Tvs from "./Pages/SeriesTypes/Tvs";
import VideoNotavailable from "./Components/VideoNotavailable";
import { BubbleChat } from "flowise-embed-react";
const MovieDetailsLazy = React.lazy(
  () => import("./Pages/MoviePage/MovieDetails")
);
const SeriesDetailsLazy = React.lazy(
  () => import("./Pages/SeriesPage/SeriesDetails")
);

const PopularMoviesLazy = React.lazy(
  () => import("./Pages/MoviesTypes/Popular")
);
const TopRatedMoviesLazy = React.lazy(
  () => import("./Pages/MoviesTypes/TopRated")
);
const MoviesUpcomingLazy = React.lazy(
  () => import("./Pages/MoviesTypes/MoviesUpcoming")
);
const MoviesNowPlayingLazy = React.lazy(
  () => import("./Pages/MoviesTypes/MoviesNowPlaying")
);

// .........
// .........
// .........

const PopularTvsLazy = React.lazy(
  () => import("./Pages/SeriesTypes/PopularTvs")
);
const TopRatedTvsLazy = React.lazy(
  () => import("./Pages/SeriesTypes/TopRatedTvs")
);
const TvsOntheairLazy = React.lazy(
  () => import("./Pages/SeriesTypes/TvsOntheair")
);
const AiringtodayTvsLazy = React.lazy(
  () => import("./Pages/SeriesTypes/AiringtodayTvs")
);

function App() {
  const browserRouter = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLauout />} errorElement={<Error />}>
        <Route index element={<Home />} loader={trendingLoader} />
        <Route path="/home" element={<Home />} loader={trendingLoader} />

        <Route
          path="/movie/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <MovieDetailsLazy />
            </React.Suspense>
          }
          loader={movieDetailsLoader}
        />

        <Route
          path="/tv/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <SeriesDetailsLazy />
            </React.Suspense>
          }
          loader={seriesDetailsLoader}
        />
        <Route
          path="/season"
          element={<SeasonPage />}
          loader={seasonDetailsLoader}
        >
          <Route
            path=":Sid"
            element={<SeasonPage />}
            loader={seasonDetailsLoader}
          >
            <Route
              path=":Snum"
              element={<SeasonPage />}
              loader={seasonDetailsLoader}
            />
          </Route>
        </Route>
        <Route
          path="/eposide"
          element={<EposideDetails />}
          loader={eposideDataLoader}
        >
          <Route
            path=":Sname"
            element={<EposideDetails />}
            loader={eposideDataLoader}
          >
            <Route
              path=":Snum"
              element={<EposideDetails />}
              loader={eposideDataLoader}
            >
              <Route
                path=":Enum"
                element={<EposideDetails />}
                loader={eposideDataLoader}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/person" element={<Person />} loader={personDetailsLoader}>
          <Route path=":id" element={<Person />} loader={personDetailsLoader} />
        </Route>

        {/*  */}
        {/*  */}
        {/*  */}
        <Route path="/movies" element={<Movies />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <PopularMoviesLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/movies/popular"
            element={
              <React.Suspense fallback={<Loading />}>
                <PopularMoviesLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/movies/toprated"
            element={
              <React.Suspense fallback={<Loading />}>
                <TopRatedMoviesLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/movies/nowplaying"
            element={
              <React.Suspense fallback={<Loading />}>
                <MoviesNowPlayingLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/movies/upcoming"
            element={
              <React.Suspense fallback={<Loading />}>
                <MoviesUpcomingLazy />
              </React.Suspense>
            }
          />
        </Route>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Route path="/tvs" element={<Tvs />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <PopularTvsLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/tvs/popular"
            element={
              <React.Suspense fallback={<Loading />}>
                <PopularTvsLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/tvs/toprated"
            element={
              <React.Suspense fallback={<Loading />}>
                <TopRatedTvsLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/tvs/onair"
            element={
              <React.Suspense fallback={<Loading />}>
                <TvsOntheairLazy />
              </React.Suspense>
            }
          />
          <Route
            path="/tvs/airingtoday"
            element={
              <React.Suspense fallback={<Loading />}>
                <AiringtodayTvsLazy />
              </React.Suspense>
            }
          />
        </Route>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Route
          path="videonotavailable/:type/:id"
          element={<VideoNotavailable />}
        />
        <Route path="notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={browserRouter} />
      <BubbleChat
        chatflowid="fb0e8cfc-e8a6-4072-89ed-2cf39512275d"
        apiHost="http://localhost:3000"
        theme={{
          button: {
            backgroundColor: "#9501ff",
            size: "large",
          },
          chatWindow: {
            welcomeMessage:
              "Hi, i'm here to recommend you a movies as the movie you like",
            backgroundColor: "#ffffff",
            height: 500,
            width: 300,
          },
          userMessage: {
            backgroundColor: "#9501ff",
            textColor: "#ffffff",
          },
          textInput: {
            placeholder: "Type movie name",
            sendButtonColor: "#9501ff",
          },
        }}
      />
    </>
  );
}

export default App;
