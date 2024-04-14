const StringConversion = (str) => {
    console.log(str.trim());
  str = str.trim().split(" ");
  str = str.map((curElem, index) => {
    if (index === 0) {
      return curElem.toLowerCase()
    } else {
      return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
    }
  });
  console.log(str);
  return str.join("")
};
console.log(StringConversion("AASTHA KALRA"));

export default StringConversion;
