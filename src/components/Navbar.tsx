"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "./input";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 ">
      <Link className="flex items-center justify-center" href="/">
        <span className=" text-4xl text-white hover:underline underline-offset-4">
          Ve
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
            3{""}
          </span>
          {""}z
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 p-4 rounded-lg">
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="/price"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
