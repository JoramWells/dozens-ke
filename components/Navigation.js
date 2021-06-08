import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

export default function Navigation({ activateOption }) {
    const [sidebar,setSidebar] = useState(false)
const activate = () => setSidebar(!sidebar)

  return (
    <>
      <nav className="flex flex-row  justify-between p-4 shadow-md fixed z-10 content-center items-center w-full bg-white">
        <div className="flex flex-row items-center content-center space-x-2">
          <div className="hover:cursor-pointer rounded-full active:bg-opacity-20 active:bg-black ">
            <MenuIcon onClick={activateOption ? activate:''} className="h-5 m-1 text-gray-700 font-semibold active:text-white" />
          </div>
          <Link href="/">Home</Link>
        </div>
        <div className="">Search</div>
        <div>Register</div>
      </nav>
      <div className="flex flex-row">
      <div style={{paddingTop:"5rem", width:"15%", height:"100vh", backgroundColor:"black", display:"fixed"}} className={sidebar ? "nav-menu active" : "nav-menu"}>
          sdjksdjs
      </div>
      <div style={{width:"85%", backgroundColor:"gray"}}>djksdh</div>
      </div>

    </>
  );
}
