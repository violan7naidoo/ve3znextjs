import { Button } from "../components/button";
import React from "react";

export default function EcomPrice() {
  return (
    <header>
      <section className="min-h-screen w-full py-12 bg-gray-950  dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
        <div className="container bg-gray-950 px-4 md:px-6 text-centre">
          <h1 className="mb-8  text-white text-3xl font-bold text-center">
            E-Commerce Websites
          </h1>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
              <div>
                <h3 className="text-2xl font-bold text-center">Basic</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">R5000 </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    co.za Domain
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    12 Months Hosting
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Mobile Responsiveness
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    1 Page Only
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Soial Media Integration
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
            <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
              <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center">Pro</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">R9500</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                    Everything in Basic
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Services & Gallary Page
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Basic SEO
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Up to 4 Pages
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Contact Form
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
              <div>
                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">R20 000</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    3 Business Emails
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Up to 7 Pages
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Testimonials
                  </li>
                  <li className="flex items-centesr">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Dedicated Support
                  </li>
                  <li className="flex items-centesr">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Custom Design
                  </li>

                  <li className="flex items-centesr">
                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                    Fast Loading Speed
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
