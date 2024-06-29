import { useState } from "react";
import FrontendPj from "./Categories/frontend";
import UxPj from "./Categories/ux";


export default function ProjectsCv() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Frontend",
      content: <FrontendPj />,
    },
    { label: "Ux / Ui ", content: <UxPj /> },
  ];
  return (
    <div id="project">
      {" "}
      <span className="block text-3xl font-medium text-center text-black mt-40 ">
        Proyectos
      </span>
      <div className=" bg-[url('/src/assets/bg-projects.png')] bg-cover">
        <div className="w-full max-w-sm m-auto text-center p-6">
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
          <div className=" sm:pt-14 sm:pb-10 text-black  rounded-md mt-6 sm:-mx-96 mb-36">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
}
