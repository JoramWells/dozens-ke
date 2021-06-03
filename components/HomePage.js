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
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HomePage | Dozens Kenya</title>
      </Head>
      <main className="p-8 bg-gray-50">
        <div className="flex flex-row space-x-8 justify-center content-center items-center">
          <div className="ring-1 ring-gray-100 rounded-md p-2 bg-white">
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
        <div className=" flex flex-row justify-center content-center items-center space-x-14 ">
          <div className="px-8 py-2 rounded-md shadow-sm bg-white flex flex-row  mt-14 mb-14 content-center items-center cursor-pointer ">
            <div>
              <SwitchVerticalIcon className="h-10 w-10 space-x-2 text-red-500 bg-red-300 rounded-full p-2  shadow-xl " />
            </div>
            <div className="p-1">
              <p className="font-semibold text-gray-500 text-center">
                7 days return
              </p>
            </div>
          </div>
          <div className="px-8 py-2 shadow-sm rounded-md flex bg-white flex-row items-center content-center cursor-pointer">
            <div>
              <TruckIcon className="h-10 w-10 mr-1 text-blue-500 space-x-4 rounded-full bg-blue-300 p-2 shadow-xl" />
            </div>
            <div>
              <p className="font-semibold  text-gray-600 text-center">
                Supply Items
              </p>
            </div>
          </div>
          <div className="px-8 bg-white py-2 space-x-2 shadow-sm rounded-md flex flex-row items-center content-center cursor-pointer">
            <div>
              <CashIcon className="h-10 w-10  text-green-500 bg-green-300 rounded-full p-2 shadow-xl " />
            </div>
            <div>
              <p className="font-semibold  text-gray-600 text-center">
                Paybill
              </p>
            </div>
          </div>
          <div className="px-8 py-2 bg-white shadow-sm rounded-md flex flex-row items-center content-center space-x-2 cursor-pointer">
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

        {/* Shoes */}
        <div className={{margin:"1rem"}}>
        <div
          className=" bg-white p-2 rounded-md"
          style={{
            margin: "auto",
            display: "block",
            width: "85%",
          }}
        >
          <div className="p-1">
            <p className="text-lg font-semibold text-gray-600">Recent Items</p>
          </div>
          <Carousel responsive={responsive}>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
              <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1508125673219-7cec6bc90159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1596568359553-a56de6970068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
          </Carousel>
        </div>
        </div>


        {/* Gadgets */}
        <div style={{marginTop:"1rem"}}>
        <div
          className=" bg-white p-2 rounded-md"
          style={{
            margin: "auto",
            display: "block",
            width: "85%",
          }}
        >
          <div className="p-1">
            <p className="text-lg font-semibold text-gray-600">Top Selling</p>
          </div>
          <Carousel responsive={responsive}>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
              <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1515940175183-6798529cb860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=887&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1574678720375-897c87118486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
            <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
            <div className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md" style={{ right:"4px", zIndex:"1"}}>
                <p className="font-semibold text-sm text-white">-20%</p>

              </div>
              <Image
                src="https://images.unsplash.com/photo-1495269652876-12a814403455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                height="160"
                width="250"
                alt="Sneakers image"
              />
              <div className="p-2">
                <blockquote>
                  <p className="text-gray-400 text-md">Nick Air</p>
                  <p className="font-semibold text-gray-500">Ksh 2,341 /=</p>
                  <p className="line-through text-gray-300">Ksh 3,457</p>
                </blockquote>
              </div>
            </figure>
          </Carousel>
        </div>
        </div>
      </main>
    </>
  );
}
