import React from "react";

const InputControl = ({ label, ...props }) => {
  return (
    <div className="flex gap-4 text-xl p-3 w-full px-14">
      <div className="w-96">
      {label && <label className="p-3 w-full">{label}</label>}
      </div>
     <div className="w-full">
     <input className="focus:outline-none p-2 rounded-md w-full bg-transparent border-2 border-yellow-800 " type="text" {...props} />
     </div>
    </div>
  );
};

export default InputControl;
