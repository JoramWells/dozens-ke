import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React from "react";

export default function FooterPage() {
  return (
    <footer>
      <div
        className="bg-gray-800 text-white grid grid-cols-4 gap-2 p-4"
        style={{ height: "250px" }}
      >
        <div>
          <p className="font-semibold text-lg m-1">Contact us</p>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter email address"
              className="focus:outline-none text-black p-1 rounded-md"
            />
            <textarea
              placeholder="Enter message"
              className="focus:outline-none text-black p-1 rounded-md"
            />
            <div className="flex flex-row space-x-2 bg-blue-400 p-2 rounded-md items-center content-center justify-center">
              <PaperAirplaneIcon className="h-5" />
              <button className="block focus:outline-none">Send</button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg m-1 text-center">Site map</p>
          <ul className="text-sm ">
            <li>Home</li>
            <li>Payment</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg m-1">Products</p>
          <ul className="text-sm leading-6">
            <li>Electronics</li>
            <li>Baby Clothes</li>
            <li> Desktop & PC</li>
            <li>Mobile phones </li>
          </ul>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg m-1">Get in Touch</p>
          <ul className="text-sm leading-6">
            <li>Email</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="text-white p-4 bg-gray-900 text-center">
        Copyright - 2021 | Terms of Services & Condition
      </div>
    </footer>
  );
}
