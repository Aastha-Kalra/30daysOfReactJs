import React from "react";
import InputControl from "../InputControl/InputControl";

const BasicInfo = ({ value, handleChange }) => {
  return (
    <div>
      <InputControl
        label="Name"
        placeholder="Enter your Name"
        defaultValue={value.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <InputControl
        label="Position"
        placeholder="Enter your Position eg. Frontend Developer"
        defaultValue={value.position}
        onChange={(e) => handleChange("position", e.target.value)}
      />
      <InputControl
        label="Linkedin Link"
        placeholder="Enter your Linkedin profile link "
        defaultValue={value.linkedinLink}
        onChange={(e) => handleChange("linkedinLink", e.target.value)}
      />
      <InputControl
        label="Github Link"
        placeholder="Enter your Github profile link "
        defaultValue={value.githubLink}
        onChange={(e) => handleChange("githubLink", e.target.value)}
      />
      <InputControl
        label="Phone Number"
        placeholder="Enter your Phone number "
        defaultValue={value.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <InputControl
        label="Email Id "
        placeholder="Enter your Email Id "
        defaultValue={value.emailId}
        onChange={(e) => handleChange("emailId", e.target.value)}
      />
    </div>
  );
};

export default BasicInfo;
