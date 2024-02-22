import React from "react";
import InputControl from "../InputControl/InputControl";
const Projects = () => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter Project Title eg. Food App"
      />
      <InputControl
        label="Deployed Link"
        placeholder="Enter Live link of project"
      />
      <InputControl
        label="Github Link"
        placeholder="Enter Github link of project"
      />
      <InputControl label="Overview" placeholder="Line 1" />
      <InputControl placeholder="Line 2" />
    </div>
  );
};

export default Projects;
