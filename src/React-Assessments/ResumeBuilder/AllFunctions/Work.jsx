import React from "react";
import InputControl from "../InputControl/InputControl";
const Work = () => {
  return (
    <>
      <div>
        <InputControl type="number" label="Work " placeholder="Enter your experience (in years)" />
        <InputControl  label="Title" placeholder="Enter your Title eg. Frontend Developer"/>
        <InputControl label="Company Name" placeholder="Enter your company name eg. Microsoft"/>
        <InputControl type="date" label="Start date"/>
        <InputControl type="date" label="End date" />
       <div>
        <label className="text-2xl font-semibold pl-[68px] ">Description</label>
       <InputControl placeholder="Write about your experience"/>
       <InputControl placeholder="Write about your experience"/>
       </div>
        
        
      </div>
    </>
  );
};

export default Work;
