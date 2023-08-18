import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function PopOver({ products, productType }) {
  // .....................................
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => {
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }, []);
  const [showPopOver, setshowPopOver] = useState(true);
  return (
    <Popover className="relative ">
      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
        <span>{productType}</span>
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl text-black bg-transprent-7/10 shadow-lg ring-2 ring-black ${
            showPopOver ? "" : "hidden"
          }`}
        >
          <div className="p-4 flex flex-col items-center gap-1">
            {products.map((item) => (
              <div
                key={item.name}
                className="group w-full relative flex items-center gap-x-6 rounded-lg p-4 text-sm text-white hover:text-mainColor-100 leading-6 hover:bg-gray-50 bg-black"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transprent-1/5 group-hover:bg-gray-400">
                  <item.icon
                    className="h-6 w-6 text-gray-600  group-hover:text-mainColor-100"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <Link
                    to={item.href}
                    className="block font-semibold text-white"
                    onClick={() => {
                      setshowPopOver(false);
                      setLoading(true);
                    }}
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-transprent-2/3 group-hover:text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
