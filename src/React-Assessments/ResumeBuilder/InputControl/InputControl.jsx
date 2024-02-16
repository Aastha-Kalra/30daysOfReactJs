import React from "react";

const InputControl = ({ label, ...props }) => {
  return (
    <div className="flex gap-4 text-xl p-3 w-full px-14">
      {label && <label className="p-3">{label}</label>}
      <input className="focus:outline-none p-2 rounded-md w-full bg-transparent border-2 border-yellow-200" type="text" {...props} />
    </div>
  );
};

export default InputControl;
