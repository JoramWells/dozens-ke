import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { LocationMarkerIcon, ShoppingBagIcon } from "@heroicons/react/solid";
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

export default function ProductDetail() {
  return (
    <>
      <Head>
        <title>Product | Shoes, Clothings. Wearables</title>
      </Head>
      <main className="bg-gray-50 p-8">
        <div style={{ marginTop: "4rem" }}>
          <div style={{ width: "85%", margin: "1.5rem" }}>
            <div className="flex-row flex justify-center space-x-8">
              <div
                className="bg-white flex-row flex justify-between p-8 items-start"
                style={{ width: "65%" }}
              >
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    height="160"
                    width="250"
                    alt="Sneakers image"
                    className="p-0 m-0"
                  />
                </div>
                <div>
                  <p className="text-lg">Sneakers</p>
                  <p className="text-sm">
                    Brand:{" "}
                    <span className="text-blue-400">Clothing, Shoes</span>
                  </p>
                  <p className="text-sm">(123) ratings</p>
                  <p className="text-lg font-extrabold text-gray-600">
                    Ksh 2,345 /=
                  </p>
                  <p className="text-sm line-through text-gray-400">
                    Ksh 2,345 /=
                  </p>
                  <div className="divide-y-2 divide-gray-700"></div>
                  <div className="bg-gray-800 p-1 bg-opacity-75 flex  flex-row justify-center items-center space-x-2 rounded-md mt-1 hover:shadow-3xl hover:cursor-pointer">
                    <ShoppingBagIcon className="h-5 text-white" />
                    <button className="text-white block p-1 focus:outline-none ">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ height: "200px" }} className=" w-1/2 flex flex-col">
                <div className="bg-white p-4 rounded-md">
                  <p className="font-semibold text-gray-600">
                    DELIVERY & RETURNS
                  </p>
                  <div className="divide-y  divide-gray-500"></div>
                  <div className="flex-row flex items-center">
                    <LocationMarkerIcon className="h-5 text-gray-400" />
                    <p className="text-gray-500 text-sm">Location</p>
                  </div>
                  <div>
                    <select className=" text-gray-600 font-semibold ">
                      <option>Nairobi</option>
                      <option>Kitale</option>
                      <option>Embu</option>
                      <option>Thika</option>
                      <option>Naivasha</option>
                      <option>Nakuru</option>
                      <option>Mombasa</option>
                    </select>
                  </div>
                </div>
                <div
                  className="p-4 bg-white rounded-md"
                  style={{ marginTop: "1rem" }}
                >
                  Another div
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          {/* Shoes */}
          <div className={{ margin: "1rem" }}>
            <div
              className=" bg-white p-2 rounded-md"
              style={{
                margin: "auto",
                display: "block",
                width: "85%",
              }}
            >
              <div className="p-1">
                <p className="text-lg font-semibold text-gray-600">
                  Related Items
                </p>
              </div>
              <Carousel responsive={responsive}>
                <figure className="p-0  m-1 hover:shadow-md ">
                  <div
                    className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md"
                    style={{ right: "4px", zIndex: "1" }}
                  >
                    <p className="font-semibold text-sm text-white">-20%</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    height="160"
                    width="250"
                    alt="Sneakers image"
                    className="p-0 m-0"
                  />
                  <div className="p-2">
                    <blockquote>
                      <Link href="/detail" className="text-gray-400 text-md">
                        Nick Air
                      </Link>
                      <p className="font-semibold text-gray-500">
                        Ksh 2,341 /=
                      </p>
                      <p className="line-through text-gray-300">Ksh 3,457</p>
                    </blockquote>
                  </div>
                </figure>
                <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
                  <div
                    className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md"
                    style={{ right: "4px", zIndex: "1" }}
                  >
                    <p className="font-semibold text-sm text-white">-20%</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1508125673219-7cec6bc90159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                    height="160"
                    width="250"
                    alt="Sneakers image"
                    className="p-0 m-0"
                  />
                  <div className="p-2">
                    <blockquote>
                      <p className="text-gray-400 text-md">Nick Air</p>
                      <p className="font-semibold text-gray-500">
                        Ksh 2,341 /=
                      </p>
                      <p className="line-through text-gray-300">Ksh 3,457</p>
                    </blockquote>
                  </div>
                </figure>
                <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
                  <div
                    className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md"
                    style={{ right: "4px", zIndex: "1" }}
                  >
                    <p className="font-semibold text-sm text-white">-20%</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1596568359553-a56de6970068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80"
                    height="160"
                    width="250"
                    alt="Sneakers image"
                    className="p-0 m-0"
                  />
                  <div className="p-2">
                    <blockquote>
                      <p className="text-gray-400 text-md">Nick Air</p>
                      <p className="font-semibold text-gray-500">
                        Ksh 2,341 /=
                      </p>
                      <p className="line-through text-gray-300">Ksh 3,457</p>
                    </blockquote>
                  </div>
                </figure>
                <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
                  <div
                    className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md"
                    style={{ right: "4px", zIndex: "1" }}
                  >
                    <p className="font-semibold text-sm text-white">-20%</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
                    height="160"
                    width="250"
                    alt="Sneakers image"
                    className="p-0 m-0"
                  />
                  <div className="p-2">
                    <blockquote>
                      <p className="text-gray-400 text-md">Nick Air</p>
                      <p className="font-semibold text-gray-500">
                        Ksh 2,341 /=
                      </p>
                      <p className="line-through text-gray-300">Ksh 3,457</p>
                    </blockquote>
                  </div>
                </figure>
              </Carousel>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
