"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { carsdetails } from "@/data/cars";
import Image from "next/image";
const CarsImage = () => {
  const [currentImage, setCurrentImage] = useState<string>(
    carsdetails[0].image
  );

  const changeCurrentImage = (id: number) => {
    carsdetails.map((car) => {
      if (car.id === id) {
        setCurrentImage(car.image);
      }
    });
  };

  return (
    <div className="flex flex-col justify-center w-full">
      {/* <div> */}
      <Image
        src={`${currentImage}`}
        height={1000}
        width={1000}
        alt="car image"
        className="h-80 w-full self-center object-contain"
      />
      {/* </div> */}
      <div className="flex  gap-3 overflow-x-auto">
        {carsdetails.map((car) => (
          <div key={car.id}>
            <Image
              src={`${car.image}`}
              height={1000}
              width={1000}
              alt="car image"
              className="h-20 w-20 object-contain shadow-md shadow-gray-200 rounded-lg"
              onClick={() => changeCurrentImage(car.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsImage;
