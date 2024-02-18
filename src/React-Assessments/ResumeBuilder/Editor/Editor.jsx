import React, { useState } from "react";
import BasicInfo from "../AllFunctions/BasicInfo";
import Work from "../AllFunctions/Work";
import Projects from "../AllFunctions/Projects";

const Editor = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

  const generateBody = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo:
        return <BasicInfo />;
      case sections.workExp:
        return <Work />;
        case sections.projects:
          return <Projects />;
      default:
        return null;
    }
  };

  return (
    <div className="border-2 mx-44 rounded-md">
      <div className="flex justify-center items-center gap-4 text-xl bg-white/10 py-3 shadow-slate-400 ">
        {Object.keys(sections)?.map((key) => (
          <div
            className={`py-2 cursor-pointer ${
              activeSection === key
                ? "border-yellow-500 border-b-2 text-yellow-500"
                : null
            }`}
            key={key}
            onClick={() => setActiveSection(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div>{generateBody()}</div>
    </div>
  );
};

export default Editor;

