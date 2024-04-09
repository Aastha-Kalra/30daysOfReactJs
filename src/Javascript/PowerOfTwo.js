const PowerOfTwo = (num) => {
  let output = false;
  for (let i = 0; i < num; i++) {
    if (2 ** i === num) {
      output = true;
    }
  }
  return output;
};
console.log(PowerOfTwo(16));
console.log(PowerOfTwo(3));
export default PowerOfTwo;
