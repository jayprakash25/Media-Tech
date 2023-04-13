import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = [
    {
      Tittle: "Who we are",
      Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.            ",
    },
    {
      Tittle: "Our philosophy",
      light: true,
      Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.            ",
    },
    {
      Tittle: "How we work",
      Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.            ",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-5 gap-5">
      {data.map((item) => {
        return (
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div
              className={`text-white bg-[#121212] border-2 border-[#121212] ease-in-out duration-500 ${
                item.light ? "border-[#4ef0ed]" : null
              } hover:border-[#4ef0ed] p-8 max-w-sm md:max-w-xs space-y-6`}
            >
              <h1 className="text-2xl  font-bold">{item.Tittle}</h1>
              <p className="leading-8 text-slate-300">{item.Para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
