import React from "react";
import InputControl from "../InputControl/InputControl";
const Education = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Title"
        placeholder="Enter title eg. B.Tech"
        defaultValue={value.eduTitle}
        onchange={(e) => handleChange("eduTitle", e.target.value)}
      />
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        defaultValue={value.collegeName}
        onchange={(e) => handleChange("collegeName", e.target.value)}
      />
      <InputControl
        label="Start Date"
        placeholder="Enter start date of this education"
        defaultValue={value.eduStartDate}
        onchange={(e) => handleChange("eduStartDate", e.target.value)}
      />
      <InputControl
        label="End Date"
        placeholder="Enter end date of this education"
        defaultValue={value.eduEndDate}
        onchange={(e) => handleChange("eduEndDate", e.target.value)}
      />
    </div>
  );
};
export default Education;
