import Image from "next/image";
import React from "react";

const OurBenefit = () => {
  return (
    <div className="container mx-auto">
      <section>
        <div>
          <h1 className="font-extrabold font-sans text-3xl text-center">
            OUR BENEFITS
          </h1>
          <h3 className="text-gray-700 font-mono text-center mt-3">
            Luxury AutoStar Rental Services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/tumb.png"
              height={1000}
              width={1000}
              alt="tumb image"
              className=" h-36 w-36 "
            />
            <h1 className="text-lg font-bold">Our Customers Always</h1>
            <h1 className="text-lg font-bold">100% Satisfied</h1>
            <p className="text-center text-gray-600 text-sm mt-2 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed don
              eiusmod tempor enim minim veniam quis notrud exercitation
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/book.png"
              height={1000}
              width={1000}
              alt="tumb image"
              className=" h-36 w-36 "
            />
            <h1 className="text-lg font-bold">We Provide Easier</h1>
            <h1 className="text-lg font-bold">& Faster Bookings</h1>
            <p className="text-center text-gray-600 text-sm mt-2 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed don
              eiusmod tempor enim minim veniam quis notrud exercitation
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/location.png"
              height={1000}
              width={1000}
              alt="tumb image"
              className=" h-36 w-36 "
            />
            <h1 className="text-lg font-bold">Your Choice of</h1>
            <h1 className="text-lg font-bold">Any Pickup Location</h1>
            <p className="text-center text-gray-600 text-sm mt-2 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed don
              eiusmod tempor enim minim veniam quis notrud exercitation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBenefit;
