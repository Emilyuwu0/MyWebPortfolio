import "./skills.css";
export default function Profesional() {
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
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 p-4 bg-gray-200">
          {/* Columna 1 */}
          <h2 className="mb-10 text-xl text-left mt-4">
            Mis habilidades profesionales
          </h2>
          <p className="text-left">
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
                    <p className="text-lg font-semibold mb-4">{person.name}</p>
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
    </div>
  );
}
