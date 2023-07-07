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

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <OurBenefit />
        <HowItWorks />
        <RentalFleets />
        <RentalCars />
        <RentalService />
        <ContactNumber />
        <CustomerReviews />
        <LatestNews />
        <section className="bg-gray-900 mt-16 py-10">
          <Footer />
        </section>
      </main>
    </>
  );
}
