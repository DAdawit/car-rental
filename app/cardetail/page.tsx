"use client";
import CarDetail from "@/components/CarDetail/CarDetail";
import Hero from "@/components/CarDetail/Hero";
import Link from "next/link";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const page = () => {
  return (
    <div>
      <Hero />
      <CarDetail />
      <Link
        href="#Nav"
        className="fixed bottom-3 right-4  flex items-center bg-gray-800 justify-center flex-col w-14 h-14 rounded-full  bg-bgButton text-white"
      >
        <ArrowUpwardIcon />
      </Link>
    </div>
  );
};

export default page;
