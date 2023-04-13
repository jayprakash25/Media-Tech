import React, { useEffect } from "react";
import { Work } from "../Data/index";
import AOS from "aos";
import "aos/dist/aos.css";
export default function WorkSection({Worksref}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div    
      ref={Worksref}   
      data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out" 
        className="text-white text-center md:text-left md:mx-48 py-24 ">
        <div className="flex items-center justify-center md:justify-normal gap-x-6">
          <div className="border-2 border-[#4ef0ed] w-[3vw] hidden md:block" />
          <h1 className="text-5xl md:text-6xl font-bold">Works.</h1>
        </div>
        <p className="my-4  text-[#4ef0ed]">THINGS WE'VE MADE</p>
      </div>
      <div className="flex items-center">
        {Work.map((item) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="70"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="relative cursor-pointer"
            >
              <img
                className="w-[16vw] md:w-[16vw] md:h-[50vh] h-[25vh] cursor-pointer"
                src={item.image}
                alt=""
              />
              <h1 class="opacity-0 hover:opacity-100 duration-500 absolute inset-0 z-10 flex justify-center items-center text-xs md:text-2xl text-white font-semibold">
                {item.Tittle}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center py-12">
        <div className="border-2 border-[#4ef0ed]  w-[13vw] md:w-[5vw] rotate-90"></div>
      </div>
    </>
  );
}
