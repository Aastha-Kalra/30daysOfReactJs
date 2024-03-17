import React from "react";
import InputControl from "../InputControl/InputControl";
const Work = ({ value, handleChange }) => {
  return (
    <>
      <div>
        <InputControl
          type="number"
          label="Work "
          placeholder="Enter your experience (in years)"
          defaultValue={value.experience}
          onchange={(e)=>handleChange('experience', e.target.value)}
        />
        <InputControl
          label="Position"
          placeholder="Enter your Position eg. Frontend Developer"
          defaultValue={value.position}
          onchange={(e)=>handleChange('position', e.target.value)}
        />
        <InputControl
          label="Company Name"
          placeholder="Enter your company name eg. Microsoft"
          defaultValue={value.companyName}
          onchange={(e)=>handleChange('companyName', e.target.value)}
        />
        <InputControl
          type="date"
          label="Start date"
          defaultValue={value.startDate}
          onchange={(e)=>handleChange('startDate', e.target.value)}
        />
        <InputControl
          type="date"
          label="End date"
          defaultValue={value.endDate}
          onchange={(e)=>handleChange('endDate', e.target.value)}
        />
        <div>
          <label className="text-2xl font-semibold pl-[68px] ">
            Description
          </label>
          <InputControl
            placeholder="Write about your experience"
            defaultValue={value.points ? value.points[0] : ""}
            onchange={(e)=>handleChange('points[0]', e.target.value)}
          />
          <InputControl
            placeholder="Write about your experience"
            defaultValue={value.points ? value.points[1] : ""}
            onchange={(e)=>handleChange('points[1]', e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Work;
