import Arcadia from "../../../assets/projects/arcadia.png";
import Port from "../../../assets/projects/port.jpg";
import Porto from "../../../assets/projects/porto.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../Util/Variants";
import "./index.css"
export default function UxPj() {
  const UxUwu = [
    {
      imgProject: Arcadia.src,
      name: "Arcadia Rp",
      date: "Dic. 2023",
      description: "Freelance",
      url: "https://arcadiarp.vercel.app",
    },
    {
      imgProject: Port.src,
      name: "Portafolio",
      date: "Enero. 2024",
      description: "Freelance",
      url: "https://tsukiiyamero.xyz",
    },
    {
      imgProject: Porto.src,
      name: "Portafolio",
      date: "Feb. 2024",
      description: "Freelance",
      url: "https://portafolio-emily.vercel.app",
    },
  ];

  return (
    <motion.div
    className="ux-cards"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ opacity: 0 }}
    >
      <div className="ux-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {UxUwu.map((project) => (
          <div
            key={project.name}
            className="relative flex w-full flex-col rounded-xl bg-beige-light bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg">
              <img
                src={project.imgProject}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 font-semibold leading-snug tracking-normal text-blue-gray-900">
                {project.name}
              </h5>
              <p className="text-sm italic font-light leading-relaxed">
                {project.date}
              </p>
              <p className="text-base font-light leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.url}
                className="select-none rounded-lg bg-white py-3 px-6 text-center text-xs font-medium uppercase shadow-md transition-all hover:shadow-lg focus:opacity-85"
              >
                Vistazo!
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
