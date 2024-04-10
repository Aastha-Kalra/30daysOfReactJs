const SumOfSquare = (arr) => {
  let sum=0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
};
console.log(SumOfSquare([2,2]));

export default SumOfSquare;
