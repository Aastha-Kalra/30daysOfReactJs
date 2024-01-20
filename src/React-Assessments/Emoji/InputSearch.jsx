import React from "react";

const InputSearch = ({ handleSearch }) => {
  return (
    <div className="px-52">
      <input
        type="text"
        className="w-full bg-transparent h-14 rounded-2xl focus:outline-none px-4 text-yellow-500 font-semibold text-2xl border-2 my-4"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default InputSearch;

