import axios from "axios";
import { createContext, useEffect, useState } from "react";

const api_key = "1bc194bb8b9d3e088665a80f59f49955";
const base_url = "https://api.themoviedb.org/3";

export const SortedDataContext = createContext();

export default function SortedDataContextProvider({ children }) {
  const [sortedData, setSortedData] = useState({});
  const [sortedPage, setSortedPage] = useState(2);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [sortLang, setSortLang] = useState("en");
  const [geners, setGeners] = useState(["16"]);
  const [type, setType] = useState("movie");

  async function getSortedData(sortBy, geners, page, type,lang) {
    const options = {
      method: "GET",
      url: `${base_url}/discover/${type}?api_key=${api_key}`,
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: page,
        sort_by: sortBy,
        with_genres: geners.join(","),
        with_original_language:lang,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8",
      },
    };

    const { data, status } = await axios.request(options);
    if (status !== 200) {
      throw new Error( "Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU" )
    }
    setSortedData(data);
  }
  useEffect(() => {
    getSortedData(sortBy, geners, sortedPage, type, sortLang);
  }, [sortBy, geners, sortedPage, type,sortLang]);
  return (
    <SortedDataContext.Provider
      value={{
        sortedData,
        sortBy,
        geners,
        sortedPage,
        setGeners,
        setSortBy,
        setSortedPage,
        setType,
        sortLang,
        setSortLang,
      }}
    >
      {children}
    </SortedDataContext.Provider>
  );
}
