import IPCOM from "../../../assets/projects/ipcom.png";
import INNOVA from "../../../assets/projects/innvoa.png";
import Lil from "../../../assets/projects/lilIn.jpg";
import Shipyard from "../../../assets/projects/ship.jpg";
import Ces from "../../../assets/projects/ces.png";
import GWS from "../../../assets/projects/gws.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../Util/Variants";
import "./index.css";

export default function FrontendPj() {
  const ProjectsUwu = [
    {
      imgProject: IPCOM.src,
      name: "Pagina Web IPCOM",
      date: "Sept. 2021 - Feb. 2022",
      description: "Asociada con IPCOM",
      url: "https://ipcom.ai",
    },
    {
      imgProject: INNOVA.src,
      name: "Pagina Web INNOVA",
      date: "Sept. 2022 ",
      description: "Freelance",
      url: "https://innovapya.com/#!/-bienvenido/",
    },
    {
      imgProject: Lil.src,
      name: "Pagina Web Lil Interns",
      date: "Dic. 2022 - Ene. 2023",
      description: "Asociada con AntPack",
      url: "https://www.lilinterns.com",
    },
    {
      imgProject: Shipyard.src,
      name: "Intranet Shipyard",
      date: "Oct. 2022 - Ene. 2023",
      description: "Asociada con AntPack",
      url: "https://tryshipyard.com",
    },
    {
      imgProject: Ces.src,
      name: "Pagina Web Ceslegal",
      date: "Abr. 2023 ",
      description: "Freelance",
      url: "https://ceslegal.co",
    },
    {
      imgProject: GWS.src,
      name: "Intranet Gws",
      date: "Feb. 2024 - Dic. 2023",
      description: "Asociada con AntPack",
      url: "https://gws.antpk.co/login",
    } /*    */,
  ];

  return (
    <motion.div
      className="projects-cards"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ opacity: 0 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {ProjectsUwu.map((project) => (
          <div
            key={project.name}
            className="relative flex w-full flex-col rounded-xl bg-beige-light-color bg-clip-border text-gray-700 shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg"
            >
              <img
                src={project.imgProject}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </motion.div>
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
