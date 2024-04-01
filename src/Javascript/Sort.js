const Sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    return arr;
  }
  
  console.log(Sort([5, 3, 4, 25, 6]));
  export default Sort;
  