import React from 'react'

export default function Navigation() {
    return (
            <nav className="flex flex-row  justify-between p-4 shadow-lg fixed z-10 content-center items-center w-full bg-white">
                <div className="">
                    Home
                </div>
                <div className="">
                    Search
                </div>
                <div>
                    Register
                </div>
            </nav>
    )
}
