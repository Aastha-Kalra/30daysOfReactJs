import React from "react";
import InputControl from "../InputControl/InputControl";
const Work = ({ value }) => {
  return (
    <>
      <div>
        <InputControl
          type="number"
          label="Work "
          placeholder="Enter your experience (in years)"
          defaultValue={value.experience}
        />
        <InputControl
          label="Position"
          placeholder="Enter your Position eg. Frontend Developer"
          defaultValue={value.position}
        />
        <InputControl
          label="Company Name"
          placeholder="Enter your company name eg. Microsoft"
          defaultValue={value.companyName}
        />
        <InputControl
          type="date"
          label="Start date"
          defaultValue={value.startDate}
        />
        <InputControl
          type="date"
          label="End date"
          defaultValue={value.endDate}
        />
        <div>
          <label className="text-2xl font-semibold pl-[68px] ">
            Description
          </label>
          <InputControl
            placeholder="Write about your experience"
            defaultValue={value.points ? value.points[0] : ""}
          />
          <InputControl
            placeholder="Write about your experience"
            defaultValue={value.points ? value.points[1] : ""}
          />
        </div>
      </div>
    </>
  );
};

export default Work;
