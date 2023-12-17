import axios from "axios";

const api_key = "1bc194bb8b9d3e088665a80f59f49955";
const base_url = "https://api.themoviedb.org/3";

export async function getConfigration() {
  const options = {
    method: "GET",
    url: `${base_url}/configuration?api_key=${api_key}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };
  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getTrending() {
  const options = {
    method: "GET",
    url: `${base_url}/trending/all/day?api_key=${api_key}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getMovieDetails(id) {
  const options = {
    method: "GET",
    url: `${base_url}/movie/${id}?api_key=${api_key}&append_to_response=images,videos,credits`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getPopularMovies(page) {
  const options = {
    method: "GET",
    url: `${base_url}/movie/popular?api_key=${api_key}&page=${page}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw new Error("Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU");
  }
  return data;
}

export async function getTopRatedMovies(page) {
  const options = {
    method: "GET",
    url: `${base_url}/movie/top_rated?api_key=${api_key}&page=${page}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getPersonDetails(id) {
  const options = {
    method: "GET",
    url: `${base_url}/person/${id}?api_key=${api_key}&append_to_response=tv_credits%2Cimages%2Cmovie_credits%2Cexternal_ids`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };
  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getTrendingTv() {
  const options = {
    method: "GET",
    url: `${base_url}/trending/tv/day?api_key=${api_key}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getTopRatedTv() {
  const options = {
    method: "GET",
    url: `${base_url}/tv/top_rated?api_key=${api_key}`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getSeriesDetails(id) {
  const options = {
    method: "GET",
    url: `${base_url}/tv/${id}?api_key=${api_key}&append_to_response=images,videos,credits`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getSeasonDeatils(id, season_number) {
  const options = {
    method: "GET",
    url: `${base_url}/tv/${id}/season/${season_number}?api_key=${api_key}&append_to_response=credits,images,videos`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };

  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}

export async function getEposideData(series_id, season_number, eposide_number) {
  const options = {
    method: "GET",
    url: `${base_url}/tv/${series_id}/season/${season_number}/episode/${eposide_number}?api_key=${api_key}&append_to_response=images,credits,videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
    },
  };
  const { data, status } = await axios.request(options);
  if (status !== 200) {
    throw { message: "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU", status: 400 };
  }
  return data;
}


