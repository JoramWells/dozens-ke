import React, { useState } from "react";
import Head from "next/head";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function HomePage1() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Head>
        <title>Homepage | Welcome to Dozens Kenya</title>
      </Head>
      <main>
        <div className="flex flex-row h-screen">
          <div
            style={{ paddingTop: "5rem", width: "15%" }}
            className="bg-gray-500 flex flex-col p-4"
          >
            <MenuIcon className="h-5" onClick={showSidebar} />
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <div className="text-white">
                <div>
                <XIcon onClick={showSidebar} className="h-5" />
              </div>
              <div>Joram Bramuel</div>
              <div>Subscriptions</div>
                </div>

            </nav>
          </div>
          <div className="bg-gray-400" style={{ width: "85%" }}>
            AppBody
          </div>
        </div>
      </main>
    </>
  );
}
