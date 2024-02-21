import React, { useEffect, useState } from "react";
import BasicInfo from "../AllFunctions/BasicInfo";
import Work from "../AllFunctions/Work";
import Projects from "../AllFunctions/Projects";
import Education from "../AllFunctions/Education";
import Achievement from "../AllFunctions/Achievement";
const Editor = ({ sections, info }) => {
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
  const [activeInfo, setActiveInfo] = useState(
    info[sections[Object.keys(sections)[0]]]
  );
  const generateBody = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo:
        return <BasicInfo />;
      case sections.workExp:
        return <Work />;
      case sections.projects:
        return <Projects />;
      case sections.education:
        return <Education />;
      case sections.achievements:
        return <Achievement />;
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
      <div className="flex mx-4 gap-4 my-4">
      </div>
      <div>{generateBody()}</div>
    </div>
  );
};

export default Editor;
