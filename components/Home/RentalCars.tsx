"use client";
import Image from "next/image";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BoltIcon from "@mui/icons-material/Bolt";
import { cars } from "@/data/cars";
const RentalCars = () => {
  return (
    <>
      <section className="container mx-auto px-5 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 gap-x-4">
          {cars.map((car, index) => (
            <div key={index} className="flex flex-col ">
              <Image
                src={`${car.image}`}
                height={1000}
                width={1000}
                alt="car"
                className="object-contain h-36"
              />
              <div className="bg-gray-100 px-3 py-2 ">
                <h1 className="text-center text-lg tracking-wide text-gray-800 font-medium capitalize font-sans">
                  {car.name}
                </h1>
                <div className="flex justify-evenly items-center px-5 mt-3">
                  <div className="flex flex-col justify-center items-center gap-y-2 text-gray-700">
                    <BoltIcon />
                    <h5>{car.horsepower}</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2 text-gray-700">
                    <DirectionsCarIcon />
                    <h5>{car.engineType}</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2 text-gray-700">
                    <SettingsSuggestIcon />
                    <h5>{car.transmissionType}</h5>
                  </div>
                </div>
                <hr />
                <p className="px-2 text-sm mt-3 text-gray-500">{car.details}</p>
                <div className="flex justify-evenly items-center mt-3">
                  <h2 className="text-red-600">
                    Birr {car.rentalPricePerDay} / day
                  </h2>
                  <button className="border-2 px-3 py-1 border-gray-900 hover:bg-red-600 hover:border-red-600 hover:text-white">
                    RENT IT
                  </button>
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
