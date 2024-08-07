import Image from "next/image";
import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rooms } from "./components/Rooms";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-[10rem] mt-[80px]">
        <Hero />
        <Rooms />
        <Services />
        <Testimonials />
      </main>
    </>
  );
}
