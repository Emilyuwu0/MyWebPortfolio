import { useState } from "react";
import HeroImg from "../../assets/UWU.png";

import HeroMobileImg from "../../assets/menu-responsive.png";
import Icon from "../../assets/gato.png";
import pdf from "./cv-EmilyOrduz.pdf";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const text = "Emily Orduz ".split(" ");
  const subTitle = "Frontend Developer 💻 ".split(" ");

  return (
    <header className="pb-10 relative z-40 bg-white ">
      <LazyMotion features={domAnimation}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className=" sm:mx-28 2xl:mx-52  flex flex-col-reverse lg:flex-row items-center my-auto">
            <div className="lg:w-1/2 flex flex-col items-center md:items-start">
              <nav>
                {/* Desktop Menu */}
                <ul className="hidden absolute top-4 space-x-4 sm:flex font-medium z-10 mt-2 cursor-pointer text-lg text-black">
                  {menuList.map((item) => (
                    <div className="flex " key={item.title}>
                      {item.img && (
                        <img
                          src={item.img}
                          className="w-12 border-none"
                          alt={item.title}
                        />
                      )}

                      <a className="mt-4" key={item.title} href={item.href}>
                        {item.title}
                      </a>
                    </div>
                  ))}
                </ul>
                {/* Mobile Menu Button */}

                <img
                  src={Icon.src}
                  alt="logo"
                  className="w-10 md:hidden text-black focus:outline-none absolute top-4 left-6 z-50"
                />
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-black focus:outline-none absolute top-4 right-4 z-50"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6 mt-2 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                  </svg>
                </button>
              </nav>
              {/* Mobile Menu */}
              {isOpen && (
                <>
                  <>
                    <>
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 60 }}
                        className="absolute top-0 left-0 w-full h-[40rem] z-20 bg-mobile shadow-md"
                      >
                        <ul className="md:hidden pt-20 text-lg text-black py-4 space-y-4 text-center">
                          {menuList.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                className="block text-lg mb-2"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                          <img
                            src={HeroMobileImg.src}
                            alt="logo"
                            className="mt-56 z-50"
                          />
                        </ul>
                      </motion.div>
                    </>
                  </>
                </>
              )}
              {/* Header Content */}
              <div className="sm:mt-40 2xl:mt-64 mt-20 sm:ml-6 sm:mr-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl sm:text-6xl mt-14 font-extrabold text-black">
                  {text.map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: i / 20,
                      }}
                      key={i}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
                </h1>
                <div className="sm:text-2xl text-xl mt-6">
                  <h4 className="text-black font-medium">
                    {subTitle.map((el, i) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: i / 20,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))}
                  </h4>
                </div>
                <div className="flex space-x-4 mt-10">
                  <a
                    href="#aboutme"
                    className="py-2 px-6 rounded-xl text-black bg-pink-soft-color shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  >
                    Sobre mí
                  </a>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="cv-EmilyOrduz.pdf"
                    /* href="#curriculum" */
                    className="py-2 px-6 rounded-xl text-black bg-beige-light-color shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  >
                    Curriculum
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-0 flex justify-center lg:justify-end sm:absolute right-0 top-0 -mb-32 ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <img
                  src={HeroImg.src}
                  className="max-w-full"
                  alt="Header"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </LazyMotion>
    </header>
  );
}
const menuList = [
  {
    img: Icon.src,
    title: "",
    href: "/",
  },
  {
    title: "Sobre Mí",
    href: "#aboutme",
  },
  {
    img: "",
    title: "Habilidades",
    href: "#skills",
  },
  { img: "", title: "Experiencia", href: "#exp" },
  { img: "", title: "Proyectos", href: "#project" },
  {
    img: "",
    title: "Contacto",
    href: "#contact",
  },
];
