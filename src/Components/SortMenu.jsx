import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import { Ripple, Tooltip, initTE } from "tw-elements";
import { GenersContext } from "../GenersContext";
import { LanguagesContext } from "../LanguagesContext";

initTE({ Ripple, Tooltip });

const sortbyArray = [
  "popularity.asc",
  "popularity.desc",
  "revenue.asc",
  "revenue.desc",
  "primary_release_date.asc",
  "primary_release_date.desc",
  "vote_average.asc",
  "vote_average.desctext-black",
  "vote_count.asc",
  "vote_count.desc",
];
function SortMenu({
  type,
  sortedDataC,
  showSortMenu,
  setShowSortMenu,
  isSorted,
  setIsSorted,
}) {
  const {
    genersData: { genres },
  } = useContext(GenersContext);
  console.log(genres);
  let { langsData } = useContext(LanguagesContext);
  const sortmenu = useRef();
  const selectSortByEl = useRef();
  let sortbytext = "";
  let sortbylang = "";

  let {
    sortBy,
    setGeners,
    setSortBy,
    setSortedPage,
    setType,
    sortLang,
    setSortLang,
  } = sortedDataC;

  const handleOpenSortMenu = () => {
    setShowSortMenu(!showSortMenu);
  };

  const inpEls = useRef([]);
  inpEls.current = [];
  let genersArr = [];
  const inpEl = (el) => {
    inpEls.current.push(el);
  };
  langsData = langsData.sort((p1, p2) =>
    p1.english_name < p2.english_name
      ? -1
      : p1.english_name > p2.english_name
      ? 1
      : 0
  );

  const lang_inp = useRef();
  const langs_menu = useRef();
  const [arr, setarr] = useState([]);
  useEffect(() => {
    lang_inp.current.oninput = (e) => {
      if (e.target.value === "") {
        langs_menu.current.classList.remove("!block");
      } else {
        langs_menu.current.classList.add("!block");
      }
      let x = langsData.filter((el, indx) => {
        return (
          el.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          el.english_name.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setarr(x);
    };
    console.log(arr);
  });
  return (
    <>
      <div
        className={`w-5/6 sm:w-96 h-screen bg-gray-800 fixed top-0 left-0  ${
          showSortMenu ? "translate-x-0" : "-translate-x-[calc(100%-4px)]"
        }
                  z-[10000000000] transition-all duration-1000 p-5 border-r-4 border-mainColor-100 shadow-[inset_0px_0px_80px_black]`}
        ref={sortmenu}
      >
        <button
          className="w-6 h-20 bg-mainColor-100 rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-center absolute right-0 translate-x-full top-1/2 -translate-y-1/2 text-white"
          onClick={handleOpenSortMenu}
        >
          <div>
            <MdOutlineDoubleArrow
              fontSize={18}
              className={`${
                showSortMenu ? "rotate-180" : "rotate-0"
              } transition-all duration-1000`}
            />
            <MdOutlineDoubleArrow
              fontSize={18}
              className={`${
                showSortMenu ? "rotate-180" : "rotate-0"
              } transition-all duration-1000`}
            />
            <MdOutlineDoubleArrow
              fontSize={18}
              className={`${
                showSortMenu ? "rotate-180" : "rotate-0"
              } transition-all duration-1000`}
            />
          </div>
        </button>
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 overflow-y-auto overveiw">
          <div className="w-full text-3xl text-white">
            <h1 className="mb-5 font-bold">sort by :</h1>
            <select
              className="w-full p-3 text-lg bg-transparent border-[1px] 
                      shadow-[inset_0px_18px_36px_-18px_black]"
              name="sortby_select"
              id="sortby_select"
              onChange={(e) => {
                sortbytext = e.target.value;
              }}
              ref={selectSortByEl}
            >
              {sortbyArray.map((opt, indx) => (
                <option key={indx} className="text-black">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="text-3xl text-white">
            <h1 className="mb-5 font-bold">sort by :</h1>
            <div className="text-lg flex flex-wrap items-center justify-center gap-2">
              {genres.map((genr, indx) => (
                <label
                  key={indx}
                  htmlFor={`opt-${indx + 1}`}
                  className="px-3 text-sm md:text-lg bg-mainColor-50 rounded-full shadow-[-3px_-3px_5px_var(--mainClr),3px_3px_5px_rgba(0,0,0,.2)] cursor-pointer"
                  onClick={(e) => {
                    e.target.classList.toggle("shadow-none");
                  }}
                >
                  <input
                    className="mr-1 hidden"
                    type="checkbox"
                    id={`opt-${indx + 1}`}
                    name="geners"
                    value={`${genr.id}`}
                    ref={inpEl}
                  />
                  {genr.name}
                </label>
              ))}
            </div>
          </div>

          <div className="text-lg w-full text-white">
            <h1 className="mb-5 font-bold text-3xl">languages :</h1>
            <div className="w-full h-10 relative">
              <input
                type="text"
                name="lang-inp"
                id="lang-inp"
                className="w-full h-full text-lg bg-transparent border-1 outline-none p-5  
                      shadow-[inset_0px_18px_36px_-18px_black]"
                ref={lang_inp}
                onFocus={(e) => {
                  langs_menu.current.classList.add("!block");
                }}
              />
              <BiSolidDownArrow
                fontSize={18}
                className="absolute right-3 text-white top-1/2 -translate-y-1/2"
              />
              <div
                className="searched-sec hidden w-full max-h-[360px] text-black text-lg absolute left-0 bottom-full bg-white overflow-auto "
                ref={langs_menu}
              >
                {arr
                  ? arr.map((lang, indx) => (
                      <div
                        key={indx}
                        className="w-full h-10 border-gray-400 border-b-1 cursor-pointer flex items-center pl-5 hover:bg-gray-500 hover:text-white"
                        onClick={(e) => {
                          lang_inp.current.value = e.target.innerHTML;
                          sortbylang = lang.iso_639_1;
                          langs_menu.current.classList.remove("!block");
                        }}
                      >
                        {lang.name !== "" ? lang.name : lang.english_name}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>

          <div className="text-2xl">
            <button
              className="bg-black px-3 py-1 flex items-center gap-2 capitalize text-white rounded-full shadow-[-3px_-3px_5px_black,3px_3px_5px_rgba(0,0,0,.2)]"
              onClick={(e) => {
                if (sortbytext === "") {
                  sortbytext = sortBy;
                } else {
                  sortbytext = selectSortByEl.current.value;
                }
                if (sortbylang === "") {
                  sortbylang = sortLang;
                }
                for (let i = 0; i < inpEls.current.length; i++) {
                  if (inpEls.current[i] && inpEls.current[i].checked) {
                    genersArr.push(inpEls.current[i].value);
                  }
                }
                setSortLang(sortbylang);
                setGeners(genersArr);
                setSortBy(sortbytext);
                setSortedPage(1);
                setType(type);
                setIsSorted(true);
                handleOpenSortMenu();
              }}
            >
              filter
              <FiFilter fontSize={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(SortMenu);
