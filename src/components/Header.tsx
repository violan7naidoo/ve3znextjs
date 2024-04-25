"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../components/input";
import { Button } from "../components/button";

export default function Header() {
  return (
    <header>
      {" "}
      <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800  bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg text-white px-3 py-1 text-sm dark:bg-gray-800"></div>
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                  {" "}
                  What you get with us{" "}
                </span>
              </h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Elevate your brand with our comprehensive website solutions.
                From stunning website designs to robust e-commerce platforms, we
                handle every aspect of your online presence. Our services
                include:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                        {" "}
                        Website Design{" "}
                      </span>
                    </h3>
                    <p className="text-gray-200 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      Landing Page | Contact Form | Gallery | About Us | Blog
                      Section | Call-to-Action Buttons | Testimonial Carousel |
                      Social Sharing Buttons
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                        {" "}
                        E-commerce Website{" "}
                      </span>
                    </h3>
                    <p className="text-gray-200 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      Sell Online | Add to Cart | Online Payment | Visa | New
                      Arrivals | Shop by Category | Secure Payment | Exclusive
                      Discounts |
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                        {" "}
                        Search Engine Optimization - SEO{" "}
                      </span>
                    </h3>
                    <p className="text-gray-200 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      Targeted Advertising | Increased Brand Visibility |
                      Engagement Opportunities | Google Analytics Setup | Data
                      Insights | Competitive Advantage | Increased Google
                      Reviews
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl  text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                        {" "}
                        Logo Design{" "}
                      </span>
                    </h3>
                    <p className="text-gray-200 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      Brand Identity | Professionalism | Visual Representation |
                      Marketing Tool | Emotional Connection | Trustworthiness |
                      Visual Communication
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                        {" "}
                        Social Media Management{" "}
                      </span>
                    </h3>
                    <p className="text-gray-200 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      Page Management | Report on Analytics | Run Campaigns |
                      Creates posts | Monitor Hashtags and Trends | Page
                      Surveillance | Interact with Customers
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                        {" "}
                        Corporate Image
                      </span>
                    </h3>
                    <p className="text-gray-200 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-grey-500 duration-300">
                      Company Profile | Business Card Design | Email Signature
                      Letterhead Design | Standard Logo Design| Company Flyers
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
