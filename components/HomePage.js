import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  ArrowRightIcon,
  CashIcon,
  GiftIcon,
  SwitchVerticalIcon,
  TruckIcon,
} from "@heroicons/react/solid";
  import {DeviceMobileIcon, DesktopComputerIcon, GlobeIcon, ChipIcon, DotsCircleHorizontalIcon, ShoppingBagIcon} from '@heroicons/react/outline'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HomePage | Dozens Kenya</title>
      </Head>
      <main className="p-8">
        <div className="flex flex-row space-x-8 justify-center content-center items-center">
          <div className="shadow-md p-2" >
            <ul className="text-sm text-gray-500 leading-8 items-center content-center">
              <li className="flex flex-row space-x-2">
                <DeviceMobileIcon className="h-5 mt-1.5" />
                Phones & Tablets</li>

              <li className="flex flex-row space-x-4">
                <ShoppingBagIcon className="h-5 mt-1.5" />
                Baby Products</li>
              <li className="flex flex-row space-x-4">
                <DesktopComputerIcon className="h-5 mt-1.5" />
                Computing</li>
              <li className="flex-row flex space-x-4">
                <GlobeIcon className="h-5 mt-1.5" />
                Sporting</li>
              <li className="flex flex-row space-x-8">
                <ChipIcon className="h-5 mt-1.5" />
                Electronixs</li>
                <li className="flex flex-row space-x-4">
                  <DotsCircleHorizontalIcon className="h-5 mt-1.5" />
                  Other categories
                </li>
            </ul>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              height="300"
              width="450"
              alt="Sneakers image"
            />
          </div>
          <div>Selling and others</div>
        </div>
        <div
          className=" flex flex-row justify-between content-center items-center mt-8"
          style={{ height: "400px" }}
        >
          <div
            className="p-2 hover:shadow-md flex flex-col content-center items-center "
            style={{ height: "200px" }}
          >
            <div>
              <SwitchVerticalIcon className="h-10 w-10  text-red-500 bg-red-300 rounded-full p-1 shadow-xl " />
            </div>
            <div className="p-1">
              <p className="font-semibold text-xl text-gray-600 text-center">
                7 days return
              </p>
              <p className="text-center  text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae
              </p>
              <div className="flex flex-row hover:cursor-pointer items-center justify-center hover:underline">
                <p className="text-center text-sm text-blue-400 ">Learn More</p>
                <ArrowRightIcon className="h-5 text-blue-300 pt-1" />
              </div>
            </div>
          </div>
          <div
            className="p-2 hover:shadow-md flex flex-col items-center content-center"
            style={{ height: "200px" }}
          >
            <div>
              <TruckIcon className="h-10 w-10 text-blue-500 rounded-full bg-blue-300 p-1 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold text-xl text-gray-600 text-center">
                Supply Items
              </p>
              <p className="text-center  text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae
              </p>
              <div className="flex flex-row hover:cursor-pointer items-center justify-center hover:underline">
                <p className="text-center text-sm text-blue-400 ">Learn More</p>
                <ArrowRightIcon className="h-5 text-blue-300 pt-1" />
              </div>
            </div>
          </div>
          <div
            className="p-2 hover:shadow-md flex flex-col content-center items-center "
            style={{ height: "200px" }}
          >
            <div>
              <CashIcon className="h-10 w-10  text-green-500 bg-green-300 rounded-full p-1 shadow-xl " />
            </div>
            <div>
              <p className="font-semibold text-xl text-gray-600 text-center">
                Paybill
              </p>
              <p className="text-center  text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae
              </p>
              <div className="flex flex-row hover:cursor-pointer items-center justify-center hover:underline">
                <p className="text-center text-sm text-blue-400 ">Learn More</p>
                <ArrowRightIcon className="h-5 text-blue-300 pt-1" />
              </div>
            </div>
          </div>
          <div
            className="p-2 hover:shadow-md flex-col flex content-center items-center"
            style={{ height: "200px" }}
          >
            <div>
              <GiftIcon className="h-10 w-10 text-yellow-500 rounded-full bg-yellow-300 p-1 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold text-xl text-gray-600 text-center">
                New Products
              </p>
              <p className="text-center  text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae
              </p>
              <div className="flex flex-row hover:cursor-pointer items-center justify-center hover:underline">
                <p className="text-center text-sm text-blue-400 ">Learn More</p>
                <ArrowRightIcon className="h-5 text-blue-300 pt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ height: "400px" }}>
          <div className="ring-1 p-2 mt-8  rounded-md ring-gray-400">
            <p className="font-semibold text-gray-700 text-lg  hover:cursor-pointer">
              This week offers
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
