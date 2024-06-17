import React from "react";
import IPCOM from "../../../assets/projects/ipcom.png";
import INNOVA from "../../../assets/projects/innvoa.png";
import Lil from "../../../assets/projects/lilIn.jpg";
import Shipyard from "../../../assets/projects/shipýard.png";
import Ces from "../../../assets/projects/ces.png";
import GWS from "../../../assets/projects/gws.png";
export default function FrontendPj() {
  const ProjectsUwu = [
    {
      imgProject: IPCOM.src,
      name: "Pagina Web IPCOM",
      date: "Sept. 2021 - feb. 2022",
      description: "Asociada con IPCOM",
    },
    {
      imgProject: INNOVA.src,
      name: "Pagina Web INNOVA",
      date: "Sept. 2022 - sept. 2022",
      description: "Freelance",
    },
    {
      imgProject: Lil.src,
      name: "Pagina Web Lil Interns",
      date: "Dic. 2022 - ene. 2023",
      description: "Asociada con AntPack",
    },
    {
      imgProject: Shipyard.src,
      name: "Intranet Shipyard",
      date: "Oct. 2022 - ene. 2023",
      description: "Asociada con AntPack",
    },
    {
      imgProject: Ces.src,
      name: "Pagina Web Ceslegal",
      date: "Abr. 2023 - abr. 20233",
      description: "Freelance",
    },
    {
      imgProject: GWS.src,
      name: "Intranet Gws",
      date: "Feb. 2024 - Dic. 2023",
      description: "Asociada con AntPack",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-20">
      {ProjectsUwu.map((project) => (
        <div
          key={project.name}
          className="relative flex w-full flex-col rounded-xl bg-beige-light-color bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white -500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={project.imgProject} alt={project.name}/>
          </div>
          <div className="p-6">
            <h5 className="mb-2 block  text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {project.name}
            </h5>
            <p className="block f text-base font-light leading-relaxed text-inherit antialiased">
              {project.date}
            </p>
            <p className="block f text-base font-light leading-relaxed text-inherit antialiased">
              {project.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle text-xs font-medium uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Vistazo!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
