import{r as a,j as k,a as n}from"./index-77e54340.js";import{G as l}from"./GridMovies-f9a7a924.js";const m="1bc194bb8b9d3e088665a80f59f49955",h="https://api.themoviedb.org/3";function x(){const[e,o]=a.useState({});let[t,s]=a.useState(1);async function i(r){const p={method:"GET",url:`${h}/movie/popular?api_key=${m}&page=${r}`,headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxOTRiYjhiOWQzZTA4ODY2NWE4MGY1OWY0OTk1NSIsInN1YiI6IjY0YmMyOWQxNThlZmQzMDBhY2UxOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSs4YLwpcGuof46NRC0lwHrFJuVJM0xPjqcUzE_Ooh8"}},{data:u,status:c}=await n.request(p);if(c!==200)throw{message:"Fuckkkkkkkkkkkkkkkkk UUUUUUUUUUU",status:400};o(u)}return a.useEffect(()=>{i(t)},[t]),k.jsx(l,{text:"popular",type:"movie",data:e,setPage:s,page:t})}export{x as default};