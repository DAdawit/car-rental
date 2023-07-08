"use client";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar, DateTimePicker } from "@mui/x-date-pickers";

const RentalForm = () => {
  const [PickUpDate, setPickUpDate] = React.useState<Dayjs | null>(null);
  const [DropOffDate, setDropOffDate] = React.useState<Dayjs | null>(null);

  return (
    <div className="grid justify-center gap-y-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="pt-3 grid ">
          <label htmlFor="" className="mb-2">
            PICK-UP DATE
          </label>
          <DateTimePicker
            label=" PICK-DATE"
            value={PickUpDate}
            onChange={(newValue) => setPickUpDate(newValue)}
          />
        </div>
        <div className="grid ">
          <label htmlFor="" className="mb-2">
            DROP-OFF DATE
          </label>
          <DateTimePicker
            label=" PICK-DATE"
            value={DropOffDate}
            onChange={(newValue) => setDropOffDate(newValue)}
          />
        </div>
        <div className="grid mt-7 gap-y-3">
          <div className="flex items-center justify-between ">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="perHour" />
              <label htmlFor="" className=" ">
                1 HOURS
              </label>
            </div>

            <h3 className="text-red-600 font-serif">ETB 300</h3>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="perHour" />
              <label htmlFor="" className="">
                2 HOURS
              </label>
            </div>
            <h3 className="text-red-600 font-serif">ETB 500</h3>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="perHour" />
              <label htmlFor="" className="">
                3 HOURS
              </label>
            </div>
            <h3 className="text-red-600 font-serif">ETB 800</h3>
          </div>
          <hr />
          <h1 className="text-red-600 font-serif text-center hover:underline cursor-pointer">
            Need Other
          </h1>
          <h5 className="text-sm text-red-600 ">
            {" "}
            Save Up 25% to rental from 3 days
          </h5>
          <hr />
          <h5 className="text-sm text-red-600 ">
            Save Up 50% to rental from 5 days
          </h5>
          <hr />

          <div className="py-3">
            <h1>EXTRA RESOURCE</h1>
            <div className="grid gap-y-3">
              <div className="flex items-center justify-between gap-x-2 ">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="extra" />
                  <label htmlFor="" className=" ">
                    CHILD SEAT
                  </label>
                </div>

                <h3 className="text-red-600 font-serif">
                  ETB 200 <span className="text-black">/Total</span>
                </h3>
              </div>
              <hr />
              <div className="flex items-center justify-between gap-x-2 ">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="extra" />
                  <label htmlFor="" className=" ">
                    ADDITIONAL DRIVER
                  </label>
                </div>

                <h3 className="text-red-600 font-serif">
                  ETB 800 <span className="text-black">/Total</span>
                </h3>
              </div>
              <hr />
              <div className="flex items-center justify-between gap-x-2 ">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="extra" />
                  <label htmlFor="" className=" ">
                    GPS NAVIGATION
                  </label>
                </div>

                <h3 className="text-red-600 font-serif">
                  ETB 50 <span className="text-black">/Total</span>
                </h3>
              </div>
              <hr />
              <div className="flex items-center justify-between gap-x-2 ">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="extra" />
                  <label htmlFor="" className=" ">
                    WIFI ACCESS
                  </label>
                </div>

                <h3 className="text-red-600 font-serif">
                  ETB 80 <span className="text-black">/Total</span>
                </h3>
              </div>
              <hr />
            </div>
            <button className="w-full text-white bg-red-600 py-3 mt-5">
              BOOK THIS CAR
            </button>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default RentalForm;
