const Occurence = (arr) => {
  let counts = {};

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
  }
  console.log(counts);
  return counts;
};
console.log(Occurence([1, 2, 3, 2, 1, 2, 2, 3, 4, 5, 4, 2, 3, 1, 1, 1]));

export default Occurence;
