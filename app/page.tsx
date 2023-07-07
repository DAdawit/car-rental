"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavBar from "@/common/NavBar";
import ContactNumber from "@/components/Home/ContactNumber";
import CustomerReviews from "@/components/Home/CustomerReviews";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import LatestNews from "@/components/Home/LatestNews";
import OurBenefit from "@/components/Home/OurBenefit";
import RentalCars from "@/components/Home/RentalCars";
import RentalFleets from "@/components/Home/RentalFleets";
import RentalService from "@/components/Home/RentalService";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/common/Footer";
import MoveToTop from "@/common/MoveToTop";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <section id="Nav">
          <Hero />
        </section>
        <OurBenefit />
        <HowItWorks />
        <RentalFleets />
        <RentalCars />
        <section id="about">
          <RentalService />
        </section>
        <section id="contact">
          <ContactNumber />
        </section>
        <section id="testimonial">
          <CustomerReviews />
        </section>
        <section id="news">
          <LatestNews />
        </section>
        <section className="bg-gray-900 mt-16 py-10">
          <Footer />
        </section>

        {/* <MoveToTop /> */}
        <Link
          href="#Nav"
          className="fixed bottom-3 right-4  flex items-center bg-gray-800 justify-center flex-col w-14 h-14 rounded-full  bg-bgButton text-white"
        >
          <ArrowUpwardIcon />
        </Link>
      </main>
    </>
  );
}
