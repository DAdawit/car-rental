import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <>
        <div className="w-screen bg-gray-500 overflow-hidden">
          <div className="flex flex-col justify-center mx-10 pt-5">
            <h1 className="text-center text-primary font-serif text-2xl font-extrabold text-white tracking-widest mt-10">
              HOW DOES THE
            </h1>
            <h1 className="text-center text-primary font-serif text-2xl font-extrabold text-white tracking-widest mt-5">
              AUTOSTAR RENTAL WORKS
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-5 text-white mt-5 gap-y-10 pb-16">
              <div className="grid lg:flex">
                <Image
                  src="/search.png"
                  height={1000}
                  width={1000}
                  alt="tumb image"
                  className=" h-24 w-28 "
                />
                <div className="ml-7">
                  <h1 className="text-lg font-bold">Once seected, Book</h1>
                  <h1 className="text-lg font-bold">our auto and set a</h1>
                  <h1 className="text-lg font-bold">pickup date / time</h1>
                </div>
              </div>
              <div className="grid lg:flex">
                <Image
                  src="/location2.png"
                  height={1000}
                  width={1000}
                  alt="tumb image"
                  className=" h-24 w-28 "
                />
                <div className="ml-7">
                  <h1 className="text-lg font-bold">Once seected, Book</h1>
                  <h1 className="text-lg font-bold">our auto and set a</h1>
                  <h1 className="text-lg font-bold">pickup date / time</h1>
                </div>
              </div>
              <div className="grid lg:flex">
                <Image
                  src="/car.png"
                  height={1000}
                  width={1000}
                  alt="tumb image"
                  className="h-24 w-28 self-center"
                />
                <div className="ml-7">
                  <h1 className="text-lg font-bold">Once seected, Book</h1>
                  <h1 className="text-lg font-bold">our auto and set a</h1>
                  <h1 className="text-lg font-bold">pickup date / time</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default HowItWorks;
