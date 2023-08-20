import{G,U,R as W,b as I,Q,r as s,c as H,L as Y,j as e,B as q,F as J,C as K,S as P,d as D,e as M,f as V,g as z,h as $,i as X,k as Z}from"./index-f9f61b98.js";function A(h){return G({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"}}]})(h)}function R(h){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"}},{tag:"path",attr:{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"}}]})(h)}U({Ripple:I,Tooltip:Q});const ee=["popularity.asc","popularity.desc","revenue.asc","revenue.desc","primary_release_date.asc","primary_release_date.desc","vote_average.asc","vote_average.desctext-black","vote_count.asc","vote_count.desc"];function te({type:h,sortedDataC:o,showSortMenu:u,setShowSortMenu:p,isSorted:i,setIsSorted:L}){const{genersData:{genres:_}}=s.useContext(H);console.log(_);let{langsData:m}=s.useContext(Y);const B=s.useRef(),F=s.useRef();let c="",g="",{sortBy:k,setGeners:y,setSortBy:N,setSortedPage:C,setType:T,sortLang:S,setSortLang:a}=o;const j=()=>{p(!u)},d=s.useRef([]);d.current=[];let n=[];const b=l=>{d.current.push(l)};m=m.sort((l,t)=>l.english_name<t.english_name?-1:l.english_name>t.english_name?1:0);const f=s.useRef(),x=s.useRef(),[v,w]=s.useState([]);return s.useEffect(()=>{f.current.oninput=l=>{l.target.value===""?x.current.classList.remove("!block"):x.current.classList.add("!block");let t=m.filter((r,O)=>r.name.toLowerCase().includes(l.target.value.toLowerCase())||r.english_name.toLowerCase().includes(l.target.value.toLowerCase()));w(t)},console.log(v)}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`w-5/6 sm:w-96 h-screen bg-gray-800 fixed top-0 left-0  ${u?"translate-x-0":"-translate-x-[calc(100%-4px)]"}
                  z-[10000000000] transition-all duration-1000 p-5 border-r-4 border-mainColor-100 shadow-[inset_0px_0px_80px_black]`,ref:B,children:[e.jsx("button",{className:"w-6 h-20 bg-mainColor-100 rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-center absolute right-0 translate-x-full top-1/2 -translate-y-1/2 text-white",onClick:j,children:e.jsxs("div",{children:[e.jsx(R,{fontSize:18,className:`${u?"rotate-180":"rotate-0"} transition-all duration-1000`}),e.jsx(R,{fontSize:18,className:`${u?"rotate-180":"rotate-0"} transition-all duration-1000`}),e.jsx(R,{fontSize:18,className:`${u?"rotate-180":"rotate-0"} transition-all duration-1000`})]})}),e.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-5 overflow-y-auto overveiw",children:[e.jsxs("div",{className:"w-full text-3xl text-white",children:[e.jsx("h1",{className:"mb-5 font-bold",children:"sort by :"}),e.jsx("select",{className:`w-full p-3 text-lg bg-transparent border-[1px] 
                      shadow-[inset_0px_18px_36px_-18px_black]`,name:"sortby_select",id:"sortby_select",onChange:l=>{c=l.target.value},ref:F,children:ee.map((l,t)=>e.jsx("option",{className:"text-black",children:l},t))})]}),e.jsxs("div",{className:"text-3xl text-white",children:[e.jsx("h1",{className:"mb-5 font-bold",children:"sort by :"}),e.jsx("div",{className:"text-lg flex flex-wrap items-center justify-center gap-2",children:_.map((l,t)=>e.jsxs("label",{htmlFor:`opt-${t+1}`,className:"px-3 text-sm md:text-lg bg-mainColor-50 rounded-full shadow-[-3px_-3px_5px_var(--mainClr),3px_3px_5px_rgba(0,0,0,.2)] cursor-pointer",onClick:r=>{r.target.classList.toggle("shadow-none")},children:[e.jsx("input",{className:"mr-1 hidden",type:"checkbox",id:`opt-${t+1}`,name:"geners",value:`${l.id}`,ref:b}),l.name]},t))})]}),e.jsxs("div",{className:"text-lg w-full text-white",children:[e.jsx("h1",{className:"mb-5 font-bold text-3xl",children:"languages :"}),e.jsxs("div",{className:"w-full h-10 relative",children:[e.jsx("input",{type:"text",name:"lang-inp",id:"lang-inp",className:`w-full h-full text-lg bg-transparent border-1 outline-none p-5  
                      shadow-[inset_0px_18px_36px_-18px_black]`,ref:f,onFocus:l=>{x.current.classList.add("!block")}}),e.jsx(q,{fontSize:18,className:"absolute right-3 text-white top-1/2 -translate-y-1/2"}),e.jsx("div",{className:"searched-sec hidden w-full max-h-[360px] text-black text-lg absolute left-0 bottom-full bg-white overflow-auto ",ref:x,children:v?v.map((l,t)=>e.jsx("div",{className:"w-full h-10 border-gray-400 border-b-1 cursor-pointer flex items-center pl-5 hover:bg-gray-500 hover:text-white",onClick:r=>{f.current.value=r.target.innerHTML,g=l.iso_639_1,x.current.classList.remove("!block")},children:l.name!==""?l.name:l.english_name},t)):""})]})]}),e.jsx("div",{className:"text-2xl",children:e.jsxs("button",{className:"bg-black px-3 py-1 flex items-center gap-2 capitalize text-white rounded-full shadow-[-3px_-3px_5px_black,3px_3px_5px_rgba(0,0,0,.2)]",onClick:l=>{c===""?c=k:c=F.current.value,g===""&&(g=S);for(let t=0;t<d.current.length;t++)d.current[t]&&d.current[t].checked&&n.push(d.current[t].value);a(g),y(n),N(c),C(1),T(h),L(!0),j()},children:["filter",e.jsx(J,{fontSize:24})]})})]})]})})}const E=W.memo(te);function le({text:h,type:o,data:u,setPage:p,page:i}){let{configData:L}=s.useContext(K),{images:_}=L,{base_url:m,profile_sizes:B,logo_sizes:F,still_sizes:c}=_,g=[...new Array(50)];const{results:k,total_pages:y}=u,[N,C]=s.useState(!1),[T,S]=s.useState(!1);function a(){S(!0),window.scrollTo({top:0,behavior:"smooth"})}s.useEffect(()=>{N&&setTimeout(()=>{C(!1)},1500)},[N]);let j=s.useContext(P),{sortedData:d,sortedPage:n,setSortedPage:b}=j;const[f,x]=s.useState(!1),{setTypeMovieOrTv:v}=s.useContext(H);s.useEffect(()=>{v(o)});const[w,l]=s.useState(!1);return e.jsx(e.Fragment,{children:_&&k?e.jsxs(e.Fragment,{children:[N?e.jsx(D,{}):"",f===!1?e.jsxs("div",{className:"text-9xl text-mainColor-100 py-24 sm:px-5  flex flex-col items-center p-3",children:[e.jsx(E,{type:o,sortedDataC:j,showSortMenu:w,setShowSortMenu:l,isSorted:f,setIsSorted:x}),e.jsxs("h1",{className:"text-6xl pb-10 sm:text-7xl font-extrabold  text-center bg-gradient-to-b sm:bg-gradient-to-r from-mainColor-100 to-black",style:{WebkitTextStroke:"5px transparent",WebkitTextFillColor:"black",WebkitBackgroundClip:"text"},children:[h," ",o,"s"]}),e.jsxs("div",{className:"w-full h-fit mb-10 text-lg text-white flex justify-between items-end container",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mr-5",htmlFor:"pages_num",children:"page:"}),e.jsx("select",{className:"h-10 w-20 bg-transparent border-1 border-white",name:"pages_num",id:"pages_num",onChange:t=>{p(t.target.value),a()},children:g.map((t,r)=>e.jsx("option",{className:"text-black",children:r+1},r))})]}),e.jsx("div",{className:"",children:e.jsxs("button",{className:" px-3 py-1 flex items-center gap-2 border-2 border-white",onClick:()=>l(!w),children:["filter",e.jsx(A,{fontSize:22})]})})]}),e.jsxs("div",{className:"relative flex flex-wrap justify-center gap-2 p-2 w-full h-full overflow-hidden",children:[T?e.jsx("div",{className:"bg-gray-800 absolute inset-0 z-10 flex items-center justify-center animate-pulse",children:e.jsx("div",{className:"m-12 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:e.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})}):"",k.map((t,r)=>e.jsxs(M,{to:`/${o}/${t.id}`,className:"w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[400px] flex flex-col items-center border-2 border-transprent-1/5",onClick:()=>{C(!0)},children:[e.jsx("div",{className:"img relative w-full h-3/5 p-1 overflow-hidden img-topLayer-black-gradient",children:e.jsx("img",{src:t.poster_path?`${m}${c[3]}${t.poster_path}`:t._path?`${m}${c[3]}${t._path}`:`${V}`,alt:"",className:"w-full h-full object-center object-cover  scale-110 transition-all duration-300",loading:"lazy",onLoad:O=>{setTimeout(()=>{S(!1)},1e3)}})}),e.jsxs("div",{className:"w-full h-2/5 p-3 text-white",children:[e.jsx("h3",{className:"text-2xl font-bold pb-2 break-words",children:t.title?t.title.length<12?t.title:t.title.slice(0,12)+"...":t.original_name.length<12?t.original_name:t.original_name.slice(0,12)+"..."}),e.jsx("div",{className:"italic text-lg text-[#9d9d9d]",children:"release date"}),e.jsx("h4",{className:"text-lg font-bold",children:t.release_date?t.release_date:t.first_air_date})]})]},r))]}),e.jsx("div",{className:"flex gap-5 pt-10",children:y>1?i===y?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:i}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{p(i-1),a()},children:e.jsx(z,{color:"white",fontSize:18})})]}):i===1?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:i}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{p(i+1),a()},children:e.jsx($,{color:"white",fontSize:18})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{p(i-1),a()},children:e.jsx(z,{color:"white",fontSize:18})}),e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:i}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{p(i+1),a()},children:e.jsx($,{color:"white",fontSize:18})})]}):""})]}):e.jsxs("div",{className:"text-9xl text-mainColor-100 py-24 sm:px-5  flex flex-col items-center p-3",children:[e.jsx(E,{type:o,sortedDataC:j,showSortMenu:w,setShowSortMenu:l,isSorted:f,setIsSorted:x}),e.jsxs("h1",{className:"text-6xl pb-10 sm:text-7xl font-extrabold  text-center bg-gradient-to-b sm:bg-gradient-to-r from-mainColor-100 to-transparent",style:{WebkitTextStroke:"5px transparent",WebkitTextFillColor:"black",WebkitBackgroundClip:"text"},children:["sorted ",o+"s"]}),e.jsxs("div",{className:"w-full mb-10 text-lg text-white flex justify-between items-end container",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mr-5",htmlFor:"pages_num",children:"sorted page:"}),e.jsx("select",{className:"h-10 w-20 bg-transparent border-1 border-white",name:"pages_num",id:"pages_num",onChange:t=>{b(t.target.value),a()},children:g.map((t,r)=>e.jsx("option",{className:"text-black",children:r+1},r))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{fontSize:22,className:"animate-pulse"}),e.jsx("button",{className:"text-gray-500 underline hover:text-white capitalize",onClick:t=>{x(!1)},children:`go back To ${h+" "+o}s`}),e.jsx(Z,{fontSize:22,className:"animate-pulse"})]}),e.jsx("div",{className:"",children:e.jsx("div",{className:"",children:e.jsxs("button",{className:" px-3 py-1 flex items-center gap-2 border-2 border-white",onClick:()=>l(!w),children:["filter",e.jsx(A,{fontSize:22})]})})})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 p-2 w-full h-full overflow-hidden",children:d.results.map((t,r)=>e.jsxs(M,{to:`/${o}/${t.id}`,className:"w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[400px] flex flex-col items-center border-2 border-transprent-1/5","data-te-toggle":"tooltip","data-te-placement":"center","data-te-ripple-init":!0,"data-te-ripple-color":"light",title:t.title?t.title:t.original_name,onClick:()=>{C(!0)},children:[e.jsx("div",{className:"img relative w-full h-3/5 p-1 overflow-hidden img-topLayer-black-gradient",children:e.jsx("img",{src:t.poster_path?`${m}${c[3]}${t.poster_path}`:t._path?`${m}${c[3]}${t._path}`:"/assets/EL3WAMY.svg",alt:"",loading:"lazy",className:"w-full h-full object-center object-cover scale-110 transition-all duration-300"})}),e.jsxs("div",{className:"w-full h-2/5 p-3 text-white",children:[e.jsx("h3",{className:"text-2xl font-bold pb-2 break-words",children:t.title?t.title.length<12?t.title:t.title.slice(0,12)+"...":t.original_name.length<12?t.original_name:t.original_name.slice(0,12)+"..."}),e.jsx("div",{className:"italic text-lg text-[#9d9d9d]",children:"release date"}),e.jsx("h4",{className:"text-lg font-bold",children:t.release_date?t.release_date:t.first_air_date})]})]},r))}),e.jsx("div",{className:"flex gap-5 pt-10",children:d.total_pages>1?n===d.total_pages?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:n}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{b(n-1),a()},children:e.jsx(z,{color:"white",fontSize:18})})]}):n===1?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:n}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{b(n+1),a()},children:e.jsx($,{color:"white",fontSize:18})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{b(n-1),a()},children:e.jsx(z,{color:"white",fontSize:18})}),e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:n}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{b(n+1),a()},children:e.jsx($,{color:"white",fontSize:18})})]}):""})]})]}):e.jsx(D,{})})}const re=W.memo(le);export{re as G};
