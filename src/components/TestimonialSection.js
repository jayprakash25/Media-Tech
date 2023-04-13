import React, { useEffect } from "react";
import { TestimonialCard } from "./index";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#121212] w-screen">
      <div
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className="text-white text-center md:text-left md:mx-48 py-20 "
      >
        <div className="flex items-center justify-center md:justify-normal gap-x-6">
          <div className="border-2 border-[#4ef0ed] w-[3vw] hidden md:block" />
          <h1 className="text-5xl md:text-6xl  font-bold">Testimonials.</h1>
        </div>
        <p className="my-4  text-[#4ef0ed]">WE ARE MORE THAN DIGITAL AGENCY</p>
      </div>
      <TestimonialCard />
    </div>
  );
}
