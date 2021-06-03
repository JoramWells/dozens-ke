import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  CashIcon,
  GiftIcon,
  SwitchVerticalIcon,
  TruckIcon,
} from "@heroicons/react/solid";
import {
  DeviceMobileIcon,
  DesktopComputerIcon,
  GlobeIcon,
  ChipIcon,
  DotsCircleHorizontalIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HomePage | Dozens Kenya</title>
      </Head>
      <main className="p-8">
        <div className="flex flex-row space-x-8 justify-center content-center items-center">
          <div className="ring-1 ring-gray-100 rounded-md p-2">
            <ul className="text-xs text-gray-500 leading-8 items-center content-center">
              <li className="flex flex-row space-x-2">
                <DeviceMobileIcon className="h-5 mt-1.5" />
                Phones & Tablets
              </li>

              <li className="flex flex-row space-x-4">
                <ShoppingBagIcon className="h-5 mt-1.5" />
                Baby Products
              </li>
              <li className="flex flex-row space-x-4">
                <DesktopComputerIcon className="h-5 mt-1.5" />
                Computing
              </li>
              <li className="flex-row flex space-x-4">
                <GlobeIcon className="h-5 mt-1.5" />
                Sporting
              </li>
              <li className="flex flex-row space-x-8">
                <ChipIcon className="h-5 mt-1.5" />
                Electronixs
              </li>
              <li className="flex flex-row space-x-4">
                <DotsCircleHorizontalIcon className="h-5 mt-1.5" />
                Other categories
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              height="250"
              width="400"
              alt="Sneakers image"
              className="rounded-md"
            />
          </div>
          <div>Selling and others</div>
        </div>

        {/* Header */}
        <div className=" flex flex-row justify-center content-center items-center space-x-24">
          <div className="px-8 py-2 rounded-md shadow-sm  flex flex-row content-center items-center ">
            <div>
              <SwitchVerticalIcon className="h-10 w-10 space-x-2 text-red-500 bg-red-300 rounded-full p-2  shadow-xl " />
            </div>
            <div className="p-1">
              <p className="font-semibold text-gray-500 text-center">
                7 days return
              </p>
            </div>
          </div>
          <div className="px-8 py-2 shadow-sm rounded-md flex flex-row items-center content-center">
            <div>
              <TruckIcon className="h-10 w-10 mr-1 text-blue-500 space-x-4 rounded-full bg-blue-300 p-2 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold  text-gray-600 text-center">
                Supply Items
              </p>
            </div>
          </div>
          <div className="px-8 py-2 space-x-2 shadow-sm rounded-md flex flex-row items-center content-center">
            <div>
              <CashIcon className="h-10 w-10  text-green-500 bg-green-300 rounded-full p-2 shadow-xl " />
            </div>
            <div>
              <p className="font-semibold  text-gray-600 text-center">
                Paybill
              </p>
            </div>
          </div>
          <div className="px-8 py-2 shadow-sm rounded-md flex flex-row items-center content-center space-x-2">
            <div>
              <GiftIcon className="h-10 w-10 text-yellow-500 rounded-full bg-yellow-300 p-2 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold  text-gray-600 text-center">
                New Products
              </p>
            </div>
          </div>
        </div>
        <div className="" style={{ height: "400px" }}>
          {/* <div className="ring-1 p-2 mt-8  rounded-md ring-gray-400">
            <p className="font-semibold text-gray-700 text-lg  hover:cursor-pointer">
              This week offers
            </p>
          </div> */}
        </div>
      </main>
    </>
  );
}
