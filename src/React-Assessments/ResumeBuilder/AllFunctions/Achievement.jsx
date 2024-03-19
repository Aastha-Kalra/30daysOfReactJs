import React from "react";
import InputControl from "../InputControl/InputControl";
const Achievement = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter the title eg. Reactjs Developer Ceritificate"
        defaultValue={value.achievementTitle}
        onchange={(e) => handleChange("achievementTitle", e.target.value)}
      />
      <InputControl
        label="Description"
        placeholder="Line 1 "
        defaultValue={value.achievementDescription1}
        onchange={(e) => handleChange("achievementDescription1", e.target.value)}
      />
      <InputControl
        placeholder="Line 2 "
        defaultValue={value.achievementDescription2}
        onchange={(e) => handleChange("achievementDescription2", e.target.value)}
      />
    </div>
  );
};

export default Achievement;
