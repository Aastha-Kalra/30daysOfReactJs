const Median = (arr) => {
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
};
console.log(Median([4, 8, 3, 5, 6, 7]));
export default Median;
