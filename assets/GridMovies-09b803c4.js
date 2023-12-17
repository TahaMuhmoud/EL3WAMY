import{G as W,U,R as H,b as I,Q,r as s,c as O,L as Y,j as e,B as q,F as J,C as K,S as P,d as M,e as A,f as V,g as F,h as T,i as X,k as Z}from"./index-8e350978.js";function E(o){return W({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"}}]})(o)}function B(o){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"}},{tag:"path",attr:{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"}}]})(o)}U({Ripple:I,Tooltip:Q});const ee=["popularity.asc","popularity.desc","revenue.asc","revenue.desc","primary_release_date.asc","primary_release_date.desc","vote_average.asc","vote_average.desctext-black","vote_count.asc","vote_count.desc"];function te({type:o,sortedDataC:n,showSortMenu:h,setShowSortMenu:m,isSorted:i,setIsSorted:R,setLoadingSec:S}){const{genersData:{genres:w}}=s.useContext(O);let{langsData:z}=s.useContext(Y);const D=s.useRef(),u=s.useRef();let c="",p="",{sortBy:L,setGeners:v,setSortBy:C,setSortedPage:$,setType:g,sortLang:a,setSortLang:k}=n;const _=()=>{m(!h)},r=s.useRef([]);r.current=[];let d=[];const y=t=>{r.current.push(t)};z=z.sort((t,l)=>t.english_name<l.english_name?-1:t.english_name>l.english_name?1:0);const b=s.useRef(),f=s.useRef(),[j,N]=s.useState([]);return s.useEffect(()=>{b.current.oninput=t=>{t.target.value===""?f.current.classList.remove("!block"):f.current.classList.add("!block");let l=z.filter((x,se)=>x.name.toLowerCase().includes(t.target.value.toLowerCase())||x.english_name.toLowerCase().includes(t.target.value.toLowerCase()));N(l)}}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`w-5/6 sm:w-96 h-screen bg-gray-800 fixed top-0 left-0  ${h?"translate-x-0":"-translate-x-[calc(100%-4px)]"}
                  z-[10000000000] transition-all duration-1000 p-5 border-r-4 border-mainColor-100 shadow-[inset_0px_0px_80px_black]`,ref:D,children:[e.jsx("button",{className:"w-6 h-20 bg-mainColor-100 rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-center absolute right-0 translate-x-full top-1/2 -translate-y-1/2 text-white",onClick:_,children:e.jsxs("div",{children:[e.jsx(B,{fontSize:18,className:`${h?"rotate-180":"rotate-0"} transition-all duration-1000`}),e.jsx(B,{fontSize:18,className:`${h?"rotate-180":"rotate-0"} transition-all duration-1000`}),e.jsx(B,{fontSize:18,className:`${h?"rotate-180":"rotate-0"} transition-all duration-1000`})]})}),e.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-5 overflow-y-auto overveiw",children:[e.jsxs("div",{className:"w-full text-3xl text-white",children:[e.jsx("h1",{className:"mb-5 font-bold",children:"sort by :"}),e.jsx("select",{className:`w-full p-3 text-lg bg-transparent border-[1px] 
                      shadow-[inset_0px_18px_36px_-18px_black]`,name:"sortby_select",id:"sortby_select",onChange:t=>{c=t.target.value},ref:u,children:ee.map((t,l)=>e.jsx("option",{className:"text-black",children:t},l))})]}),e.jsxs("div",{className:"text-3xl text-white",children:[e.jsx("h1",{className:"mb-5 font-bold",children:"sort by :"}),e.jsx("div",{className:"text-lg flex flex-wrap items-center justify-center gap-2",children:w.map((t,l)=>e.jsxs("label",{htmlFor:`opt-${l+1}`,className:"px-3 text-sm md:text-lg bg-mainColor-50 rounded-full shadow-[-3px_-3px_5px_var(--mainClr),3px_3px_5px_rgba(0,0,0,.2)] cursor-pointer",onClick:x=>{x.target.classList.toggle("shadow-[inset_0px_15px_10px_black]")},children:[e.jsx("input",{className:"mr-1 hidden",type:"checkbox",id:`opt-${l+1}`,name:"geners",value:`${t.id}`,ref:y}),t.name]},l))})]}),e.jsxs("div",{className:"text-lg w-full text-white",children:[e.jsx("h1",{className:"mb-5 font-bold text-3xl",children:"languages :"}),e.jsxs("div",{className:"w-full h-10 relative",children:[e.jsx("input",{type:"text",autoComplete:"true",name:"lang-inp",id:"lang-inp",className:`w-full h-full text-lg bg-transparent border-1 outline-none p-5  
                      shadow-[inset_0px_18px_36px_-18px_black]`,ref:b,onFocus:t=>{f.current.classList.add("!block")}}),e.jsx(q,{fontSize:18,className:"absolute right-3 text-white top-1/2 -translate-y-1/2"}),e.jsx("div",{className:"searched-sec hidden w-full max-h-[360px] text-black text-lg absolute left-0 bottom-full bg-white overflow-auto ",ref:f,children:j?j.map((t,l)=>e.jsx("div",{className:"w-full h-10 border-gray-400 border-b-1 cursor-pointer flex items-center pl-5 hover:bg-gray-500 hover:text-white",onClick:x=>{b.current.value=x.target.innerHTML,p=t.iso_639_1,f.current.classList.remove("!block")},children:t.name!==""?t.name:t.english_name},l)):""})]})]}),e.jsx("div",{className:"text-2xl",children:e.jsxs("button",{className:"bg-black px-3 py-1 flex items-center gap-2 capitalize text-white rounded-full shadow-[-3px_-3px_5px_black,3px_3px_5px_rgba(0,0,0,.2)]",onClick:t=>{c===""?c=L:c=u.current.value,p===""&&(p=a);for(let l=0;l<r.current.length;l++)r.current[l]&&r.current[l].checked&&d.push(r.current[l].value);k(p),v(d),C(c),$(1),g(o),R(!0),_(),S(!0)},children:["filter",e.jsx(J,{fontSize:24})]})})]})]})})}const G=H.memo(te);function le({text:o,type:n,data:h,setPage:m,page:i}){let{configData:R}=s.useContext(K),{images:S}=R,{base_url:w,profile_sizes:z,logo_sizes:D,still_sizes:u}=S,c=[...new Array(50)];const{results:p,total_pages:L}=h,[v,C]=s.useState(!1),[$,g]=s.useState(!1);function a(){g(!0),window.scrollTo({top:0,behavior:"smooth"})}s.useEffect(()=>{v&&setTimeout(()=>{C(!1)},2e3)},[v]);let k=s.useContext(P),{sortedData:_,sortedPage:r,setSortedPage:d}=k;const[y,b]=s.useState(!1),{setTypeMovieOrTv:f}=s.useContext(O);s.useEffect(()=>{f(n)});const[j,N]=s.useState(!1);return e.jsx(e.Fragment,{children:S&&p?e.jsxs(e.Fragment,{children:[v?e.jsx(M,{}):"",y===!1?e.jsxs("div",{className:"text-9xl text-mainColor-100 py-24 sm:px-5  flex flex-col items-center p-3",children:[e.jsx(G,{type:n,sortedDataC:k,showSortMenu:j,setShowSortMenu:N,isSorted:y,setIsSorted:b,setLoadingSec:g}),e.jsxs("h1",{className:"text-6xl pb-10 sm:text-7xl font-extrabold  text-center bg-gradient-to-b sm:bg-gradient-to-r from-mainColor-100 to-black",style:{WebkitTextStroke:"5px transparent",WebkitTextFillColor:"black",WebkitBackgroundClip:"text"},children:[o," ",n,"s"]}),e.jsxs("div",{className:"w-full h-fit mb-10 text-lg text-white flex justify-between items-end container",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mr-5",htmlFor:"pages_num",children:"page:"}),e.jsx("select",{className:"h-10 w-20 bg-transparent border-1 border-white",name:"pages_num",id:"pages_num",onChange:t=>{m(t.target.value),a()},children:c.map((t,l)=>e.jsx("option",{className:"text-black",children:l+1},l))})]}),e.jsx("div",{className:"",children:e.jsxs("button",{className:" px-3 py-1 flex items-center gap-2 border-2 border-white",onClick:()=>N(!j),children:["filter",e.jsx(E,{fontSize:22})]})})]}),e.jsxs("div",{className:"relative flex flex-wrap justify-center gap-2 p-2 w-full h-full overflow-hidden",children:[$?e.jsx("div",{className:"bg-gray-800 absolute inset-0 z-10 flex items-center justify-center animate-pulse",children:e.jsx("div",{className:"m-12 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:e.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})}):"",p.map((t,l)=>e.jsxs(A,{to:`/${n}/${t.id}`,className:"w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[400px] flex flex-col items-center border-2 border-transprent-1/5",onClick:()=>{C(!0)},children:[e.jsx("div",{className:"img relative w-full h-3/5 p-1 overflow-hidden img-topLayer-black-gradient",children:e.jsx("img",{src:t.poster_path?`${w}${u[3]}${t.poster_path}`:t._path?`${w}${u[3]}${t._path}`:`${V}`,alt:"",className:"w-full h-full object-center object-cover  scale-110 transition-all duration-300",loading:"lazy",onLoad:x=>{setTimeout(()=>{g(!1)},1e3)}})}),e.jsxs("div",{className:"w-full h-2/5 p-3 text-white",children:[e.jsx("h3",{className:"text-2xl font-bold pb-2 break-words",children:t.title?t.title.length<12?t.title:t.title.slice(0,12)+"...":t.original_name.length<12?t.original_name:t.original_name.slice(0,12)+"..."}),e.jsx("div",{className:"italic text-lg text-[#9d9d9d]",children:"release date"}),e.jsx("h4",{className:"text-lg font-bold",children:t.release_date?t.release_date:t.first_air_date})]})]},l))]}),e.jsx("div",{className:"flex gap-5 pt-10",children:L>1?i===L?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:i}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{m(i-1),a()},children:e.jsx(F,{color:"white",fontSize:18})})]}):i===1?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:i}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{m(i+1),a()},children:e.jsx(T,{color:"white",fontSize:18})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{m(i-1),a()},children:e.jsx(F,{color:"white",fontSize:18})}),e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:i}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{m(i+1),a()},children:e.jsx(T,{color:"white",fontSize:18})})]}):""})]}):e.jsxs("div",{className:"text-9xl text-mainColor-100 py-24 sm:px-5  flex flex-col items-center p-3",children:[e.jsx(G,{type:n,sortedDataC:k,showSortMenu:j,setShowSortMenu:N,isSorted:y,setIsSorted:b,setLoadingSec:g}),e.jsxs("h1",{className:"text-6xl pb-10 sm:text-7xl font-extrabold  text-center bg-gradient-to-b sm:bg-gradient-to-r from-mainColor-100 to-transparent",style:{WebkitTextStroke:"5px transparent",WebkitTextFillColor:"black",WebkitBackgroundClip:"text"},children:["sorted ",n+"s"]}),e.jsxs("div",{className:"w-full mb-10 text-lg text-white flex justify-between items-end container",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mr-5",htmlFor:"pages_num",children:"sorted page:"}),e.jsx("select",{className:"h-10 w-20 bg-transparent border-1 border-white",name:"pages_num",id:"pages_num",onChange:t=>{d(t.target.value),a()},children:c.map((t,l)=>e.jsx("option",{className:"text-black",children:l+1},l))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{fontSize:22,className:"animate-pulse"}),e.jsx("button",{className:"text-gray-500 underline hover:text-white capitalize",onClick:t=>{b(!1)},children:`go back To ${o+" "+n}s`}),e.jsx(Z,{fontSize:22,className:"animate-pulse"})]}),e.jsx("div",{className:"",children:e.jsx("div",{className:"",children:e.jsxs("button",{className:" px-3 py-1 flex items-center gap-2 border-2 border-white",onClick:()=>N(!j),children:["filter",e.jsx(E,{fontSize:22})]})})})]}),e.jsxs("div",{className:"relative flex flex-wrap justify-center gap-2 p-2 w-full h-full overflow-hidden",children:[$?e.jsx("div",{className:"bg-gray-800 absolute inset-0 z-10 flex items-center justify-center animate-pulse",children:e.jsx("div",{className:"m-12 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:e.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})}):"",_.results.map((t,l)=>e.jsxs(A,{to:`/${n}/${t.id}`,className:"w-[calc(50%-4px)] md:w-[calc(33.33333%-8px)] lg:w-[calc(20%-12px)] h-[400px] flex flex-col items-center border-2 border-transprent-1/5","data-te-toggle":"tooltip","data-te-placement":"center","data-te-ripple-init":!0,"data-te-ripple-color":"light",title:t.title?t.title:t.original_name,onClick:()=>{C(!0)},children:[e.jsx("div",{className:"img relative w-full h-3/5 p-1 overflow-hidden img-topLayer-black-gradient",children:e.jsx("img",{src:t.poster_path?`${w}${u[3]}${t.poster_path}`:t._path?`${w}${u[3]}${t._path}`:"/assets/EL3WAMY.svg",alt:"",loading:"lazy",className:"w-full h-full object-center object-cover scale-110 transition-all duration-300",onLoad:x=>{setTimeout(()=>{g(!1)},1e3)}})}),e.jsxs("div",{className:"w-full h-2/5 p-3 text-white",children:[e.jsx("h3",{className:"text-2xl font-bold pb-2 break-words",children:t.title?t.title.length<12?t.title:t.title.slice(0,12)+"...":t.original_name.length<12?t.original_name:t.original_name.slice(0,12)+"..."}),e.jsx("div",{className:"italic text-lg text-[#9d9d9d]",children:"release date"}),e.jsx("h4",{className:"text-lg font-bold",children:t.release_date?t.release_date:t.first_air_date})]})]},l))]}),e.jsx("div",{className:"flex gap-5 pt-10",children:_.total_pages>1?r===_.total_pages?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:r}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{d(r-1),a()},children:e.jsx(F,{color:"white",fontSize:18})})]}):r===1?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:r}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{d(r+1),a()},children:e.jsx(T,{color:"white",fontSize:18})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{d(r-1),a()},children:e.jsx(F,{color:"white",fontSize:18})}),e.jsx("div",{className:"text-mainColor-100 text-lg p-3 rounded-lg border-2 border-mainColor-100",children:r}),e.jsx("button",{className:"p-3 rounded-lg border-2 border-white",onClick:t=>{d(r+1),a()},children:e.jsx(T,{color:"white",fontSize:18})})]}):""})]})]}):e.jsx(M,{})})}const ae=H.memo(le);export{ae as G};