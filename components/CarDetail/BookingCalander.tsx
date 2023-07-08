"use client";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
const BookingCalander = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <div className="mt-10">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <h1 className="bg-gray-200 py-4 w-full font-sans font-bold px-3 text-gray-800">
            BOOKING CALENDAR
          </h1>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default BookingCalander;
