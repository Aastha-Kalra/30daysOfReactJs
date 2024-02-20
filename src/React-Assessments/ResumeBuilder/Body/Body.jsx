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
  const [resumeInfo,setResumeInfo]=useState({
    [sections.basicInfo]:{
      id:sections.basicInfo,
      title:sections.basicInfo,
      detail:[]
    },
    [sections.workExp]:{
      id:sections.workExp,
      title:sections.workExp,
      detail:[]
    },
    [sections.projects]:{
      id:sections.projects,
      title:sections.projects,
      detail:[]
    },
    [sections.education]:{
      id:sections.education,
      title:sections.education,
      detail:[]
    },
    [sections.achievements]:{
      id:sections.achievements,
      title:sections.achievements,
      detail:[]
    },
    [sections.summary]:{
      id:sections.summary,
      title:sections.summary,
      detail:[]
    }
  })
  return (
    <>
      <div className="flex justify-between px-6 my-10 items-center gap-4">
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

      <Editor  sections={sections}/>
    </>
  );
};

export default Body;
