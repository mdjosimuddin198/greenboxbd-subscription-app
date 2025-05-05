import React from "react";
import heroImg from "../assets/banar.webp";
import { BsCheckCircleFill } from "react-icons/bs";
import Slider from "./Slider";

const Banar = () => {
  return (
    <div>
      <div className="hero bg-primary rounded-2xl min-h-screen">
        <div className="hero-content flex-col  justify-between lg:flex-row-reverse">
          {/* <img
            src={heroImg}
            className="rounded-lg md:rotate-12 my-4  shadow-2xl"
          /> */}
          <Slider></Slider>
          <div className="">
            <h1 className="text-5xl ">
              Weekly Greens, <span className="font-bold">Monthly Joy!!</span>
            </h1>
            <p className="py-6 text-2xl  text-base-200">
              <span className="text-3xl text-black font-bold">GreenBox</span> –
              Fresh Vegetables Delivered <br /> Weekly or Monthly!
            </p>
            <ul className="text-base-200 my-4 text-xl">
              <li className="flex items-center gap-3">
                <BsCheckCircleFill /> 100% Satisfaction Guarantee
              </li>
              <li className="flex items-center gap-3">
                <BsCheckCircleFill /> World-Class Shaving Products
              </li>
            </ul>
            <button className="btn  bg-base-200 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
