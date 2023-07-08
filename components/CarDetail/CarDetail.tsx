"use client";
import React from "react";
import CarsImage from "./CarsImage";
import CarDescriptions from "./CarDescriptions";
import RentalForm from "./RentalForm";
import BookingCalander from "./BookingCalander";

const CarDetail = () => {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-0 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" flex flex-col">
            <div>
              <h1 className="text-3xl font-extrabold font-serif tracking-wider">
                Forester Subaru
              </h1>
              <CarsImage />
            </div>
            <div>
              <CarDescriptions />
            </div>
          </div>
          <div className="grid">
            <div className="mx-auto  max-w-lg w-full">
              <div className="bg-black ">
                <h1 className="text-white font-bold text-xl p-4 text-center ">
                  ETB 1200/day
                </h1>
              </div>
              <div className="bg-gray-100">
                <form className="flex flex-col justify-center">
                  <RentalForm />
                </form>
              </div>
              <div>
                <BookingCalander />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
