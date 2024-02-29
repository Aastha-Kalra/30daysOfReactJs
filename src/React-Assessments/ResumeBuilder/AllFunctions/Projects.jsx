import React from "react";
import InputControl from "../InputControl/InputControl";
const Projects = ({ value }) => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter Project Title eg. Food App"
        defaultValue={value.projectName}
      />
      <InputControl
        label="Deployed Link"
        placeholder="Enter Live link of project"
        defaultValue={value.projectName}
      />
      <InputControl
        label="Github Link"
        placeholder="Enter Github link of project"
        defaultValue={value.projectName}
      />
      <InputControl
        label="Overview"
        placeholder="Line 1"
        defaultValue={value.projectName}
      />
      <InputControl placeholder="Line 2" defaultValue={value.projectName} />
    </div>
  );
};

export default Projects;
