import { Button } from "../components/button";
import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight">
            Discover More Projects or Explore Pricing Packages
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find out more about our projects and pricing packages. Let us handle
            the infrastructure so your team can focus on delivering features.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/price"
          >
            Pricing
          </Link>
          <Link
            className="inline-flex  text-white h-10 items-center justify-center rounded-md border border-gray-200 bg_white px-8 text-sm font-medium shadow_sm transition_colors hover:bg_gray_100 hover:text_gray_900 focus_visible:outline_none focus_visible:ring_1 focus_visible:ring_gray_950 disabled:pointer_events_none disabled:opacity_50 dark:border_gray_800 dark:bg_gray_950 dark:hover_bg_gray_800 dark:hover_text_gray_50 dark:focus_visible:ring_gray_300 dark:border-gray-800"
            href="/projects"
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
