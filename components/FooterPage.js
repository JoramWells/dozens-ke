import { PaperAirplaneIcon } from '@heroicons/react/solid'
import React from 'react'

export default function FooterPage() {
    return (
        <footer className="bg-gray-900 text-white grid grid-cols-4 gap-2 p-4" style={{height:"250px"}}>
            <div>
                <p>Contact us</p>
                <div className="flex flex-col space-y-4">
                    <input type="text" placeholder="Enter email address" className="focus:outline-none text-black p-1 rounded-md" />
                    <textarea placeholder="Enter message" className="focus:outline-none text-black p-1 rounded-md" />
                    <div className="flex flex-row space-x-2 bg-blue-400 p-2 rounded-md items-center content-center justify-center">
                        <PaperAirplaneIcon className="h-5" />
                    <button className="block focus:outline-none">Send</button>

                    </div>

                </div>
            </div>
            <div>
                <p>Site map</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div>
                <p>Products</p>
                <p>Desktop & PC</p>
                <p>Mobile phones</p>
                <p>Electronics</p>
                <p>Baby clothes</p>
            </div>
            <div>
                <p>Contact Us</p>
            </div>
        </footer>
    )
}
