import React from "react";
import InputControl from "../InputControl/InputControl";

const Summary = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Summary"
        placeholder="Enter your Summary/Objective"
        defaultValue={value.summary}
        onchange={(e) => handleChange("summary", e.target.value)}
      />
    </div>
  );
};

export default Summary;
