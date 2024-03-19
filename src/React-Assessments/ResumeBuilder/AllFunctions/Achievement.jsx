import React from "react";
import InputControl from "../InputControl/InputControl";
const Achievement = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter the title eg. Reactjs Developer Ceritificate"
        defaultVzlue={value.title}
        onchange={(e) => handleChange("title", e.target.value)}
      />
      <InputControl label="Description" placeholder="Line 1 " />
      <InputControl
        placeholder="Line 2 "
        defaultVzlue={value.description}
        onchange={(e) => handleChange("description", e.target.value)}
      />
    </div>
  );
};

export default Achievement;
