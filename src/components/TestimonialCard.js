import React, { useEffect } from "react";
import { Reviews } from "../Data/index";
import { TfiQuoteLeft } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestimonialCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex mx-auto gap-x-5 -my-6 items-center overflow-x-scroll scroll-smooth">
      {Reviews.map((item) => {
        return (
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="bg-[#0b0c10] text-center space-y-5 p-6 border-2 border-stone-800"
          >
            <TfiQuoteLeft className="mx-auto" size={30} color="#4ef0ed" />
            <p className="leading-8 w-[60vw] md:max-w-[20vw] text-slate-300 text-sm">
              {item.Para}
            </p>
            <img
              src={item.image}
              className="w-12 mx-auto h-12 rounded-full object-cover"
              alt=""
            />
            <div className="text-white space-y-2.5">
              <p className="text-xl font-semibold">{item.Name}</p>
              <h1 className="text-sm">{item.Work}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
