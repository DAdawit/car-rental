import NavDrawer from "@/common/NavDrawer";
import NavBar from "@/common/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nunito, Rokkitt, Open_Sans } from "next/font/google";
const rokkitt = Open_Sans({
  subsets: ["greek"],
});
const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-[40vh] sm:h-[50vh] w-screen relative ">
        <Image
          src="/banner6.jpg"
          alt="spector"
          fill
          className="w-screen h-[130vh] object-cover brightness-50"
          blurDataURL="/banner1.jpg"
        />
        <div className="absolute top-0  w-full z-10 px-16 py-3  border-b-[0.5px] border-gray-200">
          <div className="w-full flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/logo.png"
                  height={1000}
                  width={1000}
                  alt="logo image"
                  className="h-10 w-28 object-contain"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-2 text-white ">
              <Link href="/" className="hidden sm:flex">
                HOME
              </Link>
              <Link href="#about" className="hidden sm:flex">
                ABOUT US
              </Link>
              <Link href="#testimonial" className="hidden sm:flex">
                TESTIMONIAL
              </Link>
              <Link href="#news" className="hidden sm:flex">
                NEWS
              </Link>
              <Link href="#contact" className="hidden sm:flex">
                CONTACT
              </Link>
              <span className="sm:hidden">
                <NavDrawer />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-36 w-full">
          <div className="flex flex-col justify-center mx-10">
            <h1 className="text-start text-primary font-serif text-3xl font-extrabold text-white tracking-wider mt-10 ">
              Forester Subaru
            </h1>
            <Link
              href="/"
              className="text-start mt-10 w-max text-primary font-serif text-md font-bold tracking-wide text-red-500 hover font-bolder hover:underline underline-offset-2"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
