import React, { useEffect } from "react";
import { Services } from "../Data/index";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ServicesSection({ Serviceref }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#0b0c10]" ref={Serviceref}>
      <div
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className="text-white text-center md:text-left md:mx-48 py-24 "
      >
        <div className="flex items-center justify-center md:justify-normal gap-x-6">
          <div className="border-2 border-[#4ef0ed] w-[3vw] hidden md:block" />
          <h1 className="text-5xl md:text-6xl  font-bold">Services.</h1>
        </div>
        <p className="my-4  text-[#4ef0ed]">OUR SERVICES FOR CLIENTS</p>
      </div>
      <div className="flex flex-col justify-center items-center -my-1.5 md:grid md:grid-cols-3 md:place-items-center md:px-36 gap-y-7 pb-4">
        {Services.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="70"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              key={index}
              className={` border-2 ${
                item.light
                  ? "bg-[#4ef0ed] text-black"
                  : " bg-[#121212] text-white"
              } border-[#121212] hover:border-[#4ef0ed]  duration-300 ease-in-out max-w-sm md:w-[60vw] space-y-8 p-10 "
            `}
            >
              <div>{item.icon}</div>
              <h1 className="text-2xl md:text-3xl font-bold">{item.Tittle}</h1>
              <p className="leading-8 md:max-w-[14vw]">{item.Para}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center py-9">
        <div className="border-2 border-[#4ef0ed]  w-[14vw] md:w-[5vw]  rotate-90"></div>
      </div>
    </div>
  );
}
