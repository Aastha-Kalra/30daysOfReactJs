import React, { useState } from "react";

const SearchFilter = () => {


    const Items= ["Tom & Jerry","Mickey Mouse","Pokemon","Ben 10","Chhota Bheem","Shin-chan", "Doraemon"]

  const [searchItems, setSearchItems] = useState("");
  const filterItems = Items.filter((item) =>
    item.toLowerCase().includes(searchItems.toLowerCase())
  );

  
  return (
    <div className="bg-black h-screen text-white flex justify-center items-center flex-col gap-5">
      <div className="text-5xl font-bold">Search filter</div>

      <div>
        <input type="text" onChange={(e) => setSearchItems(e.target.value)}  className="text-blue-500 h-14 w-96 text-3xl px-3" />
      </div>

      {filterItems.map((items, i) => (
        <div className="text-4xl">{items}</div>
      ))}
    </div>
  );
};

export default SearchFilter;
