import React from "react";
import { Navbar } from "./index";
import "animate.css";
export default function Banner({Scrolltoref,scrolltoWorks,scrolltoAbout,scrolltoContact}) {
  return (
    <>
      <div className="background_image w-screen h-[85vh] md:h-[100vh]">
        <Navbar Scrolltoref={Scrolltoref} scrolltoWorks={scrolltoWorks}  scrolltoAbout={scrolltoAbout} scrolltoContact={scrolltoContact}/>
        <div className=" space-y-7 z-50 md:space-y-10 my-28 mx-6 md:my-0 md:mx-0 md:absolute md:top-[45%] md:left-[8%] md:transform md:-translate-x-[8%] md:-translate-y-[40%]">
          <h1 className="text-[#4ef0ed] md:text-lg  animate__animated animate__slideInLeft animate__slow">
            CREATIVE MIND, CREATIVE WORKS.
          </h1>
          <div className="animate__animated animate__slideInLeft animate__slow">
            <h1 className="text-white font-bold text-5xl md:text-8xl">
              We are digital
            </h1>
            <h1 className="text-white font-bold text-5xl md:text-8xl">
              agency
            </h1>
          </div>
          <button className="animate__animated animate__slideInLeft animate__slow border-2 border-[#4ef0ed] hover:bg-white hover:text-black duration-500 ease-in-out hover:border-white text-white md:text-lg font-semibold  px-8 py-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
