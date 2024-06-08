import { useState } from "react";
import HeroImg from "../../assets/UWU.png";
import Icon from "../../assets/gato.png";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuList = [
    {
      img: Icon.src,
      title: "",
      href: "/",
    },
    {
      img: "",
      title: "Habilidades",
      href: "#skills",
    },
    {
      img: "",
      title: "Curriculum",
      href: "#curriculum",
    },
    { img: "", title: "Proyectos", href: "#project" },
    { img: "", title: "Experiencia", href: "#exp" },
  ];
  return (
    <header className="pb-10 relative z-40 bg-white ">
      <div className="container sm:mx-24 flex flex-col-reverse lg:flex-row items-center my-auto">
        <div className="lg:w-1/2 flex flex-col items-center md:items-start">
          <nav className="w-full flex justify-between items-center py-4 px-6 bg-white">
            <div className="font-semibold text-xl">Logo</div>
            {/* Desktop Menu */}
            <ul className="hidden absolute top-4 space-x-4 sm:flex font-medium z-10 mt-2 cursor-pointer text-lg text-black">
              {menuList.map((item) => (
                <div className="flex ">
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

            <img src={Icon.src} alt="logo"     className="w-10 md:hidden text-black focus:outline-none absolute top-2 left-4 z-50" />
            <button
              onClick={toggleMenu}
              className="md:hidden text-black focus:outline-none absolute top-4 right-4 z-50"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
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
            <ul className="md:hidden absolute top-0 left-0 pt-12 w-full bg-white shadow-md text-lg text-black py-4 space-y-4 text-center bg-beige-light-color h-full z-20">
              {menuList.map((item) => (
                <li key={item.title}>
                  <a href={item.href} className="block hover:text-indigo-500">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {/* Header Content */}
          <div className="sm:mt-40 mt-20 sm:ml-6 sm:mr-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-black">
              Emily Orduz
            </h1>
            <div className="sm:text-2xl text-xl mt-6">
              <h4 className="text-black font-medium">Frontend Developer</h4>
            </div>
            <div className="flex space-x-4 mt-10">
              <a
                href="#aboutme"
                className="py-2 px-6 rounded-xl text-black bg-pink-soft-color shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Sobre mí
              </a>
              <a
                href="#curriculum"
                className="py-2 px-6 rounded-xl text-black bg-beige-light-color shadow-lg transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Curriculum
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-0 flex justify-center lg:justify-end sm:absolute right-0 top-0 -mb-32 ">
          <img src={HeroImg.src} className="max-w-full" alt="Header" />
        </div>
      </div>
    </header>
  );
}
