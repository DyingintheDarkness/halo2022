import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import  Parallax  from 'react-rellax';
import { resources } from "./data";

const Resources = () => {
  return (
    <Layout>
      <div className="font-pop flex flex-col gap-10 items-center mt-16 sm:mt-8 pl-2  relative z-30 mb-20">


        <h1 className="font-bold text-lg xsm:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:mb-5">
          You can learn and develop your <br />
          skills through these resources.
        </h1>



        <div className="flex flex-col justify-center items-center gap-7 mb-10 xsm:flex-wrap xsm:flex-row">

          {resources.map((resource) => {
            return (
              <div
                className="shadow-spread-md bg-white relative w-60 h-32 flex items-center flex-col justify-evenly rounded-md xsm:w-80 xsm:mr-4 md:h-36 xl:mr-16"
                key={resource.name}
              >
                <h1 className="font-sand font-bold -mt-2 text-lg md:text-xl">
                  {resource.name}
                </h1>
                <Link
                  to={{ pathname: resource.link }}
                  target="_blank"
                  rel="noreferrer"
                  className="font-pop font-medium bg-primarygreen w-40 h-7 rounded-md flex items-center justify-center -mb-5 text-sm md:text-base md:h-8 md:w-60"
                >
                  View Resources
                </Link>

                <div
                  className={`border-${resource.color} absolute -top-5 bg-white p-2 rounded-full border-2  shadow-md`}
                >
                  {resource.icon}
                </div>
              </div>
            );
          })}
        </div>
      <Parallax speed={6} className="absolute top-5 left-0 hero-3">
        <svg
          className="w-36 h-32 sm:h-40 sm:w-40 hero-3 absolute top-10   lg:-top-10 -left-10 lg:w-52 lg:h-52 lg:-left-14 sm:top-20 xsm:top-32 xl:-top-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        viewBox="0 0 119 217"
        >
          <ellipse
            cx="12"
            cy="108.5"
            fill="url(#paint0_linear_324:97)"
            rx="107"
            ry="108.5"
          ></ellipse>
          <defs>
            <linearGradient
              id="paint0_linear_324:97"
              x1="-95"
              x2="121.979"
              y1="0"
              y2="213.979"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7AF5"></stop>
              <stop offset="1" stopColor="#513162"></stop>
            </linearGradient>
          </defs>
        </svg>
        </Parallax>





        
        <svg
        className="absolute -bottom-10 -right-5 w-32 h-32  hero-3 sm:w-40 sm:h-40 lg:w-44 lg:h-44 xsm:bottom-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 179 261"
    >
      <path
        fill="url(#paint0_linear_326:33)"
        d="M118.725 10.895a14.998 14.998 0 0112.984-.908l90.578 36.069a15 15 0 018.806 9.585l28.274 93.305a14.996 14.996 0 01-2.004 12.861l-55.319 80.281a15.002 15.002 0 01-11.305 6.452l-97.257 6.803a15 15 0 01-12.093-4.815L15.43 178.731a15 15 0 01-3.775-12.457l15.01-96.333a15 15 0 017.385-10.718l84.674-48.328z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_326:33"
          x1="-3.687"
          x2="271.687"
          y1="16.316"
          y2="255.684"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#72EDF2"></stop>
          <stop offset="1" stopColor="#5151E5"></stop>
        </linearGradient>
      </defs>
    </svg>







      </div>
    </Layout>
  );
};

export default Resources;
