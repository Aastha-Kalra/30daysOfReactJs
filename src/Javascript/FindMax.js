const FindMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(FindMax([1, 71, 5, 4, 6]));
console.log(FindMax([-10, -7, -5, -4, -6]));
export default FindMax;
