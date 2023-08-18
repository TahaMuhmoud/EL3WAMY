import axios from "axios";
import { createContext, useEffect, useState } from "react";

const api_key = "1bc194bb8b9d3e088665a80f59f49955";
const base_url = "https://api.themoviedb.org/3";

export const LanguagesContext = createContext();

export default function LanguagesContextProvider({ children }) {
  const [langsData, setLangsData] = useState([]);

  async function getGenersData() {
    const options = {
      method: "GET",
      url: `${base_url}/configuration/languages?${api_key}`,
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
    setLangsData(data);
  }
  useEffect(() => {
    getGenersData();
  },[]);
  return (
    <LanguagesContext.Provider
      value={{
        langsData,
      }}
    >
      {children}
    </LanguagesContext.Provider>
  );
}
