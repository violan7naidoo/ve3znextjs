"use client";
import { Button } from "../components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full py-6 sm:py-4 md:py-4 lg:py-4 xl:py-4 bg-black ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300"
            height="550"
            src="/6.jpg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300 ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  Web Design.
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-50 md:text-xl dark:text-gray-40">
                We create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  affordable
                </span>{" "}
                brand identities, eye-catching{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  logos{" "}
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  sleek websites{" "}
                </span>
                including{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  e-commerce{" "}
                </span>
                sites that attract{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  visitors{" "}
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  boost traffic.{" "}
                </span>{" "}
                With our skills in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  SEO
                </span>{" "}
                and
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  digital advertising{" "}
                </span>{" "}
                we&apos;ll make sure your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  online{" "}
                </span>{" "}
                presence shines and brings in the right{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  audience{" "}
                </span>{" "}
                for your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  business.{" "}
                </span>{" "}
                Let&apos;s work together to elevate your brand!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/price"
              >
                Get Pricing
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800  "
                href="#"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
