"use client";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AssistantIcon from "@mui/icons-material/Assistant";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
const RentalService = () => {
  return (
    <div className="mt-24">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">
            Autostar Rental Service
          </h1>
          <h1 className="text-2xl font-extrabold tracking-wide mt-1">
            With a wide range of Vehicles
          </h1>
          <p className="text-gray-700 mt-3">
            Integer tortor bibendum est faucibus gravida aliquam nulla lectus
            lacinia eget lorem acdua eros pharetral interdum quisque convallis
            nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem
            pory.
          </p>
          <p className="text-gray-700">
            Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi
            ut aliquip exl dolor in reprehenderit voluptate velit non proident
            sunt in culpa.
          </p>
          <div className="flex flex-col mt-6 gap-y-3">
            <div className="flex justify-start gap-3 items-center">
              <div className="">
                <LocalOfferIcon className="text-3xl text-red-600" />
              </div>
              <div className="grid">
                <h1 className="font-lg font-medium text-gray-800">
                  Easy & Competitive Prices
                </h1>
                <p className="text-gray-600 text-sm">
                  Faucibus gravida aliquam nulla lectus lacinia eget
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <div>
                <AssistantIcon className="text-3xl text-red-600" />
              </div>
              <div className="grid">
                <h1 className="font-lg font-medium text-gray-800">
                  Breakdown Assistance
                </h1>
                <p className="text-gray-600 text-sm">
                  Faucibus gravida aliquam nulla lectus lacinia eget
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <div>
                <ThumbUpOffAltIcon className="text-3xl text-red-600" />
              </div>
              <div className="grid">
                <h1 className="font-lg font-medium text-gray-800">
                  Trusted Rent Service
                </h1>
                <p className="text-gray-600 text-sm">
                  Faucibus gravida aliquam nulla lectus lacinia eget
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <div>
                <LocalPhoneIcon className="text-3xl text-red-600" />
              </div>
              <div className="grid">
                <h1 className="font-lg font-medium text-gray-800">
                  24/7 Free Customer Support
                </h1>
                <p className="text-gray-600 text-sm">
                  Faucibus gravida aliquam nulla lectus lacinia eget
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="h-96">
          <div className="">
            <Image
              src="/img/lay05.png"
              height={1000}
              width={1000}
              alt="image1"
              className="h-80 w-80 object-contain translate-x-20"
            />
          </div>
          <div className=" h-max">
            <Image
              src="/img/lay04.png"
              height={1000}
              width={1000}
              alt="image3"
              className="h-60 w-60 object-contain -translate-y-24"
            />
          </div>
          <div className=" h-max">
            <Image
              src="/img/lay03.png"
              height={1000}
              width={1000}
              alt="image2"
              className="h-28 w-28 object-contain  -translate-y-32 translate-x-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalService;
