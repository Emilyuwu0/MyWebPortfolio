import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Profesional", content: "Contenido de la pestaña 1" },
    { label: "Tecnical", content: "Contenido de la pestaña 2" },
  ];
  return (
    <div>
      <span className="block text-3xl font-medium mb-4 text-center text-black mt-40 ">
        Skills
      </span>
      <div className="w-full max-w-md m-auto text-center">
        <div className="flex justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
                index === activeTab
                  ? "border-blue-500 text-black"
                  : "border-transparent text-pink-soft-color hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 text-black bg-beige-light-color rounded-md mt-6">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}
