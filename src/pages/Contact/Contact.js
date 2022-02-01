import React from "react";
import Layout from "../../components/Layout";
import { contacts, socials } from "./data";
const Contact = () => {
  return (
    <Layout>

      <div className="mt-10">

        <h1 className="font-sarala font-bold text-lg xsm:text-2xl sm:text-4xl flex items-center justify-center">Have something to say? Contact<br />us right now, unless its two in the<br /> morning...</h1>
        <div className="bg-white mt-10 pb-5 pt-5">
          <h1 className="text-center font-pro font-semibold text-lg xsm:text-2xl">
            Get In Touch With Us
          </h1>


          <div className="flex flex-col sm:flex-row pl-2 sm:justify-around mt-4">



            <div className="flex items-start justify-start flex-col gap-1 sm:-ml-52">
              <h1 className="font-segoe font-semibold  xsm:text-lg md:text-xl ">Email: <a href="mailto:hi@halolegion.com" className="font-pop font-light">hi@halolegion.com</a> </h1>
              {contacts.map(contact => {
                return <div className="flex flex-col  xsm:text-lg md:text-xl " key={contact.phone}>
                  <h1 className="font-segoe font-semibold  xsm:text-lg md:text-xl" >{contact.name}</h1>
                  <h2 className="font-pop text-grey_1 font-light text-sm ml-16 xsm:text-base">
                    -{contact.designation}
                  </h2>
                  <p className="font-poppins">
                    {contact.phone}
                  </p>
                </div>
              })}
            </div>

            <div className="flex items-start flex-col">
              <h1 className="font-segoe font-semibold  xsm:text-lg md:text-xl ">Our Socials</h1>


              <div className="flex items-center gap-2  w-64 md:w-96 xsm:w-80 rounded-md">
                {socials.map(social => {
                  return <a href={social.link} key={social.name}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {social.icon}
                  </a>
                })}
              </div>
            </div>

          </div>


        </div>


        <div className="mt-14">
          <h1 className="font-sarala font-bold text-lg xsm:text-2xl sm:text-4xl flex items-center justify-center">Now it is not a thing of techies to meet in person is it?</h1>
          <div className="mt-4">


            <iframe
              className="w-full h-60 shadow-md xsm:h-80 md:h-96 lg:h-screen"
              title="DPS Indore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0821678758057!2d75.92889681483157!3d22.762331731716277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d65000691bd%3A0x2ca713146ed7bc3b!2sDelhi%20Public%20School!5e0!3m2!1sen!2sin!4v1633106205692!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>




        </div>









      </div>
    </Layout>
  );
};

export default Contact;
