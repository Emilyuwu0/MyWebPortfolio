import AboutMe from "../../assets/about_me.png";
export default function Aboute() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:mt-56 2xl:mt-80">
      <div className="bg-pink-soft-color ">
        <img src={AboutMe.src} className="mt-0 sm:-ml-20 -ml-24 2xl:ml-0"  />
      </div>
      <div className="bg-pink-soft-color p-4 text-black">
        <div className="sm:mt-32">
          <span className="block text-3xl font-medium mb-4 text-center sm:text-left">Sobre Mí</span>
          <span className="block text-xl font-medium mb-10 text-center sm:text-left">
            Emily Tatiana Orduz Barrera
          </span>
          <span className="sm:pr-24 block text-center sm:text-left">
            Una desarrolladora de software con experiencia en la creación de
            diversos proyectos centrados en la mejora de la experiencia de
            usuario (UI/UX).<br/> He trabajado con una variedad de tecnologías y
            estilos de diseño para crear interfaces atractivas y funcionales. 
            <br/>
            Mi
            objetivo principal es aplicar mis conocimientos en diferentes
            entornos laborales y contribuir al éxito de cada proyecto en el que
            participo.
          </span>
        </div>
      </div>
    </div>
  );
}
