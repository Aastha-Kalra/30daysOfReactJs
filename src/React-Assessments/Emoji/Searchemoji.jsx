import Emoji from "./Emoji.json";

const SearchEmoji = (searchText,maxResults) => {
  console.log("Search Text:", searchText);

  const filteredItem = Emoji.filter((item) => {
    if (item.title.toLowerCase().includes(searchText?.toLowerCase())) {
      return true;
    }
    if (item.keywords.includes(searchText?.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxResults);


  console.log("Filtered Items:", filteredItem);

  return filteredItem;
};

export default SearchEmoji;


