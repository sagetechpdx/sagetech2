import React from "react";
import { heroImg } from "../assets/images";

const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse ">
      <header className="lg:w-[50%] w-full">
        <div className="">
          <h1 className="lg:text-[60px] text-[48px] leading-[60px] font-bold  ">Sage Tech</h1>
          <h2 className="lg:text-[60px] text-[48px] leading-[60px] font-bold  ">Portland's Most Trusted Tech Support</h2>
          <p className="break-words text-2xl mt-10 leading-6 ">
            At Sage Tech, we’re committed to delivering more than just tech solutions—we provide peace of mind. Known
            for our relentless dedication and problem-solving expertise, we go above and beyond to tackle even the most
            stubborn computer and technical issues. Whether it’s a recurring printer problem, a cracked laptop screen,
            or a complex connectivity issue, we won’t stop until the job is done right.
          </p>
          <div className="mt-10 w-full">
            <button className="border-[1px] px-[32px] py-[24px] rounded-[25px] bg-black text-xl font-bold  text-white hover:bg-green hover:text-black hover:border-black duration-150 lg:w-[auto] tracking-wide ">
              Schedule an Appointment
            </button>
          </div>
        </div>
      </header>

      <div className="lg:w-[50%] w-full flex justify-center items-center ">
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
