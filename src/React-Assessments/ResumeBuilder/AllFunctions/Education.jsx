import React from "react";
import InputControl from "../InputControl/InputControl";
const Education = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter title eg. B.Tech"
        defaultValue={value.title}
        onchange={(e) => handleChange("title", e.target.value)}
      />
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        defaultValue={value.college}
        onchange={(e) => handleChange("collegeName", e.target.value)}
      />
      <InputControl
        label="Start Date"
        placeholder="Enter start date of this education"
        defaultValue={value.startDate}
        onchange={(e) => handleChange("startDate", e.target.value)}
      />
      <InputControl
        label="End Date"
        placeholder="Enter end date of this education"
        defaultValue={value.endDate}
        onchange={(e) => handleChange("endDate", e.target.value)}
      />
    </div>
  );
};
export default Education;
