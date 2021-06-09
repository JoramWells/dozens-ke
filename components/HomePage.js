import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Link from "next/link";

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
  const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Head>
        <title>HomePage | Dozens Kenya</title>
      </Head>
      <main>
        <div style={{display: "block", margin: "auto" }}>
          <div style={{ marginTop: "4rem" }}>
            <div className="bg-white flex flex-row justify-center space-x-8 p-2 border-b-2 border-gray-100">
              <div className="bg-gray-300 py-1 px-2 ring-1 ring-gray-300  rounded-full  text-xs text-gray-700">
                Shoes
              </div>

              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Skirts
              </div>
              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Dress
              </div>
              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Top
              </div>
              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Sandals
              </div>
              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Dera
              </div>
              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Outfit
              </div>
              <div className="bg-gray-200 py-1 px-2 ring-1 ring-gray-300  rounded-full text-xs text-gray-700">
                Palazo
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-50">
          {/* Header */}


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
                  Recent Items
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

          {/* Gadgets */}
          <div style={{ marginTop: "1rem" }}>
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
                  Top Selling
                </p>
              </div>
              <Carousel responsive={responsive}>
                <figure className="p-0  m-1 hover:shadow-md cursor-pointer ">
                  <div
                    className="absolute bg-black bg-opacity-10 p-1 rounded-bl-md"
                    style={{ right: "4px" }}
                  >
                    <p className="font-semibold text-sm text-white">-20%</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
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
                    src="https://images.unsplash.com/photo-1515940175183-6798529cb860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=887&q=80"
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
                    src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
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
                    src="https://images.unsplash.com/photo-1574678720375-897c87118486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
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
                    src="https://images.unsplash.com/photo-1495269652876-12a814403455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
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
