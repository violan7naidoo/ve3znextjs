import Link from "next/link";
import { Button } from "../../components/ui/button";
import React from "react";

export default function projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 ">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 bg-gray-950">
        <div className="space-y-3">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
              {" "}
              Our Projects{" "}
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
              src="/sensory.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Sensory Wonderlnd</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              E-commerce sensory shop for kids.
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
              src="/tac.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">TAC Africa</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Your Partner For Safe and Efficient Abnormal Trucking.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://tacafrica.co.za/"
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
              src="/jivan.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">Jivan & CO.inc </h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Do it Properly. Consult with us first. We Protect your rights.
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://jivan.co.za/"
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
              src="/sobaked2.png"
              style={{
                aspectRatio: "500/225",
                objectFit: "cover",
              }}
              width="500"
            />
            <h3 className="text-xl text-white font-bold">So Baked</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              So Baked CBD Dispensary
            </p>
            <Link
              className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://so-baked.vercel.app/"
              target="_Blank"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
