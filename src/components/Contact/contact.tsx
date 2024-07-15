// src/components/ContactForm.js
import { useState, type ChangeEvent, type FormEvent } from "react";

import ContactImg from "../../assets/contact.png";
import ContactImgMobile from "../../assets/contact-mobile.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Util/Variants";
import emailjs from "emailjs-com";
import "../../styles/global.css"
import "./contact.css";

export default function ContactForms() {
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_tbbkinw"; // Reemplaza con tu serviceID de EmailJS
    const templateID = "template_sib65zr"; // Reemplaza con tu templateID de EmailJS
    const userID = "9ljzApRgak35LNTYx"; // Reemplaza con tu userID de EmailJS

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then(
        (response) => {
          setAlertMessage("Enviado con exito! ฅ^ >ヮ<^₎ ");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Envio fallido!" + error.text);
        }
      );
  };
  return (
    <motion.div
     
      id="contact"
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  p-2 sm:pl-16 2xl:pl-28 sm:pr-24 mb-36 contact-form"
    >
      <div className="bg-pink-soft-color sm:rounded-l-2xl sm:rounded-tl-2xl sm:rounded-r-none sm:rounded-tr-none  rounded-2xl rounded-br-none rounded-bl-none bg-[url('/src/assets/bg-contact.png')] bg-cover">
        <form
          onSubmit={handleSubmit}
          className="sm:pr-14 sm:pl-14 sm:pb-10 sm:pt-10 sm:p-4 p-8"
        >
          <span className="block text-3xl font-medium mb-4 text-center text-black mt-4 sm:mt-4">
            Contacto
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  sm:gap-10">
            <div>
              {" "}
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name:
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                Email:
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div>
            {" "}
            <label className="sm:mt-4 mt-2 block text-sm font-medium leading-6">
              Message:
              <textarea
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="sm:mt-12 mt-6 w-full py-2 px-6 rounded-xl text-black bg-white shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Enviar
            </button>

            <span className="font-semibold text-center mt-4 m-auto block size-alert">
              {alertMessage}
            </span>
          </div>
        </form>
      </div>
      <div className="bg-pink-soft-color bg-responsive text-black bg-[url('/src/assets/bg-contact.png')] bg-cover rounded-br-2xl rounded-bl-2xl sm:rounded-bl-none  sm:rounded-tr-2xl">
        <div className="bg-[url('/src/assets/bg-contact.png')] bg-cover">
          <img
            src={ContactImg.src}
            alt="contact"
            className="img-contact  hidden sm:block sm:absolute"
          />
          <div className="h-28 sm:hidden">
            <img
              src={ContactImgMobile.src}
              alt="contact"
              className="sm:hidden mt-0   mr-auto ml-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
