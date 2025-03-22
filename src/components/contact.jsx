import React from "react";
import { Navbar } from "./header";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactCard = () => {
  return (
    <>
      <div className="bg-algae p-6 rounded-2xl shadow-lg">
        <div className="bg-avacado p-8 rounded-xl text-center">
          <p className="flex items-center justify-center text-lg font-semibold mb-4">
            <FaWhatsapp className="mr-2 text-xl" />
            <a href="tel:+918884734650" className="underline hover:text-gray-700">
              +91 8884734650
            </a>
          </p>
          <p className="flex items-center justify-center text-lg font-semibold mb-4">
            <FaEnvelope className="mr-2 text-xl" />
            <a href="mailto:vilasiniivj@gmail.com" className="underline hover:text-gray-700">
              vilasiniivj@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center text-lg font-semibold">
            <FaLinkedin className="mr-2 text-xl" />
            <a href="https://linkedin.com/in/vilasini-vijay" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
              vilasini-vijay
            </a>
          </p>
        </div>
    </div>
    </>
  );
};

function ContactScreen(){
return (
    <>
    <Navbar color = "green"/>
    <h2 className="text-3xl font-semibold text-black font-[hahmlet] bg-beige">Get in touch with me!</h2>
    <section className="bg-beige h-svh">
        <ContactCard/>
    </section>
    </>
);
}

export default ContactScreen;