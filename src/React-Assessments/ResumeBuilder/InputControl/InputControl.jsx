import React from "react";

const InputControl = ({ label,onchange,...props}) => {
  return (
    <div className="flex gap-4 text-xl py-4 w-full px-14">
      <div className="w-96">
      {label && <label className="p-3 w-full font-semibold text-2xl">{label}</label>}
      </div>
     <div className="w-full">
     <input className="focus:outline-none p-2 rounded-md w-full bg-transparent border-2 border-yellow-800 " type="text" onChange={onchange} {...props} />
     </div>
    </div>
  );
};

export default InputControl;
