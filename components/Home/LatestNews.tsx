"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import { newses } from "@/data/newses";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { News, Newses } from "@/data/types";
import NewsCards from "../Cards/NewsCards";
export default class LatestNews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <section className="mt-32">
          <h1 className="font-extrabold font-sans text-3xl text-center">
            LATEST NEWS
          </h1>
          <h3 className="text-gray-700 font-mono text-center mt-3">
            Luxury AutoStar Rental Services
          </h3>
        </section>

        <div className="container mx-auto px-6">
          <Slider {...settings}>
            {newses.map((news: News) => (
              <NewsCards key={news.title} data={news} />
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
