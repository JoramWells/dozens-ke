import React from "react";
import Image from 'next/image'
import { ShoppingBagIcon } from "@heroicons/react/solid";

export default function ProductDetail() {
  return (
    <main className="bg-gray-50 p-8">
      <div style={{width:"85%", marginTop:"5rem"}}>
        <div className="flex-row flex justify-between">
          <div  className="bg-white flex-row flex justify-between p-8 items-start" style={{width:"65%"}}>
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
                  <p className="text-sm">Brand: <span className="text-blue-400">Clothing, Shoes</span></p>
                  <p className="text-sm">(123) ratings</p>
                  <p className="text-lg font-semibold">Ksh 2,345 /=</p>
                  <p className="text-sm line-through text-gray-400">Ksh 2,345 /=</p>
                  <div className="bg-black p-1 bg-opacity-75 flex flex-row justify-center items-center space-x-2 rounded-md mt-1 hover:shadow-lg hover:cursor-pointer">
                      <ShoppingBagIcon className="h-5 text-white" />
                  <button className="text-white block p-1">ADD TO CART</button>

                  </div>

              </div>
          </div>
          <div style={{height:"200px"}} className="bg-white w-1/2">details</div>
        </div>
      </div>
    </main>
  );
}
