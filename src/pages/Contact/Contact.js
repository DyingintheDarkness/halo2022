import React from "react";
import Parallax from 'react-rellax';
import Layout from "../../components/Layout";
import { contacts,socials } from "./data";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout>


      <div className="mt-10 font-pop font-bold text-lg text-center  xsm:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl xsm:mt-16">
        <h1>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing amet
        </h1>

        <svg
          className="w-20 h-20 -left-2 sm:w-40 sm:h-40 -mt-16 md:w-32 md:h-32  sm:-left-9  lg:w-40 lg:h-40 absolute hero-3 sm:-mt-32 md:-mt-28 xsm:-mt-20 md:-left-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          transform="rotate(5)"
          viewBox="0 0 78 142"
        >
          <path
            fill="url(#paint1_linear)"
            d="M3 0l74.182 53.897-28.335 87.206h-91.694l-28.335-87.206L3 0z"
          ></path>
          <defs>
            <linearGradient
              id="paint1_linear"
              x1="-75"
              x2="81"
              y1="0"
              y2="156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F6CEEC"></stop>
              <stop offset="1" stopColor="#D939CD"></stop>
            </linearGradient>
          </defs>
        </svg>

      </div>


      <div className="flex flex-col pl-2 mt-8 w-full gap-1 lg:mt-28 xl:mt-14">
        <h1 className="font-sand font-medium text-base xsm:text-lg sm:text-xl">
          Feel Free to Contact Us
        </h1>
        <div className="flex flex-col gap-2">

          <div className="contact-div-shadow font-pop flex items-center gap-3 bg-white w-64 xsm:w-80 md:w-96 md:p-4 xsm:p-2 p-0.5 rounded-md text-sm text-secondaryblue sm:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-7 w-7 text-primarygray"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>

            <Link to={{ pathname: "mailto:hi@halolegion.com" }} target="_blank">
              hi@halolegion.com
            </Link>
          </div>
          <div className="contact-div-shadow font-pop flex items-center gap-3 bg-white w-64 xsm:w-80 md:w-96 md:p-4 xsm:p-2 p-0.5 rounded-md text-sm text-secondaryblue sm:text-base md:hidden">
            <svg
              className="h-7 w-7 text-primarygray"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>

            <a href="https://www.google.com/maps/place/Delhi+Public+School,+Indore+Bypass+Rd,+Nipania+Road,+near+Water+Lilly,+Indore,+Madhya+Pradesh+452010/@22.7623268,75.9310855,17z/data=!4m2!3m1!1s0x39631d65000691bd:0x2ca713146ed7bc3b">
              DPS Indore, India
            </a>
          </div>

        </div>

        <div className="flex flex-col gap-2 mt-2">
          {contacts.map((person) => {
            return (
              <div key={person.name} className="flex flex-col gap-1 bg-white contact-div-shadow w-64 md:w-96 md:p-4 xsm:w-80 xsm:p-2 rounded-md pl-2 pb-2 pt-1 ">
                <div>
                  <h1 className="text-secondaryblue sm:text-lg">
                    {person.name}
                  </h1>
                  <h2 className="text-sm font-sand font-light ml-20 sm:text-base">
                    -{person.designation}
                  </h2>
                </div>
                <p className="text-sm ">{person.phone}</p>
              </div>
            );
          })}
          <Parallax speed={6} className="hero-3">

            <svg
              className="hero-3 h-32 w-32 absolute sm:w-44 sm:h-44 -right-9 md:w-40 md:h-40 lg:w-56 lg:h-56 lg:-right-14 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 127 230"
            >
              <circle
                cx="115"
                cy="115"
                r="115"
                fill="url(#paint0_linear)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  x2="230"
                  y1="0"
                  y2="230"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FEB692"></stop>
                  <stop offset="1" stopColor="#EA5455"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Parallax>
        </div>

        <h1 className="font-sand font-medium text-base xsm:text-lg sm:text-xl">
          Our Socials
        </h1>
        <div className="flex items-center gap-2 bg-white contact-div-shadow w-64 md:w-96 md:p-4 xsm:w-80 rounded-md p-1 mb-10">
{socials.map(social => {
  return <a href={social.link} key={social.name}
  target="_blank"
  rel="noreferrer noopener nofollow"
  >
{social.icon}
  </a>
})}
        </div>
      </div>

      <div className="flex-col w-screen gap-2 mt-10 hidden md:flex">
        <h1 className="font-pop font-bold text-lg text-center sm:text-xl md:text-2xl lg:text-3xl">
          Lorem ipsum dolor sit amet lorem
        </h1>
        <div>
          <iframe
            className="w-full h-60 shadow-md xsm:h-80 md:h-96 lg:h-screen"
            title="DPS Indore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0821678758057!2d75.92889681483157!3d22.762331731716277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d65000691bd%3A0x2ca713146ed7bc3b!2sDelhi%20Public%20School!5e0!3m2!1sen!2sin!4v1633106205692!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
