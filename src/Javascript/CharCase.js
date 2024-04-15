const CharCase = (char) => {
  if (char === char.toUpperCase()) {
    return "UpperCase";
  } else {
    return "LowerCase";
  }
};
console.log(CharCase("A"));
export default CharCase;
