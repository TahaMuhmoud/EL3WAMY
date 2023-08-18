import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react"; // Initialization for ES Users
import { Ripple, initTE } from "tw-elements";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BiMoviePlay, BiCameraMovie } from "react-icons/bi";
import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import PopOver from "./Popover";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";

initTE({ Ripple });
const products = {
  movies: [
    {
      name: "popular",
      description: "watch a popular movies",
      href: "/movies/popular",
      icon: BiMoviePlay,
    },
    {
      name: "now playing",
      description: "Speak directly to your customers",
      href: "/movies/toprated",
      icon: BiMoviePlay,
    },
    {
      name: "upcoming",
      description: "Your customers’ data will be safe and secure",
      href: "/movies/nowplaying",
      icon: BiMoviePlay,
    },
    {
      name: "top rated",
      description: "Connect with third-party tools",
      href: "/movies/upcoming",
      icon: BiMoviePlay,
    },
  ],
  "tv-show": [
    {
      name: "popular",
      description: "watch a popular tv show",
      href: "/tvs/popular",
      icon: BiCameraMovie,
    },
    {
      name: "top rated",
      description: "series that people whatch now",
      href: "/tvs/toprated",
      icon: BiCameraMovie,
    },
    {
      name: "on the air",
      description: "series that will be release sooooooon",
      href: "/tvs/onair",
      icon: BiCameraMovie,
    },
    {
      name: "airing today",
      description: "watch the top rated series",
      href: "/tvs/airingtoday",
      icon: BiCameraMovie,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <header
      className="bb-grad text-white fixed w-full ease-in-out z-[100]"
      style={{
        transition: "top .25s, background .5s",
      }}
    >
      <nav
        className="mx-auto flex container items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex ">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="-m-1.5 p-1.5 cursor-pointer"
          >
            <span className="sr-only">Your Company</span>
            <img className="w-[120px]" src="/assets/EL3WAMY.svg" alt="" />
          </div>
        </div>
        <div className="w-1/4 flex justify-end lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" color="white" />
          </button>
        </div>
        <Popover.Group className="w-1/4 hidden lg:flex items-center justify-between">
          <Link
            to="/home"
            className="text-sm font-semibold leading-6 text-white cursor-pointer"
          >
            home
          </Link>

          <PopOver products={products.movies} productType={"movies"} />
          <PopOver products={products["tv-show"]} productType={"tv show"} />
        </Popover.Group>
        <SearchBar showInLarge={true} setMobileMenuOpen={setMobileMenuOpen} />
      </nav>
      {/*  */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[10000000] w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="assets/EL3WAMY.svg" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" color="white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                <SearchBar
                  showInLarge={false}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
                <Disclosure as="div" className="-mx-3  rounded">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="capitalize flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white bg-transprent-1/5 hover:bg-gray-50 hover:text-black">
                        movies
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2 ">
                        {products.movies.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => {
                              navigate(item.href);
                              setMobileMenuOpen(false);
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  
                            bg-mainColor-100 hover:bg-gray-50 !text-white  hover:!text-mainColor-100 cursor-pointer"
                          >
                            {item.name}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3  rounded">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="capitalize flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white bg-transprent-1/5 hover:bg-gray-50 hover:text-black">
                        tv show
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2 ">
                        {products["tv-show"].map((item) => (
                          <div
                            key={item.name}
                            onClick={() => {
                              navigate(item.href);
                              setMobileMenuOpen(false);
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  
                            bg-mainColor-100 hover:bg-gray-50 !text-white  hover:!text-mainColor-100 cursor-pointer"
                          >
                            {item.name}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6 ">
                <div
                  onClick={() => {
                    navigate("/login");
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 !text-white bg-transprent-1/5 hover:bg-gray-50 hover:!text-mainColor-100"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
