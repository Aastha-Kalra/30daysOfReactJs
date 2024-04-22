const Mode = (arr) => {
  let counts = {};
  let max = 0;
  let mode;
  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > max) {
      max = counts[element];
      mode = element;
    }
  }
  return mode;
};
console.log(Mode([3, 3, 4, 5, 2, 3, 2, 3]));
export default Mode;
