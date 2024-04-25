"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import Price from "../../price/page";
import Eprice from "../../features/page";

export default function AllPrice() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Price />
      <Eprice />
    </div>
  );
}
