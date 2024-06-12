import Html from "../../assets/skills/html.png";
export default function Tecnical() {
  const ImgSkills = [
    {
      image: Html,
    },
    {
      image: Html,
    },
    {
      image: Html,
    },
    {
      image: Html,
    },
    {
      image: Html,
    },
    {
      image: Html,
    },
    {
      image: Html,
    },
    {
      image: Html,
    },
  ];
  return (
    <div>
      <h2 className="mb-10 font-medium text-xl text-center mt-10">
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
