import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Editor from "../Editor/Editor";
const Body = () => {
  const colors = [
    "#2421b8",
    "#cdd61e",
    "#d6271e",
    "#d61e9f",
    "#262626",
    "#136b0e",
  ];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    projects: "Projects",
    education: "Education",
    achievements: "Achievement",
    summary: "Summary",
  };
  const [resumeInfo, setResumeInfo] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      details: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.projects]: {
      id: sections.projects,
      sectionTitle: sections.projects,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      details: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      details: "",
    },
  });
  return (
    <>
      <div className="flex justify-between px-6 my-10 items-center gap-4 py-4">
        <div className="flex gap-2">
          {colors.map((item) => {
            return (
              <div>
                <div
                  key={item}
                  style={{ background: item }}
                  className="w-14 h-14 rounded-full cursor-pointer transform ease-in duration-300   scale-90 hover:scale-110"
                ></div>
              </div>
            );
          })}
        </div>
        <div>
          <button className="bg-sky-600 px-7 py-3 flex justify-center items-center gap-3 text-white text-lg rounded-md">
            Download
            <span>
              <FaArrowDown />
            </span>
          </button>
        </div>
      </div>
<div className="p-14">
  
<Editor sections={sections} info={resumeInfo} setResumeInfo={setResumeInfo} />
</div>
    </>
  );
};

export default Body;
