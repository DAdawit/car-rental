"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
const MoveToTop = () => {
  return (
    <Link
      href="#Nav"
      className="fixed bottom-0  flex items-center bg-gray-500 justify-center flex-col w-14 h-14 rounded-full  bg-bgButton text-white"
    >
      <ArrowUpwardIcon />
    </Link>
  );
};

export default MoveToTop;
