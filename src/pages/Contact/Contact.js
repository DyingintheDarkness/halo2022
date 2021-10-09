import React from "react";
import Layout from "../../components/Layout";
import { contacts } from "./data";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout>
      <div className="mt-24 font-pop font-bold text-lg text-center sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">
        <h1>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing amet
        </h1>

        <svg
          className="w-20 h-20 absolute -left-2 hero-3 sm:w-40 sm:h-40 sm:-mt-32 -mt-20 md:w-32 md:h-32 md:-mt-32 md:-left-5 lg:w-52 lg:h-52 lg:-mt-44"
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

      <div className="flex flex-col pl-2 mt-10 w-full gap-1 z-30 relative">
        <h1 className="font-sand font-medium text-base xsm:text-lg sm:text-xl">
          Feel Free to Contact Us
        </h1>
        <div className="contactdiv font-pop flex items-center gap-3 bg-white w-64 xsm:w-80 md:w-96 md:p-4 xsm:p-2 p-0.5 rounded-md text-sm text-secondaryblue sm:text-base">
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
        <div className="flex flex-col gap-2 mt-2">
          {contacts.map((person) => {
            return (
              <div className="flex flex-col gap-1 bg-white contactdiv w-64 md:w-96 md:p-4 xsm:w-80 xsm:p-2 rounded-md pl-2 pb-2 pt-1">
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

          <svg
            className="hero-3 h-32 w-32 absolute sm:w-40 sm:h-40 -right-9 md:w-40 md:h-40 lg:w-56 lg:h-56 lg:-right-14"
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
        </div>

        <h1 className="font-sand font-medium text-base xsm:text-lg sm:text-xl">
          Our Socials
        </h1>
        <div className="flex items-center gap-2 bg-white contactdiv w-64 md:w-96 md:p-4 xsm:w-80 rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 xsm:w-10 xsm:h-10"
            viewBox="0 0 24 24"
          >
            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
            <circle cx="16.806" cy="7.207" r="1.078"></circle>
            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
          </svg>

          <svg
            className="w-8 h-8 xsm:w-10 xsm:h-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 xsm:w-10 xsm:h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 xsm:w-10 xsm:h-10"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col w-screen gap-2 mt-10">
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
