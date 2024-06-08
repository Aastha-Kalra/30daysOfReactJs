import React from "react";

const SearchInput = ({ HandleInput }) => {
  return (
    <>
      <div>SearchInput</div>
      <input type="text" onChange={(e) => HandleInput(e)} />
    </>
  );
};

export default SearchInput;
