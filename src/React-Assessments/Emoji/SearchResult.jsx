import React, { useState } from "react";

const SearchResult = ({ filtered }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const copyToClipboard = (src) => {
    navigator.clipboard.writeText(src);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    copyToClipboard(item);
  };

  return (
    <div className="grid grid-cols-3 gap-10 px-44">
      {filtered.map((item) => {
        const HexCode = item.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${HexCode}.png`;

        return (
          <div
            className="bg-white/5 p-14 text-center items-center flex flex-col text-2xl gap-3 rounded"
            key={item.title}
          >
            <img
              src={src}
              alt={item.title}
              onClick={() => handleItemClick(src)}
              className={` ${
                selectedItem === src
                  ? "border-2 border-blue-500 rounded p-2 "
                  : ""
              } cursor-pointer`}
            />
            <p className="text-white/50">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
