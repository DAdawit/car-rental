"use client";
import Image from "next/image";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const RentalCars = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col ">
              <Image
                src="/cars/car1.png"
                height={1000}
                width={1000}
                alt="car one"
              />
              <div className="bg-gray-100 px-3">
                <h1 className="text-center"> forester subaru</h1>
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <DirectionsCarIcon />
                    <h5>4856</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <DirectionsCarIcon />
                    <h5>4856</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <DirectionsCarIcon />
                    <h5>4856</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RentalCars;
