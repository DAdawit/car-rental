import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Review } from "@/data/types";

type Props = {
  review: Review;
};
const TestimonalCard: React.FC<Props> = ({ review }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-5 ">
        <div className="flex justify-center">
          <Image
            src={`${review.image}`}
            blurDataURL={`${review.image}`}
            alt="product image"
            height={400}
            width={400}
            className="h-52 w-52 self-center object-cover text-center rounded-xl object-top"
          />
        </div>
        <div className="grid">
          <p className="max-w-lg mt-3 text-sm font-sans tracking-wider text-gray-00 items-center px-3">
            {review.review}
          </p>
          <div className="items-end mt-10">
            <h1 className="text-lg font-serif tracking-wider font-medium text-primary">
              {review.Name}
            </h1>
            <h1 className="text-sm text-gray-500 font-sans font-medium text-primary">
              Best Customers
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonalCard;
