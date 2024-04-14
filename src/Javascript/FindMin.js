const FindMin = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.at(0);
};
console.log(FindMin([5, 6, 4, 2, 1,0, 3]));

export default FindMin;













