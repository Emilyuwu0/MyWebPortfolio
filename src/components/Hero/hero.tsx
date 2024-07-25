import { useState } from "react";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import ImageWithLoading from "../Util/ImageLoader";
import Icon from "../../assets/gato.png";
import pdf from "./cv-EmilyOrduz.pdf";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const text = "Emily Orduz ".split(" ");
  const subTitle = "Frontend Developer  💻 ".split(" ");

  return (
    <header className="pb-10 relative z-40 bg-white bg-motion">
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

                <ul className="hidden absolute top-4 space-x-4 sm:flex font-medium z-10 mt-12 ml-2 cursor-pointer text-lg text-black">
                  {menuList.map((item, index) => (
                    <div
                      className={`flex ${
                        index !== 0 && index !== menuList.length - 1
                          ? "border-r-4 border-gray-300 pr-4 border-pink-soft-color h-6 rounded-t-full rounded-b-full"
                          : ""
                      }`}
                      key={item.title}
                    >
                      {item.img && (
                        <img
                          src={item.img}
                          className="w-12 border-none -mt-4"
                          alt={item.title}
                        />
                      )}

                      <a className="" key={item.title} href={item.href}>
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
                        className="absolute top-0 left-0 w-full h-[40rem] z-20 bg-mobile "
                      >
                        <ul className="md:hidden pt-20 text-lg text-black py-4 space-y-4 text-center bg-beige-light-color bg-motion-mobile  h-[40rem]">
                          <div className="bg-beige-soft ml-13rem mr-13rem p-2 rounded-t-lg -mb-10 pt-8">
                            {" "}
                            {menuList.map((item) => (
                              <li key={item.title}>
                                <a
                                  href={item.href}
                                  className="block text-lg mb-2"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}{" "}
                          </div>

                          <ImageWithLoading
                            src="https://storage.cloud.google.com/portafoliopruebauwu0/menu_mobile.webp"
                            alt="logo"
                            className="-mt-0 z-50 "
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
                  <h2 className="text-black font-medium">
                    {subTitle.map((el, i) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 2.5,
                          delay: i / 20,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))}
                  </h2>
                </div>
                <div className="flex space-x-4 mt-10">
                  <a
                    href="#aboutme"
                    className=" text-lg py-2 px-8 rounded-xl text-black bg-pink-soft-color shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  >
                    Sobre mí
                  </a>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="cv-EmilyOrduz.pdf"
                    /* href="#curriculum" */
                    className="text-lg py-2 px-6 rounded-xl text-black bg-beige-light-color shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
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
                  src="https://storage.cloud.google.com/portafoliopruebauwu0/UWU.webp"
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
