import React, { useEffect } from "react";
import { Ideas } from "../Data/index";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Highlights() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="70"
      data-aos-duration="1300"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-5 py-7">
        {Ideas.map((item, index) => {
          return (
            <div
              key={index}
              className={`text-white ${
                item.light
                  ? "border-2 border-[#4ef0ed]"
                  : "border-2 border-black hover:border-[#4ef0ed] duration-300 ease-in-out"
              } bg-[#121212] max-w-sm md:max-w-lg flex flex-col justify-start p-8 space-y-8`}
            >
              <div>{item.icon}</div>
              <div className="text-2xl md:text-3xl font-bold">
                {item.Tittle}
              </div>
              <div className="border-2 border-[#4ef0ed] w-[15vw]  md:w-[6vw]"></div>
              <p className="leading-8 md:max-w-[20vw]">{item.Para}</p>
            </div>
          );
        })}
        <div className="md:hidden border-2  border-[#4ef0ed] w-[14vw] rotate-90 my-4"></div>
      </div>
      <div className="hidden md:flex justify-center -my-2">
        <div className="border-2 border-[#4ef0ed] w-[5vw] rotate-90"></div>
      </div>
    </div>
  );
}
