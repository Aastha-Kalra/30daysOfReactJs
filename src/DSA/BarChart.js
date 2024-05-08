const BarChart = (arr) => {
  const newArr = arr.map((currElem, index) => {
    let star = "";
    let number = 0;
    while (number < currElem) {
      star = star + "*";
      number++;
    }
    return `${index + 1}: ${star}`;
  });
  return newArr.join("\n");
};
console.log(BarChart([4, 5, 6, 3]));
export default BarChart;
