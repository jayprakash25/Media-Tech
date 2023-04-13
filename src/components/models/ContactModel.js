import React from "react";
import "animate.css";

export default function ContactModel({ setistoogle }) {
  const handleform = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="animate__animated animate__fadeIn  fixed bg-black bg-opacity-75 backdrop-blur-sm inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className=" bg-[#1c1b1b]  rounded-xl text-white w-[90vw] md:w-[30vw] p-5 space-y-5">
            <div className="mb-10 space-y-3.5">
              <h1 className="text-3xl font-bold ">Lorem ipsum dolor ipsum</h1>
              <p className="text-[#4badad] leading-8">
                Lorem sit amet, consectetur adipisicing elit. Exercitationem,
                quo.
              </p>
            </div>

            <form className="flex flex-col justify-center space-y-5">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                className="bg-transparent px-8 py-2.5 rounded-lg border-b-2 border-[#419494] outline-none "
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="bg-transparent px-8 py-2.5 rounded-lg border-b-2 border-[#419494] outline-none "
              />
              <label htmlFor="Work">Work</label>
              <input
                type="text"
                id="Work"
                className="bg-transparent px-8 py-2.5 rounded-lg border-b-2 border-[#419494] outline-none "
              />
              <button
                onClick={handleform}
                className="bg-[#4badad]  font-semibold text-sm rounded-full text-white px-10 py-3.5"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setistoogle();
                }}
                className="bg-[#333d46] bg-opacity-70 font-semibold text-sm rounded-full text-white px-10 py-3.5"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
