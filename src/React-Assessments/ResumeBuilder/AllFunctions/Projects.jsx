import React from "react";
import InputControl from "../InputControl/InputControl";
const Projects = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter Project Title eg. Food App"
        defaultValue={value.projectName}
        onchange={(e) => handleChange("projectName", e.target.value)}
      />
      <InputControl
        label="Deployed Link"
        placeholder="Enter Live link of project"
        defaultValue={value.projectLink}
        onchange={(e) => handleChange("projectLink", e.target.value)}
      />
      <InputControl
        label="Github Link"
        placeholder="Enter Github link of project"
        defaultValue={value.projectGithub}
        onchange={(e) => handleChange("projectGithubLink", e.target.value)}
      />
      <InputControl
        label="Overview"
        placeholder="Line 1"
        defaultValue={value.projectOverview}
        onchange={(e) => handleChange("projectOverview", e.target.value)}
      />
      <InputControl
        placeholder="Line 2"
        defaultValue={value.projectOverview}
        onchange={(e) => handleChange("projectOverview", e.target.value)}
      />
    </div>
  );
};

export default Projects;
