import Html from "../../assets/skills/html.png"
import Js from "../../assets/skills/js.png";
import React from "../../assets/skills/react.png";
import Vue from "../../assets/skills/vue.png";
import Gatsby from "../../assets/skills/gatsby.png";
import CS33 from "../../assets/skills/css.png";
import Tailwind from "../../assets/skills/tailwind.png";

export default function Tecnical() {
  const ImgSkills = [
    {
      image: Html,
    },
    {
      image: Js,
    },
    {
      image: Html,
    },
    {
      image: React,
    },
    {
      image: Vue,
    },
    {
      image: Gatsby,
    },
    {
      image: CS33,
    },
    {
      image: Tailwind,
    },
  ];
  return (
    <div>
      <h2 className="mb-10 font-semibold text-xl text-center mt-10">
        Mis habilidades profesionales
      </h2>
      <div className="flex justify-center">
        {ImgSkills.map((img) => (
          <div>
            <img src={img.image.src} className="w-24 ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
