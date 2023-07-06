"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonalCard from "../Cards/TestimonalCard";
import { Reviews } from "@/data/types";
import { Review } from "@/data/types";
import { reviews } from "@/data/reviews";
export default class CustomerReviews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 7000,
    };
    return (
      <>
        <div className="px-5 rounded-2xl">
          <section className="mt-14">
            <h1 className="font-extrabold font-sans text-3xl text-center">
              CUSTOMER REVIEWS
            </h1>
            <h3 className="text-gray-700 font-mono text-center mt-3">
              Luxury AutoStar Rental Services
            </h3>
          </section>

          <section className="container mx-auto mb-10 shadow-lg rounded-lg max-w-3xl mt-6">
            <Slider {...settings}>
              {reviews.map((review: Review) => (
                <div key={review.Name} className="">
                  <TestimonalCard review={review} />
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </>
    );
  }
}
