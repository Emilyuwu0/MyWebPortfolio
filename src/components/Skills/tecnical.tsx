import Html from "../../assets/skills/html.png";
import Js from "../../assets/skills/js.png";
import React from "../../assets/skills/react.png";
import Vue from "../../assets/skills/vue.png";
import Gatsby from "../../assets/skills/gatsby.png";
import CS33 from "../../assets/skills/css.png";
import Tailwind from "../../assets/skills/tailwind.png";
import Boots from "../../assets/skills/bootstrap.png";
import Sass from "../../assets/skills/sass.png";
import Figma from "../../assets/skills/figma.png";
import Zeplin from "../../assets/skills/zeplin.png";
import Ps from "../../assets/skills/ps.png";
import xD from "../../assets/skills/xd.png";

import LogoFront from "../../assets/programacion.png";
import LogoUx from "../../assets/ux.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Util/Variants";

export default function Tecnical() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ opacity: 0 }}
      className="container mx-auto p-4 bg-pink-light-color rounded-xl sm:mb-32 shadow-lg"
    >
      <div
        id="contact"
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 p-4  "
      >
        <div className="p-6">
          <img src={LogoUx.src} className="w-16 m-auto" alt="LogoUx" />
          <h2 className="mb-10 text-xl text-center mt-8 font-medium">Diseño</h2>
          <p>
            Me encanta diseñar interfaces que sean tanto atractivas como fáciles
            de usar. Combino estética y funcionalidad para crear experiencias
            digitales que conectan y deleitan a los usuarios.
          </p>
          <div className="mt-10">
            {ImgSkillsUx.map((img) => (
              <motion.div
                whileHover={{ scale: [null, 1, 1.2] }}
                transition={{ duration: 0.3 }}
                className="inline-block mt-8 cursor-pointer  "
              >
                <span className="bg-pink-soft-color rounded-3xl py-2 px-3 ml-2">
                  {img.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="border-l-pink-soft-color sm:border-l-2 border-0 p-6">
          <img src={LogoFront.src} className="w-16 m-auto" alt="LogoFront" />
          <h2 className="mb-10 text-xl text-center mt-8 font-medium">
            Frontend Developer
          </h2>
          <p>
            Me gusta codificar desde cero, transformando ideas abstractas en
            proyectos reales y funcionales en el navegador.
          </p>
          <div className="mt-16">
            {ImgSkillsFront.map((img) => (
              <motion.div
                whileHover={{ scale: [null, 1, 1.2] }}
                transition={{ duration: 0.3 }}
                className="inline-block mt-8 cursor-pointer "
              >
                <span className="bg-pink-soft-color rounded-3xl py-2 px-3 ml-2">
                  {img.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
const ImgSkillsFront = [
  {
    image: Html,
    title: "Html5",
  },
  {
    image: Js,
    title: "JavaScript",
  },
  {
    image: Js,
    title: "TypeScript",
  },
  {
    image: React,
    title: "React",
  },
  {
    image: Vue,
    title: "Vue 3",
  },
  {
    image: Gatsby,
    title: "Gatsby ",
  },
  {
    image: Gatsby,
    title: "Astro ",
  },
  {
    image: CS33,
    title: "Css 3",
  },
  {
    image: Tailwind,
    title: "Tailwind",
  },
  {
    image: Boots,
    title: "Bootstrap",
  },
  {
    image: Sass,
    title: "Sass",
  },
];

const ImgSkillsUx = [
  {
    image: Figma,
    title: "Figma",
  },
  {
    image: Zeplin,
    title: "Zeplin",
  },
  {
    image: Ps,
    title: "Photoshop",
  },
  {
    image: xD,
    title: "Adobe XD",
  },
];
