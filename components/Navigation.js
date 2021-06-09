import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, SearchIcon, UserCircleIcon, XIcon } from "@heroicons/react/solid";
import {
  HomeIcon,
  ClockIcon,
  DotsCircleHorizontalIcon,
  CreditCardIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";

export default function Navigation({ activateOption }) {
  const [sidebar, setSidebar] = useState(false);
  const activate = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="flex flex-row  justify-between p-2 border-b-2 border-gray-100 fixed z-10 content-center items-center w-full bg-white">
        <div className="flex flex-row items-center content-center space-x-2">
          <div className="hover:cursor-pointer rounded-full active:bg-opacity-20 active:bg-black ">
            <MenuIcon
              onClick={activateOption ? activate : ""}
              className="h-5 m-1 text-gray-700 font-semibold active:text-white"
            />
          </div>
          <Link href="/">Home</Link>
        </div>
        <div className="flex flex-row bg-black bg-opacity-10 p-1 justify-center items-center content-center rounded-full">
          <div>
            <SearchIcon className="h-5 text-gray-500 m-1" />
          </div>
          <div>
            <input placeholder="Search items.." className="p-1 bg-transparent flex-grow focus:outline-none rounded-full text-gray-700" />
          </div>
          <div>
            <XIcon className="h-5 text-gray-500 m-1" />
          </div>
        </div>
        <div className="text-gray-500 ">
          <UserCircleIcon className="h-10 w-10 m-0 p-0" />
        </div>
      </nav>
      <div className="flex flex-row">
        <div
          style={{
            paddingTop: "3.77rem",
            width: "15%",
            height: "100%",
            backgroundColor: "black",
            display: "fixed",
            color: "white",
            zIndex: "1",
            textAlign: "center",
          }}
          className={sidebar ? "nav-menu active" : "nav-menu"}
        >
          <ul className="leading-8">
            <li className="hover:bg-gray-100 hover:cursor-pointer mb-2">
              <div className="flex flex-row items-center justify-start p-2 space-x-2 text-white hover:text-gray-700">
                <HomeIcon className="h-5 ml-3" />
                <p className=" text-sm text-gray-300 hover:text-gray-700 hover:font-bold md:text-red-200">
                  Home
                </p>
              </div>
            </li>

            <hr className="text-white p-2" />
            <li className="hover:bg-gray-100 hover:cursor-pointer ">
              <div className="flex flex-row items-center justify-start p-2 space-x-2 text-white hover:text-gray-700 ">
                <CreditCardIcon className="h-5 ml-3" />
                <p className="text-sm text-gray-300 hover:text-gray-700 ">
                  Purchases{" "}
                </p>
              </div>
            </li>
            <li className="hover:bg-gray-100 hover:cursor-pointer mb-2">
              <div className="flex flex-row items-center justify-start p-2 space-x-2 text-white hover:text-gray-700 ">
                <ClockIcon className="h-5 ml-3" />
                <p className="text-sm text-gray-300 hover:text-gray-700 ">
                  Recent purchases{" "}
                </p>
              </div>
            </li>
            <hr className="text-white py-2" />

            <li className="hover:bg-gray-100 hover:cursor-pointer ">
              <div className="flex flex-row items-center justify-start p-2 space-x-2 text-white hover:text-gray-700">
                <ThumbUpIcon className="h-5 ml-3" />
                <p className="text-sm text-gray-300 hover:text-gray-700 ">
                  Liked Items
                </p>
              </div>
            </li>
            <li className="hover:bg-gray-100 hover:cursor-pointer ">
              <div className="flex flex-row items-center justify-start p-2 space-x-2 text-white hover:text-gray-700">
                <DotsCircleHorizontalIcon className="h-5 ml-3" />
                <p className="text-sm text-gray-300 hover:text-gray-700 ">
                  More Items
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
