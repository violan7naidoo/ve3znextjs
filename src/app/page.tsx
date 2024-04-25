import Image from "next/image";
import Landing from "./landing/page";
import Price from "./price/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Navbar />
      <Landing />
    </div>
  );
}
