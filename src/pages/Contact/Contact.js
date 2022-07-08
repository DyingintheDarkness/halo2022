import React from "react";
import Layout from "../../components/Layout";
import { contacts, socials } from "./data";
const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-around items-center VertMarg">
        <div class="halfbabes ex bg-black w-full h-96 centershit items-center">
          <div className="flex flex-col cardPadHoriz ml-16 text-xl">
            <h1 className="font-sarabun font-semibold">
              Email:{" "}
              <a
                href="mailto:hi@halolegion.com"
                className="font-sarabun font-light"
              >
                hi@halolegion.com
              </a>{" "}
            </h1>
            <br></br>
            {contacts.map((contact) => {
              return (
                <div className="flex flex-col  " key={contact.email}>
                  <h1 className="font-sarabun font-semibold ">
                    {contact.name}
                  </h1>
                  <h2 className="font-sarabun text-grey_1 font-light text-sm xsm:text-base">
                    -{contact.designation}
                  </h2>
                  <p className="font-sarabun">{contact.email}</p>
                  <br></br>
                </div>
              );
            })}
          </div>
        </div>

        <div class="halfbabes h-96  bg-black">
          <iframe
            className="w-full centershit bg-black h-96  xsm:h-80 md:h-96"
            title="DPS Indore"
            frameborder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0821678758057!2d75.92889681483157!3d22.762331731716277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d65000691bd%3A0x2ca713146ed7bc3b!2sDelhi%20Public%20School!5e0!3m2!1sen!2sin!4v1633106205692!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
