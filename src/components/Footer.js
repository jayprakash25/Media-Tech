import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { RiTaskFill } from "react-icons/ri";
import ContactModel from "./models/ContactModel";
export default function Footer({ Contactref }) {
  const [istoogle, setistoogle] = useState(false);

  const Tooglemodel = () => {
    setistoogle(true);
  };

  return (
    <>
      <div className="py-32" ref={Contactref}>
        <div className="flex justify-center items-center space-x-5">
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <AiOutlineInstagram size={28} color="white" cursor={"pointer"} />
          </div>
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <CiTwitter size={28} color="white" cursor={"pointer"} />
          </div>
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <BsFacebook size={28} color="white" cursor={"pointer"} />
          </div>
          <div className="border-2 rounded-full p-3 border-[#4ef0ed]">
            <BsYoutube size={28} color="white" cursor={"pointer"} />
          </div>
        </div>
        <div className="text-center my-8 space-y-10 text-white">
          <h1 className=" text-2xl md:text-5xl font-bold">
            Have any project in mind?
          </h1>
          <button
            onClick={Tooglemodel}
            className="border-2 border-[#4ef0ed] px-7 py-4 hover:bg-white hover:border-white hover:text-black font-semibold duration-500 ease-in-out"
          >
            MAKE INQUIRE
          </button>
        </div>
      </div>
      <div className="border-t-2 border-[#25c4c1] flex flex-col md:flex-row justify-center space-y-6 md:justify-evenly items-center">
        <div className="text-white space-y-7 my-8 md:my-0 text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl">digitai.in</h1>
          <p className="md:text-lg">We are more than a digital agency</p>
          <div className="border-2 border-[#4ef0ed] w-[55vw] md:w-[10vw] "></div>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-semibold">OUR SERVICES</h1>
          <ul className="space-y-5 my-5 text-center md:text-left">
            <li className="flex space-x-4">
              <p>Single Project</p>
            </li>
            <li className="flex space-x-4">
              <p>SERVICES1</p>
            </li>
            <li className="flex space-x-4">
              <p>SERVICES2</p>
            </li>
            <li className="flex space-x-4">
              <p>SERVICES3</p>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-semibold">CONTACT US</h1>
          <ul className="space-y-5 my-5">
            <li className="flex space-x-4">
              <BiPhoneCall size={20} color="white" />
              <p>+1234567890</p>
            </li>
            <li className="flex space-x-4">
              <FiMail size={20} color="white" />
              <p>anymail@mail.com</p>
            </li>
            <li className="flex space-x-4">
              <GoLocation size={20} color="white" />
              <p>Hyderabad India</p>
            </li>
            <li className="flex space-x-4">
              <RiTaskFill size={20} color="white" />
              <p>Monday to Friday</p>
            </li>
          </ul>
        </div>
      </div>
      {istoogle ? <ContactModel setistoogle={setistoogle} /> : null}
    </>
  );
}
