import React from "react";

const SearchInput = ({ HandleSearch }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <div>SearchInput</div>
      <input type="text" className="bg-transparent text-green-600 w-full h-10 p-4 outline  outline-2  focus:outline-4 outline-yellow-300 rounded-md" onChange={(e) => HandleSearch(e)} />
    </div>
  );
};

export default SearchInput;
