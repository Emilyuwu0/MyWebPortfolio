import { motion } from "framer-motion";
import "./skills.css";
import { fadeIn } from "../Util/Variants";
export default function Profesional() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ opacity: 0 }}
      className="container mx-auto p-8 bg-beige-light-color  rounded-xl"
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 p-4 bg-gray-200">
          {/* Columna 1 */}
          <h2 className="mb-10 text-xl sm:text-left text-center mt-4 font-medium">
            Mis habilidades profesionales
          </h2>
          <p className="sm:text-left text-center">
            Contando con 3 años de experiencia, destacado por mi trabajo en
            equipo, iniciativa, orientación al logro, creatividad y dedicación.{" "}
            <br /> Mi enfoque en la eficiencia y la mejora continua aporta
            resultados tangibles a cada proyecto.
          </p>
        </div>
        <div className="flex-1 p-4 bg-gray-300">
          <ul role="list">
            {Skill.map((person) => (
              <li
                key={person.name}
                className="col-span-1 rounded-lg mb-8 md:mb-0 text-left"
              >
                <div className="">
                  <div className="text mt-4">
                    <p className="text-lg  mb-4">{person.name}</p>
                    <div className="progress">
                      <div className={` ${person.level}`}></div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
const Skill = [
  {
    name: "Equipo de trabajo",
    level: "progress-value",
  },

  {
    name: "Iniciativa",
    level: "progress-value-medium",
  },
  {
    name: "Creatividad",
    level: "progress-value-medium",
  },
  {
    name: "Dedicación",
    level: "progress-value-loadintermediate",
  },
];
