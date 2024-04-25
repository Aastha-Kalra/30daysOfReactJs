const TruncateString = (str, n) => {
  if (n === 0) {
    return str;
  }
  if (str.length > n) {
    return str.slice(0, n).concat("...");
  }
};
console.log(
  TruncateString(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis culpa, velit rem voluptas laboriosam, ",
    8
  )
);
export default TruncateString;
