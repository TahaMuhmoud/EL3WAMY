import{r as e,j as n,a as u}from"./index-6e5bef67.js";import{G as d}from"./GridMovies-2504b380.js";const m="1bc194bb8b9d3e088665a80f59f49955",h="https://api.themoviedb.org/3";function x(){const[a,o]=e.useState({});let[t,s]=e.useState(1);async function i(r){const p={method:"GET",url:`${h}/movie/top_rated?api_key=${m}&page=${r}`,headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8"}},{data:c,status:k}=await u.request(p);if(k!==200)throw{message:"Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU",status:400};o(c)}return e.useEffect(()=>{i(t)},[t]),n.jsx(d,{text:"top rated",type:"movie",data:a,setPage:s,page:t})}export{x as default};
