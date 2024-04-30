"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../../components/input";
import { Button } from "../../components/ui/button";
import Price from "../price/page";
import Bobby from "../../components/Header";
import EcomPrice from "@/components/EcomPrice";
import BusPrice from "@/components/BusPrice";
import Projects from "../../components/component/projects";
import Footer from "../../components/component/footer";
import Banner from "@/components/Banner";
import IntroPage from "@/components/Intro";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1"></main>

      <IntroPage />
      <Bobby />
      <BusPrice />
      <EcomPrice />
      <Projects />
      <Banner />
      <Footer />
    </div>
  );
}
