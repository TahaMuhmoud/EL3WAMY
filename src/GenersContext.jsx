import axios from "axios";
import { createContext, useEffect, useState } from "react";

const api_key = "1bc194bb8b9d3e088665a80f59f49955";
const base_url = "https://api.themoviedb.org/3";

export const GenersContext = createContext();

export default function GenersContextProvider({ children }) {
  const [genersData, setGenersData] = useState({});
  const [typeMovieOrTv, setTypeMovieOrTv] = useState("movie");

  async function getGenersData(type) {
    const options = {
      method: "GET",
      url: `${base_url}/genre/${type}/list?${api_key}`,
      params: { language: "en" },
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
    setGenersData(data);
  }
  useEffect(() => {
    getGenersData(typeMovieOrTv);
  }, [typeMovieOrTv]);
  return (
    <GenersContext.Provider
      value={{
        genersData,setTypeMovieOrTv
      }}
    >
      {children}
    </GenersContext.Provider>
  );
}

