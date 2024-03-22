import React, { useEffect, useState } from "react";
import InputControl from "../InputControl/InputControl";
import BasicInfo from "../AllFunctions/BasicInfo";
import Work from "../AllFunctions/Work";
import Projects from "../AllFunctions/Projects";
import Education from "../AllFunctions/Education";
import Achievement from "../AllFunctions/Achievement";
import Summary from "../AllFunctions/Summary";
const Editor = ({ sections, info, setResumeInfo }) => {
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
  const [activeInfo, setActiveInfo] = useState(
    info[sections[Object.keys(sections)[0]]]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[1]]
  );
  const [values, setValues] = useState({
    name: activeInfo?.details?.name || "Aastha Kalra",
    position: activeInfo?.details?.position || "Frontend Developer",
    linkedinLink: activeInfo?.details?.linkedinLink || "aasthaKalra9927",
    githubLink: activeInfo?.details?.githubLink || "github.com/Aastha-Kalra",
    phone: activeInfo?.details?.phone || "9997758454",
    emailId: activeInfo?.details?.emailId || "ak@gmail.com",
  });

  const handleSub = () => {
    switch (sections[activeSection]) {
      case sections.BasicInfo: {
        const tempDetails = {
          name: values.name,
          position: values.position,
          linkedinLink: values.linkedinLink,
          githubLink: values.githubLink,
          emailId: values.emailId,
          phone: values.phone,
        };

        setResumeInfo((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            details: tempDetails,
          },
        }));

        break;
      }

      case sections.workExp: {
        const tempDetails = {
          certificationLink:values.certificationLink,
          position: values.position,
          linkedinLink: values.linkedinLink,
          githubLink: values.githubLink,
          emailId: values.emailId,
          phone: values.phone,
        };

        setResumeInfo((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
          },
        }));

        break;
      }

      case sections.BasicInfo: {
        const tempDetails = {
          name: values.name,
          position: values.position,
          linkedinLink: values.linkedinLink,
          githubLink: values.githubLink,
          emailId: values.emailId,
          phone: values.phone,
        };

        setResumeInfo((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            details: tempDetails,
          },
        }));

        break;
      }

      case sections.BasicInfo: {
        const tempDetails = {
          name: values.name,
          position: values.position,
          linkedinLink: values.linkedinLink,
          githubLink: values.githubLink,
          emailId: values.emailId,
          phone: values.phone,
        };

        setResumeInfo((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            details: tempDetails,
          },
        }));

        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const activeInfo = info[sections[activeSection]];
    setActiveInfo(activeInfo);
    setSectionTitle(sections[activeSection]);
    setValues({
      name: activeInfo?.details?.name || "Aastha Kalra",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      position: activeInfo?.details
      ? activeInfo.details[0]?.position || ""
      : activeInfo?.details?.position || "Frontend Developer",
      linkedinLink: activeInfo?.details?.linkedinLink || "aasthaKalra9927",
      githubLink: activeInfo?.details?.githubLink || "github.com/Aastha-Kalra",
      phone: activeInfo?.details?.phone || "9997758454",
      emailId: activeInfo?.details?.emailId || "ak@gmail.com",
    });
  }, [activeSection]);

  const handleChange = (key, newValue) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };
  const generateBody = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo:
        return <BasicInfo value={values} handleChange={handleChange} />;
      case sections.workExp:
        return <Work value={values} handleChange={handleChange} />;
      case sections.projects:
        return <Projects value={values} handleChange={handleChange} />;
      case sections.education:
        return <Education value={values} handleChange={handleChange} />;
      case sections.achievements:
        return <Achievement value={values} handleChange={handleChange} />;
      case sections.summary:
        return <Summary value={values} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="border-2 mx-44 rounded-md my-4">
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
      <div className="mt-8">
        <InputControl
          label="Section Title"
          placeholder="Enter Section Title"
          value={sectionTitle}
          onchange={(e) => setSectionTitle(e.target.value)}
        />
      </div>
      <div className="flex mx-4 gap-4">
        {activeInfo?.details
          ? activeInfo?.details?.map((item, index) => {
              return (
                <div
                  key={item.title + index}
                  className="bg-slate-300 rounded-xl px-3 py-1 text-black"
                >
                  <p>
                    {sections[activeSection]} {index + 1}
                    <span className="mx-3">X</span>
                  </p>
                </div>
              );
            })
          : ""}
      </div>
      <div>{generateBody()}</div>
      <div
        className="
      flex justify-center items-center w-full my-4"
      >
        <button
          className="bg-yellow-600 px-7 py-2 text-2xl font-bold text-green-950 rounded-md"
          onClick={handleSub}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Editor;
