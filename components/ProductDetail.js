import React from "react";
import Image from "next/image";
import Head from 'next/head'
import { LocationMarkerIcon, ShoppingBagIcon } from "@heroicons/react/solid";

export default function ProductDetail() {
  return (
    <>
    <Head>
      <title>Product | Shoes, Clothings. Wearables</title>
    </Head>
    <main className="bg-gray-50 p-8">
      <div style={{ width: "85%", marginTop: "5rem" }}>
        <div className="flex-row flex justify-between space-x-8">
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
                Brand: <span className="text-blue-400">Clothing, Shoes</span>
              </p>
              <p className="text-sm">(123) ratings</p>
              <p className="text-lg font-extrabold text-gray-600">Ksh 2,345 /=</p>
              <p className="text-sm line-through text-gray-400">Ksh 2,345 /=</p>
              <div className="divide-y-2 divide-gray-700">
                
              </div>
              <div className="bg-gray-800 p-1 bg-opacity-75 flex  flex-row justify-center items-center space-x-2 rounded-md mt-1 hover:shadow-3xl hover:cursor-pointer">
                <ShoppingBagIcon className="h-5 text-white" />
                <button className="text-white block p-1 focus:outline-none ">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div style={{ height: "200px" }} className="bg-white w-1/2 flex flex-col p-4">
            <div>
              DELIVERY & RETURNS
            </div>
            <div className="divide-y  divide-gray-500"></div>
            <div className="flex-row flex items-center">
            <LocationMarkerIcon className="h-5 text-gray-400" />
            <p className="text-gray-500 text-sm">Location</p>
            </div>
            <div>
              <select className="focus:outline-none text-gray-600 font-semibold hover:bg-gray-500">
                <option className="focus:bg-gray-500 hover:text-gray-500">Nairobi</option>
                <option>Kitale</option>
                <option>Embu</option>
                <option>Thika</option>
                <option>Naivasha</option>
                <option>Nakuru</option>
                <option>Mombasa</option>

              </select>
            </div>

          </div>
        </div>
      </div>
    </main>
    </>
  );
}
