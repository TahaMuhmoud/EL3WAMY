import{r as a,j as n,a as u}from"./index-94226d0d.js";import{G as d}from"./GridMovies-1056b0b2.js";const h="1bc194bb8b9d3e088665a80f59f49955",U="https://api.themoviedb.org/3";function x(){const[e,s]=a.useState({});let[t,o]=a.useState(1);async function i(r){const p={method:"GET",url:`${U}/tv/top_rated?api_key=${h}&page=${r}`,headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8"}},{data:c,status:k}=await u.request(p);if(k!==200)throw{message:"Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU",status:400};s(c)}return a.useEffect(()=>{i(t)},[t]),n.jsx(d,{text:"top rated",type:"tv",data:e,setPage:o,page:t})}export{x as default};