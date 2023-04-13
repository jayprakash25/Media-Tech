import React, { useRef } from "react";
import {
  AboutSection,
  Banner,
  Highlights,
  ServicesSection,
  TestimonialSection,
  WorkSection,
  Footer,
} from "./index";
export default function HeroSection() {
  const Serviceref = useRef();
  const Worksref = useRef();
  const Aboutref = useRef();
  const Contactref = useRef();

  const Scrolltoref = () => {
    Serviceref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoWorks = () => {
    Worksref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoAbout = () => {
    Aboutref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoContact = () => {
    Contactref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Banner
        Scrolltoref={Scrolltoref}
        scrolltoWorks={scrolltoWorks}
        scrolltoAbout={scrolltoAbout}
        scrolltoContact={scrolltoContact}
      />
      <Highlights />
      <ServicesSection Serviceref={Serviceref} />
      <WorkSection Worksref={Worksref} />
      <AboutSection Aboutref={Aboutref} />
      <TestimonialSection />
      <Footer Contactref={Contactref} />
    </>
  );
}
