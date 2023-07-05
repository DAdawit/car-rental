import NavBar from "@/common/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-[120vh] w-screen relative ">
        <Image
          src="/banner1.jpg"
          alt="spector"
          fill
          className="w-screen h-[130vh] object-cover brightness-50 -skew-y-6  -translate-y-24 "
          blurDataURL="/banner1.jpg"
        />
        <div className="absolute top-0  w-full z-10 px-16 py-5  border-b-2 border-gray-200">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="text-white">LOGO</h1>
            </div>
            <div className="flex space-x-2 text-white ">
              <Link href="/" className="">
                HOME
              </Link>
              <Link href="/about" className="">
                ABOUT US
              </Link>
              <Link href="/testimonial" className="">
                TESTIMONIAL
              </Link>
              <Link href="/news" className="">
                NEWS
              </Link>
              <Link href="/contactus" className="">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/3 w-full">
          <div className="flex flex-col justify-center mx-10">
            <h1 className="text-start text-primary font-serif text-4xl font-extrabold text-white tracking-widest mt-10">
              Book Your Auto Rental
            </h1>
            <h1 className="text-start text-primary font-serif text-2xl font-bold tracking-widest text-white font-bolder">
              Luxury Cars at low-cost, starts{" "}
              <span className="text-red-700">$75 / day</span>
            </h1>
            <h1 className="text-start text-primary font-serif text-lg font-bold tracking-widest font-bolder text-white text-2xl">
              from over 100 premium locations
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
