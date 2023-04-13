import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
export default function Navbar({ Scrolltoref, scrolltoWorks, scrolltoAbout ,scrolltoContact}) {
  const [istoggle, setistoggle] = useState(false);

  const handleToggle = () => {
    setistoggle(!istoggle);
  };

  return (
    <>
      <div>
        <div className="text-white p-2">
          <div className="flex justify-between items-center md:px-20 md:py-5">
            <h1 className="font-bold text-2xl md:text-3xl">digitai.in</h1>
            <ul className="hidden md:flex md:items-center md:space-x-7">
              <li
                className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed] cursor-pointer"
                onClick={Scrolltoref}
              >
                Services
              </li>
              <li
                className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer"
                onClick={scrolltoWorks}
              >
                Works
              </li>
              <li
                onClick={scrolltoAbout}
                className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer"
              >
                About
              </li>
              <li onClick={scrolltoContact} className="text-lg duration-500 ease-in-out hover:text-[#4ef0ed]  cursor-pointer">
                Contact
              </li>
            </ul>
            <CgMenuGridO
              size={28}
              color="white"
              cursor="pointer"
              className="md:hidden"
              onClick={handleToggle}
            />
          </div>
          <ul
            className={`my-1 px-3 py-1 ${
              istoggle ? "block" : "hidden"
            } rounded-xl glass md:hidden`}
          >
            <div className={` ${istoggle ? "block" : "hidden"} space-y-3.5`}>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out cursor-pointer">
                <li onClick={Scrolltoref} className="my-2.5 text-sm">
                  Services
                </li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out   cursor-pointer">
                <li onClick={scrolltoWorks} className="my-2.5 text-sm">
                  Works
                </li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out  cursor-pointer">
                <li onClick={scrolltoAbout} className="my-2.5 text-sm">
                  About
                </li>
              </div>
              <div className="hover:text-[#4ef0ed] duration-300 ease-in-out   cursor-pointer">
                <li onClick={scrolltoContact} className="my-2.5 text-sm">Contact</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
