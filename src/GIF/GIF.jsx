import React, { useState } from "react";
import SearchResult from "./SearchResult";
import SearchEmoji from "./SearchEmoji";
import SearchInput from "./SearchInput";
const GIF = () => {
  const [filteredItem, setFilteredItem] = useState(SearchEmoji("", 50));
  const HandleSearch = (e) => {
    const filter = SearchEmoji(e.target.value);
    setFilteredItem(filter);
  };
  return (
    <div className="text-white/50 flex flex-col gap-20 justify-center items-center my-5">
      <SearchInput  HandleSearch={HandleSearch}/>
      <SearchResult filteredItem={filteredItem} />
    </div>
  );
};

export default GIF;
