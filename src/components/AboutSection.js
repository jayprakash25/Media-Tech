import React, { useEffect } from "react";
import { AboutCard } from "./index";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutSection({Aboutref}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
      ref={Aboutref}
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className="text-white text-center md:text-left md:mx-48 py-24 "
      >
        <div
          data-aos-once="false"
          className="flex items-center justify-center md:justify-normal gap-x-6"
        >
          <div className="border-2 border-[#4ef0ed] w-[3vw] hidden md:block" />
          <h1 className="text-5xl md:text-6xl  font-bold">About.</h1>
        </div>
        <p className="my-4  text-[#4ef0ed]">WE ARE MORE THAN DIGITAL AGENCY</p>
      </div>
      <div className="p-6 flex md:flex-row flex-col justify-center gap-4 items-center">
        <img
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWdlbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="hover:brightness-75 ease-in-out duration-500 transition-all"
        />
        <div className="flex flex-col justify-center  md:px-0 gap-4 items-center ">
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdlbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="hover:brightness-75 ease-in-out duration-500 transition-all"
          />
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFnZW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="hover:brightness-75 ease-in-out duration-500 transition-all"
          />
        </div>
      </div>
      <AboutCard />
    </>
  );
}
