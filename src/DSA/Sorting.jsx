// 1: bubble sort
const BubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

console.log("bubble sort ", BubbleSort([3, 12, 14, 1, 5, 8, 6]));

const Sorting = () => {
  return <div>Sorting</div>;
};

export default Sorting;
