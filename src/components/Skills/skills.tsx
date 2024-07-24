import { useState } from "react";
import Profesional from "./profesional";
import Tecnical from "./tecnical";
import "./skills.css";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Profesional",
      content: <Profesional />,
    },
    { label: "Tecnical", content: <Tecnical /> },
  ];

  return (
    <div className=" bg-motion">
      <div
        id="skills"
        className="bg-[url('/src/assets/bg-projects.png')] bg-cover sm:mb-2 pb-28 sm:p-2 p-4 "
      >
        <span className=" block text-3xl font-medium mb-4 text-center text-black pt-16 sm:pt-40 ">
          Skills
        </span>
        <div className="w-full max-w-md m-auto text-center ">
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
          <div className="sm:pl-10 sm:pr-10 sm:pt-4 sm:pb-10 text-black  rounded-md mt-6 sm:-mx-96">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
}
