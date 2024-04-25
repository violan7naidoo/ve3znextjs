import Link from "next/link";
import { Button } from "../../components/button";
import React from "react";

export default function projects2() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 ">
      <div className="container grid items-center mt--40 justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 bg-gray-950">
        <div className="space-y-3">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
              {" "}
              More Projects{" "}
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of our latest work.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/demo.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">
              Demo E-Commerce Project
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Standard E-Commerce Website
            </p>
            <Link
              className="inline-flex justify-centre h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://sensory-wonderland.vercel.app/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/bioedpidem.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">
              Bioepidem Research Consultants
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Research Café where you will find variety of research experts.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://bioepidemrc.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/aliveair.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Alive Air</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Your one-stop solution for all your air conditioning needs.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://aliveair.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/exquisitebazaar.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">
              The Exquisite Bazaar
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Welcome to our vibrant and electric clothing emporium
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://theexquisitebazaar.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/shanti.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">
              Shanti Aesthetics Spa
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Beauty, Cosmetic & Personal Care
            </p>
            <Link
              className="inline-flex justify-centre h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://shantiaesthetics.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/freightfirst.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Frieght First</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Success starts with Efficiency
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://freightfirst.net/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/ezinyoni.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Ezinyoni</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Lets soar together to new heights.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://ezinyoni.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/solgey.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Solgey</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Your solar heating & geyser specialist
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://solgey.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/saisko.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Saisko Trans</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Delivering safe & reliable transporting services
            </p>
            <Link
              className="inline-flex justify-centre h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://saiskotrans.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/kredds.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">K Redds Electrical</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Electrical Installations & Maintenence
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://www.kreddselectrical.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/blaq.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Blaq Mermaid Media</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Wordpress Lifestyle and Community articles
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://blaqmermaidmedia.com/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rounded-lg object-cover"
              height="225"
              src="/violan.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Violan Naidoo</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Developers Portfolio
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://violannaidoo.co.za/"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
