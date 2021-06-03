import React from "react";
import Head from "next/head";
import {
  CashIcon,
  GiftIcon,
  SwitchVerticalIcon,
  TruckIcon,
} from "@heroicons/react/solid";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HomePage | Dozens Kenya</title>
      </Head>
      <main className="p-8">
        <div className=" flex flex-row justify-between content-center items-center mt-8">
          <div className="p-2 hover:shadow-md flex flex-col content-center items-center hover:cursor-pointer">
            <div>
              <SwitchVerticalIcon className="h-10 w-10  text-red-500 bg-red-300 rounded-full p-1 shadow-xl " />
            </div>
            <div className="p-1">
              <p className="font-semibold text-lg text-gray-600 text-center">
                7 days return
              </p>
              <p className="text-center text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi
              </p>
            </div>
          </div>
          <div className="p-2 hover:shadow-md flex flex-col items-center content-center hover:cursor-pointer">
            <div>
              <TruckIcon className="h-10 w-10 text-blue-500 rounded-full bg-blue-300 p-1 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-600 text-center">
                Supply Items
              </p>
              <p className="text-center text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi
              </p>
            </div>
          </div>
          <div className="p-2 hover:shadow-md flex flex-col content-center items-center hover:cursor-pointer">
            <div>
              <CashIcon className="h-10 w-10  text-green-500 bg-green-300 rounded-full p-1 shadow-xl " />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-600 text-center">
                Paybill
              </p>
              <p className="text-center text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi
              </p>
            </div>
          </div>
          <div className="p-2 hover:shadow-md flex-col flex content-center items-center hover:cursor-pointer">
            <div>
              <GiftIcon className="h-10 w-10 text-yellow-500 rounded-full bg-yellow-300 p-1 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-600 text-center">
                New Products
              </p>
              <p className="text-center text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 mt-8 bg-yellow-300 rounded-md">
            <p className="font-semibold text-gray-700 text-lg hover:underline hover:text-blue-500 hover:cursor-pointer">
            This week offers

            </p>
        </div>
      </main>
    </>
  );
}
