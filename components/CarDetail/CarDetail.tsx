import React from "react";
import CarsImage from "./CarsImage";
import CarDescriptions from "./CarDescriptions";

const CarDetail = () => {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" flex flex-col">
            <div>
              <CarsImage />
            </div>
            <div>
              <CarDescriptions />
            </div>
          </div>
          <div className="mx-auto  max-w-lg w-full">
            <div className="bg-black ">
              <h1 className="text-white font-bold text-xl p-3 text-center ">
                ETB 1200/day
              </h1>
            </div>
            <div className="bg-gray-100">
              <form className="flex flex-col justify-center">
                <div className="grid gap-1 mt-2 self-center">
                  <label
                    htmlFor=" PICK-UP-DATE"
                    className="font-sans font-medium text-gray-600"
                  >
                    PICK-UP DATE
                  </label>
                  <input
                    type="date"
                    name=" PICK-UP-DATE"
                    id=" PICK-UP-DATE"
                    className="w-max "
                  />
                </div>
                <div className="grid gap-1 mt-2 self-center">
                  <label
                    htmlFor=" PICK-UP-DATE"
                    className="font-sans font-medium text-gray-600"
                  >
                    DROP-OFF DATE
                  </label>
                  <input
                    type="date"
                    name="DROP-OFF DATE"
                    id=" DROP-OFF DATE"
                    className="w-max "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
