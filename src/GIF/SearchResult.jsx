import React from "react";
import Emojis from "./Emoji.json";
const SearchResult = () => {
  return (
    <>
      <div>SearchResult</div>
      <div className="grid grid-cols-10 gap-4">
        {Emojis.map((emoji) => {
          const hexCode = emoji.symbol.codePointAt(0).toString(16);
          const src = `//cdn.jsdelivr.net/emojione/assets/png/${hexCode}.png`;
          return (
            <div className="bg-slate-800 p-4 rounded-md cursor-pointer">
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
