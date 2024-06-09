import Emoji from "./Emoji.json";

const SearchEmoji = (searchText, maxResults) => {
  const FilteredItem = Emoji.filter((item) => {
    if (item.title.toLowerCase().includes(searchText?.toLowerCase())) {
      return true;
    }
    if (item.keywords.toLowerCase().includes(searchText?.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
  return FilteredItem;
};

export default SearchEmoji;
