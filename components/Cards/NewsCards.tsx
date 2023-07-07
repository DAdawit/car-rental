import Image from "next/image";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { News } from "@/data/types";
type Props = {
  data: News;
};
const NewsCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-5 grid items-center justify-center ">
      <Image
        src={`${data.image}`}
        height={1000}
        width={1000}
        alt="breakfast"
        className="w-full rounded-md object-cover h-80"
      />
      <div className="flex gap-3 items-end">
        <CalendarMonthIcon className="tex-sm text-red-600 mt-3" />
        <h1 className="text-xs">{data.date}</h1>
      </div>
      <h1 className="font-bold tracking-wide font-sans  text-lg hover:underline underline-offset-2">
        {data.title}
      </h1>
      <p className="text-gray-800 text-sm font-mono mt-3">{data.detail}</p>
    </div>
  );
};

export default NewsCards;
