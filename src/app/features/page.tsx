import Image from "next/image";
import { Button } from "../../components/button";
import React from "react";
import Navbar from "@/components/Navbar";
import Feature from "@/components/Features";
import Footer from "../../components/component/footer";

export default function Features() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Navbar />
      <Feature />
      <Footer />
    </div>
  );
}
