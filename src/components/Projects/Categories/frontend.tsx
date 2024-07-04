import IPCOM from "../../../assets/projects/ipcom.png";
import INNOVA from "../../../assets/projects/innvoa.png";
import Lil from "../../../assets/projects/lilIn.jpg";
import Shipyard from "../../../assets/projects/ship.jpg";
import Ces from "../../../assets/projects/ces.png";
import GWS from "../../../assets/projects/gws.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../Util/Variants";
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
    },
  ];
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ opacity: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 gap-12  2xl:gap-20"
    >
      {ProjectsUwu.map((project) => (
        <div
          key={project.name}
          className="relative flex w-full flex-col rounded-xl bg-beige-light-color bg-clip-border text-gray-700 shadow-md"
        >
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }}
            className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white -500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
          >
            <img src={project.imgProject} alt={project.name} />
          </motion.div>
          <div className="p-6">
            <h5 className="mb-2 block   font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {project.name}
            </h5>
            <p className="block f text-sm italic font-light leading-relaxed text-inherit antialiased">
              {project.date}
            </p>
            <p className="block f text-base font-light leading-relaxed text-inherit antialiased">
              {project.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              target="_blank"
              data-ripple-light="true"
              type="button"
              href={project.url}
              className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle text-xs font-medium uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Vistazo!
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
