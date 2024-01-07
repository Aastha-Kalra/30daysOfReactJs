// 1: bubble sort
// const BubbleSort = (arr) => {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// };

// console.log("bubble sort ", BubbleSort([3, 12, 14, 1, 5, 8, 6]));

// selection sort 
// const SelectionSort=(arr)=>{
//  for(let i=0;i<arr.length-1;i++){
//   let minIndex = i;
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[minIndex]>arr[j]){
//       minIndex = j
//     }
//   }
//   if(minIndex !== i){
//     [arr[minIndex],arr[i]]= [arr[i],arr[minIndex]]
//   }
//  }
//  return arr
// }

// console.log("Selection sort ",SelectionSort([3,45,2,12,54,5]));


// Insertion Sort 
// const InsertionSort = (arr)=>{
//   for(let i=1;i<arr.length;i++){
//     let current = arr[i]
//     let j = i-1;
//     while(j>=0 && arr[j]> current){
//       arr[j+1]= arr[j];
//       j--;
//     }
//     arr[j+1]= current
    
//   }
//   return arr;
// }
// console.log("Insertion sort",InsertionSort([12,23,41,65,67,4,2]));


// Merge sort 
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from both arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [8, 3, 5, 1, 7, 6, 4, 2];
const sortedArray = mergeSort(unsortedArray);
console.log("Merge sort ",sortedArray);





const Sorting = () => {
  return <div className="text-white text-9xl ">Sorting</div>;
};

export default Sorting;
