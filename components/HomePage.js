import React from "react";
import Head from "next/head";
import {
  ArrowRightIcon,
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
                <p className="text-center text-sm text-blue-400 ">
                  Learn More
                </p>
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
                <p className="text-center text-sm text-blue-400 ">
                  Learn More
                </p>
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
                <p className="text-center text-sm text-blue-400 ">
                  Learn More
                </p>
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
                <p className="text-center text-sm text-blue-400 ">
                  Learn More
                </p>
                <ArrowRightIcon className="h-5 text-blue-300 pt-1" />
              </div>
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
