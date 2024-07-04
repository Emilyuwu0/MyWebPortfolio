import Arcadia from "../../../assets/projects/arcadia.png";
import Port from "../../../assets/projects/port.jpg";
import Porto from "../../../assets/projects/porto.jpg";
import { motion } from "framer-motion";
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-20">
        {UxUwu.map((project) => (
               <motion.div
               className="box"
               whileHover={{ scale: [null, 1.2, 1.2] }}
               transition={{ duration: 0.3 }}
             >
          <div
            key={project.name}
            className="relative flex w-full flex-col rounded-xl bg-beige-light bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white -500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={project.imgProject} alt={project.name} />
            </div>
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
                href={project.url}
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle text-xs font-medium uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Vistazo!
              </a>
            </div>
          </div></motion.div>
        ))} 
      </div>
    </div>
  );
}
