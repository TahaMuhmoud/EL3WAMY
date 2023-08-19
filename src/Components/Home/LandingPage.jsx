import React from "react";
import { FiToggleRight } from "react-icons/fi";
import MainCarousel from "./Carousel";
import SearchBar from "../SearchBar/SearchBar";
const mainTitle = Array.from("trending");

export default function LandingPage({ results }) {
  return (
    <>
      {results ? (
        <section className=" h-screen w-full relative">
          <MainCarousel results={results} />
          <div className="titel container absolute left-1/2 -translate-x-1/2 max-w-full px-10 sm:max-w-[900px] h-full mx-auto text-lg text-white text-center flex flex-col justify-center items-center lg:justify-start lg:pt-32 gap-20  z-10 ">
            <img
              src="./EL3WAMY.png"
              alt=""
              className="w-[400px] sm:w-[600px]"
              loading="lazy"
            />
            <SearchBar showInLarge={false} />
            <p className="block sm:hidden leading-10 md:leading-none text-3xl sm:text-3xl lg:text-6xl tracking-tight font-mainFontFamily">
              #this site is your home you can't leave
            </p>
          </div>
          <div className="toggle-icon hidden sm:block">
            <FiToggleRight
              fontSize={40}
              className="text-[#e0e0e0e3] absolute bottom-10 left-1/2 -translate-x-1/2 rotate-90 cursor-pointer animate-pulse z-10"
              onClick={(e) => {
                window.scrollTo({
                  top: window.innerHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
          <div className="trending hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden tracking-wide">
            {mainTitle?.map((letter, indx) => (
              <span
                key={indx}
                className="text-[#ffffff00] xl:text-[250px] lg:text-[180px] md:text-[140px] sm:text-[100px] font-extrabold"
                style={{
                  WebkitTextStroke: "2px white",
                }}
              >
                {letter.toUpperCase()}
              </span>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
