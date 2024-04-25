import Image from "next/image";
import { Button } from "../../components/button";
import React from "react";
import Navbar from "@/components/Navbar";
import EcomPrice from "@/components/EcomPrice";
import BusPrice from "@/components/BusPrice";
import LogoPrice from "@/components/LogoPrice";
import Footer from "../../components/component/footer";

export default function Price() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Navbar />
      <BusPrice />
      <EcomPrice />
      <LogoPrice />
      <Footer />
    </div>
  );
}
