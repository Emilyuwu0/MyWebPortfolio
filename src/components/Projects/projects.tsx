import { useState } from "react";
import FrontendPj from "./Categories/frontend";
import UxPj from "./Categories/ux";

export default function ProjectsCv() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Profesional",
      content: <FrontendPj />,
    },
    { label: "Tecnical", 
        content: <UxPj /> },
  ];
  return (
    <div>
      {" "}
      <span className="block text-3xl font-medium mb-4 text-center text-black mt-40 ">
        Proyectos
      </span>
      <div>
   
      <div className="w-full max-w-md m-auto text-center">
        <div className="flex justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
                index === activeTab
                  ? "border-blue-500 text-black"
                  : "border-transparent text-beige-dark hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className=" sm:pt-14 sm:pb-10 bg-[url('/src/assets/bg-projects.png')] text-black  rounded-md mt-6 sm:-mx-96">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
    </div>
  );
}
