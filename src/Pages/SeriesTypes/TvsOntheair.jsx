import React, { useEffect, useState } from 'react'
import GridMovies from '../../Components/GridMovies';
import axios from 'axios';

const api_key = "1bc194bb8b9d3e088665a80f59f49955";
const base_url = "https://api.themoviedb.org/3";
function TvsOntheair() {
  const [tvsOntheairData, setTvsOntheairData] = useState({});
  let [page, setPage] = useState(1);
  async function getTvsOntheair(page) {
    const options = {
      method: "GET",
      url: `${base_url}/tv/popular?api_key=${api_key}&page=${page}`,
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
    setTvsOntheairData(data);
  }
  useEffect(() => {
    getTvsOntheair(page);
  }, [page]);

  return (
    <GridMovies
      text={"on air"}
      type={"tv"}
      data={tvsOntheairData}
      setPage={setPage}
      page={page}
    />
  );
}

export default TvsOntheair