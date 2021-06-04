import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
            <nav className="flex flex-row  justify-between p-4 shadow-md fixed z-10 content-center items-center w-full bg-white">
                <div className="">
                    <Link href="/">Home</Link>
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
