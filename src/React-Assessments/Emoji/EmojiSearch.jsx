import React, { useState } from "react";
import Header from "./Header";
import InputSearch from "./InputSearch";
import SearchEmoji from "./Searchemoji";
import SearchResult from "./SearchResult";

const EmojiSearch = () => {
  const [filtered, setFiltered] = useState(SearchEmoji("", 50));
  const handleSearch = (e) => {
    const filter = SearchEmoji(e.target.value);
    setFiltered(filter);
  };
  return (
    <div>
      <Header />
      <InputSearch handleSearch={handleSearch} />
      <SearchResult filtered={filtered} />
    </div>
  );
};

export default EmojiSearch;
