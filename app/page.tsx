import NavBar from "@/common/NavBar";
import Hero from "@/components/Home/Hero";
import OurBenefit from "@/components/Home/OurBenefit";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <OurBenefit />
      </main>
    </>
  );
}
